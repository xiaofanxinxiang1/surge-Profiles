/*
感谢@小白脸 重写脚本原脚本
原作者@yibeizipeini来自于https://raw.githubusercontent.com/yibeizipeini/JavaScript/Surge/ConnectivityTest.js
 */
let $ = {

Baidu:'https://www.baidu.com',
Google:'https://www.google.com/generate_204',
GitHub:'https://www.github.com',
YouTube:'https://www.youtube.com/'

}
!(async () => {
await Promise.all([http($.Baidu),http($. Google),http($. GitHub),http($.YouTube)]).then((x)=>{
	$done({
    title: '网络延迟',
    content: x.join('\n'),
    icon: 'bolt.horizontal.icloud',
    'icon-color': '#5AC8FA',
  })
})
})();
function http(req) {
    return new Promise((r) => {
			let time = Date.now();
        $httpClient.post(req, (err, resp, data) => {
            r(req.split(".")[1]+
						'\xa0\xa0\xa0\xa0\xa0\t: ' +
						(Date.now() - time)+' ms');
        });
    });
}
