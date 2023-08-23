function digitize(n) {
    return Array.from(String(n), Number).reverse();//Array.from() & Array.prototype.reverse()
}