const glados = async () => {
  const cookie = process.env.GLADOS
  if (!cookie) return
  try {
    const headers = {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
      'cache-control': 'no-cache',
      'content-type': 'application/json;charset=UTF-8',
      'cookie': cookie,
      'origin': 'https://glados.rocks',
      'pragma': 'no-cache',
      'priority': 'u=1, i',
      'sec-ch-ua': '"Google Chrome";v="153", "Not_A Brand";v="8", "Chromium";v="153"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.0.0 Safari/537.36'
    }
    const checkin = await fetch('https://glados.rocks/api/user/checkin', {
      method: 'POST',
      headers,
      body: JSON.stringify({ token: 'glados.rocks' }),
    }).then((r) => r.json())
    
    const res = [
      'Checkin OK',
      `${checkin.message}`,
      `Status: ${JSON.stringify(checkin)}`,
    ]
    console.log(res)
    return res
  } catch (error) {
    const res = [
      'Checkin Error',
      `${error}`,
      `<${process.env.GITHUB_SERVER_URL}/${process.env.GITHUB_REPOSITORY}>`,
    ]
    console.log(res)
    return res
  }
}

const notify = async (contents) => {
  const token = process.env.NOTIFY
  if (!token || !contents) return
  await fetch(`https://www.pushplus.plus/send`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      token,
      title: contents[0],
      content: contents.join('<br>'),
      template: 'markdown',
    }),
  })
}

const notify_ft = async (contents) => {
  const token = process.env.FT_SEND_KEY
  if (!token || !contents) return
  
  const baseUrl = `https://sctapi.ftqq.com/${token}.send`;
  const params = {
    text: contents[0],
    desp: contents.join('\n\n')
  };
  console.log(params)
  
  // 使用 URL 和 URLSearchParams 搭配处理
  const url = new URL(baseUrl);
  url.search = new URLSearchParams(params);
  await fetch(url.toString(), {
    method: 'GET'
  })
}

const main = async () => {
  //await notify(await glados())
  await notify_ft(await glados())
}

main()
