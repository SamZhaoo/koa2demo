const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
app.use(bodyParser())

app.use(async(ctx)=>{
    let url = ctx.request.url
    let html = await route(url)
    ctx.body = html
})

async function route(url){
    let page = ''
    switch(url){
        case'/':
            page = 'index.html'
            break;
        case'/home':
            page = 'home.html'
            break;
        default:
            page = '404.html'
    }
    let html = await render(page)
    return html;
}

function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl = `./pages/${page}`
        fs.readFile(pageUrl,"binary",(err,data)=>{
            if(err){
                reject(err)
            } else {
                console.log(data)
                resolve(data)
            }
        })
    })
}

app.listen(3000, () => {
	console.log('[demo] start-quick is starting at port 3000')
})
