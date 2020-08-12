const Koa = require('koa')
const fs = require('fs')
const app = new Koa()
// const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')

const index1 = new Router()
const index2 = new Router()
const router = new Router()


index1.get('/first',async(ctx)=>{
    let html = await route('/first')
    ctx.body = html
})
.get('/second',async(ctx)=>{
    let html = await route('/second')
    ctx.body = html
})


index2.get('/third',async(ctx)=>{
    let html = await route('/third')
    ctx.body = html
})
.get('/fourth',async(ctx)=>{
    let html = await route('/fourth')
    ctx.body = html
})

router.use('/index1',index1.routes(),index1.allowedMethods())
router.use('/index2',index2.routes(),index2.allowedMethods())

app.use(router.routes())
// 判断是否遵循get请求，非get报错
.use(router.allowedMethods())

app.listen(3000, () => {
	console.log('starting at port 3000')
})

// 获取路由页面
async function route(url){
    let page = ''
    switch(url){
        case'/first':
            page = 'first.html'
            break;
        case'/second':
            page = 'second.html'
            break;
        case'/third':
            page = 'third.html'
            break;
        case'/fourth':
            page = 'fourth.html'
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
