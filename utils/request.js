const baseURL = 'https://119.3.37.42:3003'

export function request(obj) {
	return new Promise(function(resolve, reject) {
		let data = {}
		let contentType = "application/json"
		let method = "GET"
		let url = ''
		if(obj.url){
				url=obj.url
		}
		if (obj.data) {
			data = obj.data
		}
		if (obj.contentType) {
			contentType = obj.contentType
		}
		if (obj.method) {
			method = obj.method
		}
		uni.request({
			url: baseURL + obj.url,
			
			success: function(res) {
				resolve(res)
			},
			fail: function(res) {
				reject(res)
			},
			complete: function() {
				// 处理请求完成后需要做的事情
			}
		})

	})

}

function showToast(content, duration) {

	wx.showToast({
		title: content,
		icon: 'none',
		duration: duration
	})
}

function showLoading() {
	let instance
	let isLoading = false

	function init() {

		return {
			isLoading: isLoading,
			showLoading: function(title) {
				if (!isLoading) {
					uni.showLoading({
						title
					})
					isLoading = true
				}

			},
			hideLoading: function() {
				if (isLoading) {
					uni.hideLoading()
					isLoading = false
				}

			}
		}
	}

	return {
		getInstance: () => {

			if (!instance) {
				instance = init()
			}
			return instance

		}

	}
}
export default showLoading()

// function single() {

// 	let instance

// 	function init() {
// 		// 单例代码逻辑
// 		let
// 		return {
// 			// 公有方法和属性
// 		}

// 	}
// 	return {
// 		getInstance: function() {
// 			if (!instance) {
// 				instance = init()
// 			}
// 			return instance

// 		}

// 	}
// }
