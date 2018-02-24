var backgrounds = ["https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-0.3.5&s=2e7538690c595f98efb01d780d4ce986&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1467294388771-b3e867a4d321?ixlib=rb-0.3.5&s=914592383364aed60abbfaf7b74d9ad4&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1471644518115-1f02e9819854?ixlib=rb-0.3.5&s=6afe7499e74e46572790bac38ddeedd1&auto=format&fit=crop&w=1950&q=80","https://images.unsplash.com/photo-1471931452361-f5ff1faa15ad?ixlib=rb-0.3.5&s=c1a1e60a97e82473cf5130fc427c10f4&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1476644542099-388b8e820a81?ixlib=rb-0.3.5&s=2019c8c5caaed0136c5923b3e77fe2ad&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1472642718269-447cc4f054d2?ixlib=rb-0.3.5&s=84e03e9102b71bec01fec6f5657333e6&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1494625927555-6ec4433b1571?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9eb1fe2088d1ea96d4d49428b83876ff&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1477813594830-ffe28bcac950?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cd5e6afb672d8b3656b44069345157f1&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1482590519864-5cb070228c8a?ixlib=rb-0.3.5&s=44d1c529c1accacef0b1db6624f28c65&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1459604356901-e62d22229cda?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9588c7e6b8d681e22bbaaf6b343f5e32&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1483639092905-bad36a65abfe?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9671cd8c2fef1a0f66d5453c31057509&auto=format&fit=crop&w=800&q=60","https://images.unsplash.com/photo-1459539235056-5045ca20e525?ixlib=rb-0.3.5&s=530efa3b660a7bd06072987a98c1bc34&auto=format&fit=crop&w=800&q=60"]

random = Math.floor(Math.random() * backgrounds.length);
console.log(random)


$(document).ready(function(){
    // $('body').css({
    //     'background':'url('+backgrounds[random]+')',
    //     'background-position':'scroll',
    //     'background-size':'cover',
    //     'height':'100vh',
    //     'font-family':'"Vollkorn SC", serif'
    // })
});