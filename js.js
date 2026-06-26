function pedirProduto(productName, productPrice) {
    const message = `Olá! Gostaria de comprar esse produto: ${productName} pelo valor de ${productPrice}. Pode me passar mais informações?`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappLink, '_blank');
}