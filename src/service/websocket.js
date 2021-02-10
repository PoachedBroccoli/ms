let socket = null
let _url = ''

export const init = url => {
    _url = url
    socket && socket.close()
    if (!socket) {
        socket = new WebSocket(url)
        socket.onopen = onopenWS
        socket.onmessage = onmessageWS
        socket.onerror = onerrorWS
        socket.onclose = oncloseWS
    }
}

const onopenWS = () => {
}

const onmessageWS = e => {
    window.dispatchEvent(new CustomEvent('onmessage', {
        detail: {
            data: e.data
        }
    }))
}

const onerrorWS = () => {
    socket && socket.close()
    if (socket.readyState !== 3) {
        socket = null
        init(_url)
    }
}

const oncloseWS = () => {
    if (socket.readyState !== 2) {
        socket = null
        init(_url)
    }
}

const connecting = message => {
    setTimeout(() => {
        if (socket.readyState === 0) {
            connecting(message)
        } else {
            socket.send(JSON.stringify(message))
        }
    }, 1000)
}

export const push = message => {
    if (socket !== null && socket.readyState === 3) {
        socket.close()
        init(_url)
    } else if (socket.readyState === 1) {
        socket.send(JSON.stringify(message))
    } else if (socket.readyState === 0) {
        connecting(message)
    }
}

export const close = () => socket && socket.close()

/*
0 ：对应常量 CONNECTING
正在建立连接连接，还没有完成。
1 ：对应常量 OPEN
连接成功建立，可以进行通信。
2 ：对应常量 CLOSING
连接正在进行关闭握手，即将关闭。
3 : 对应常量 CLOSED
连接已经关闭或者根本没有建立。
 */