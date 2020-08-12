// 获取get参数解析
// app.use(async (ctx)=>{
//     let url =ctx.url;
//     let request =ctx.request;
//     let req_query = request.query;
//     let req_querystring = request.querystring;

//     ctx.body={
//         url,
//         req_query,
//         req_querystring
//     }
// })

// 获取post参数解析
// app.use(async (ctx) => {
// 	//当请求时GET请求时，显示表单让用户填写
// 	if (ctx.url === '/' && ctx.method === 'GET') {
// 		let html = `
//             <h1>Koa2 request post demo</h1>
//             <form method="POST"  action="/">
//                 <p>userName</p>
//                 <input name="userName" /> <br/>
//                 <p>age</p>
//                 <input name="age" /> <br/>
//                 <p>webSite</p>
//                 <input name='webSite' /><br/>
//                 <button type="submit">submit</button>
//             </form>
//         `
// 		ctx.body = html
// 		//当请求时POST请求时
// 	} else if (ctx.url === '/' && ctx.method === 'POST') {
// 		let postData = ctx.request.body
// 		ctx.body = postData
//      console.log(parseQueryStr(pastData))
// 	} else {
// 		//其它请求显示404页面
// 		ctx.body = '<h1>404!</h1>'
// 	}
// })

// 获取参数字符串
// function parsePostData(ctx){
//     return new Promise((resolve,reject)=>{
//         try{
//             let postdata="";
//             ctx.req.on('data',(data)=>{
//                 postdata += data
//             })
//             ctx.req.addListener("end",function(){

//                 resolve(postdata);
//             })
//         }catch(error){
//             reject(error);
//         }
//     });
// }

// 字符串转json
// function parseQueryStr(queryStr){
//     let queryData={};
//     let queryStrList = queryStr.split('&');
//     console.log(queryStrList);
//     for( let [index,queryStr] of queryStrList.entries() ){
//         let itemList = queryStr.split('=');
//         console.log(itemList);
//         queryData[itemList[0]] = decodeURIComponent(itemList[1]);
//     }
//     return queryData
// }