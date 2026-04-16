export async function GET({ request }) {
    const url = new URL(request.url);
    const code = url.searchParams.get('code');
    
    if (!code) {
        return new Response(JSON.stringify({ error: '缺少股票代码' }), { 
            status: 400,
            headers: { 'Access-Control-Allow-Origin': '*' }
        });
    }
    
    const apiKey = '69e07e9fbf48a8.28155838';
    const apiUrl = `https://eodhd.com/api/eod/${code}?api_token=${apiKey}&fmt=json`;
    
    try {
        const response = await fetch(apiUrl);
        
        if (!response.ok) {
            return new Response(JSON.stringify({ error: `API请求失败: ${response.status}` }), { 
                status: response.status,
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }
        
        const data = await response.json();
        
        if (!Array.isArray(data) || data.length === 0) {
            return new Response(JSON.stringify({ error: '未获取到数据' }), { 
                status: 404,
                headers: { 'Access-Control-Allow-Origin': '*' }
            });
        }
        
        const klineData = data.map(item => [
            item.date,
            typeof item.open === 'number' ? item.open.toFixed(2) : item.open,
            typeof item.close === 'number' ? item.close.toFixed(2) : item.close,
            typeof item.low === 'number' ? item.low.toFixed(2) : item.low,
            typeof item.high === 'number' ? item.high.toFixed(2) : item.high
        ]);
        
        return new Response(JSON.stringify(klineData), {
            headers: { 
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json'
            }
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: '获取数据失败: ' + error.message }), { 
            status: 500,
            headers: { 'Access-Control-Allow-Origin': '*' }
        });
    }
}