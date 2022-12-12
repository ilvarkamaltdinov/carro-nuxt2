export default {
    validate(ctx) {
        return ctx.params.category === 'used' || ctx.params.category === 'commercial' || ctx.params.category === 'europe';
    }
}
