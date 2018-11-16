module.exports = {
	// 模版标识
	name: 'example',
	// 模版引擎
	engine: 'pug',

	// 页面
	pages: [
		{
			name: '关于我们',
			// 路径
			path: '/',
			// 预览图
			thumbnail: 'home.png',
		},
		{
			name: '特别优惠',
			// 路径
			path: 'discount',
			// 预览图
			thumbnail: 'discount.png',
		},
		{
			name: '热门旅游',
			// 路径
			path: 'hot',
			// 预览图
			thumbnail: 'hot.png',
		},
		{
			name: '博客',
			// 路径
			path: 'blog',
			// 预览图
			thumbnail: 'blog.png',
		},
		{
			name: '联系我们',
			// 路径
			path: 'contacts',
			// 预览图
			thumbnail: 'contacts.png',
		}
	]
}
