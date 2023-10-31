const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
        return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
        return;
    }

    const { error } = await stripe.createPaymentMethod({
        type: 'card',
        card,
    });

    if (error) {
        console.log('error', error);
        setCardError(error.message);
    } else {
        setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
        clientSecret,
        {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'unknown',
                    name: user?.displayName || 'anonymous',
                },
            },
        }
    );

    if (confirmError) {
        console.log(confirmError);
    }

    if (paymentIntent) {
        console.log('paymentIntent', paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id);

            // save payment information to the server
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                quantity: cart.length,
                items: cart.map((item) => item._id),
                itemNames: cart.map((item) => item.name),
            };
            axiosSecure.post('/payments', payment).then((res) => {
                console.log(res.data);
                if (res.data.insertedId) {
                    // display confirm
                }
            });
        }
    }
};
