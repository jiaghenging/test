const appEss = new Vue({
	el:'#appEss',
	data(){
		return{
			actIndex:0,
			actJjindex:1,
			essList:[
				{
					name:'ESS6048E200P2',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS6048E200P2.png',
					cs:[
						{
							name:'电池模块：',
							val:'200AH（100AH*2）'
						},
						{
							name:'能源容量：',
							val:'10.24KWH'
						},
						{
							name:'输出功率：',
							val:'6KW  纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'100A(50A*2)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'940*560*785mm'
						},
						{
							name:'产品净重：',
							val:'180KG'
						}
					]
				},
				{
					name:'ESS8048E300P3',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS8048E300P3.png',
					cs:[
						{
							name:'电池模块：',
							val:'300AH(100AH*3)'
						},
						{
							name:'能源容量：',
							val:'15.36KWH'
						},
						{
							name:'输出功率：',
							val:'8KW  纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'150A(50A*3)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1360*560*785mm'
						},
						{
							name:'产品净重：',
							val:'300KG'
						}
					]
				},
				{
					name:'ESS10048E400P4',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS10048E400P4.png',
					cs:[
						{
							name:'电池模块：',
							val:'400AH(200AH*2)'
						},
						{
							name:'能源容量：',
							val:'20.48KWH'
						},
						{
							name:'输出功率：',
							val:'10KW  纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'200A(50A*4)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1110*560*960mm'
						},
						{
							name:'产品净重：',
							val:'350KG'
						}
					]
				},
				{
					name:'ESS12048E500P4',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS12048E500P4.png',
					cs:[
						{
							name:'电池模块：',
							val:'500AH(100AH*5)'
						},
						{
							name:'能源容量：',
							val:'25.6KWH'
						},
						{
							name:'输出功率：',
							val:'12KW  纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'240A(60A*4)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1810*560*785mm'
						},
						{
							name:'产品净重：',
							val:'450KG'
						}
					]
				},
				{
					name:'ESS12048E600P4',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS12048E600P4.png',
					cs:[
						{
							name:'电池模块：',
							val:'600AH(200AH*3)'
						},
						{
							name:'能源容量：',
							val:'30.72KWH'
						},
						{
							name:'输出功率：',
							val:'12KW  纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'240A(60A*4)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1360*560*960mm'
						},
						{
							name:'产品净重：',
							val:'440KG'
						}
					]
				},
				{
					name:'ESS15048E800P4',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS15048E800P4.png',
					cs:[
						{
							name:'电池模块：',
							val:'800AH(200AH*4)'
						},
						{
							name:'能源容量：',
							val:'40.96KWH'
						},
						{
							name:'输出功率：',
							val:'15KW 纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'240A(60A*4)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1610*560*960mm'
						},
						{
							name:'产品净重：',
							val:'560KG'
						}
					]
				},
				{
					name:'ESS18048E1000P4',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS18048E1000P4.png',
					cs:[
						{
							name:'电池模块：',
							val:'1000AH(200AH*5)'
						},
						{
							name:'能源容量：',
							val:'51.2KWH'
						},
						{
							name:'输出功率：',
							val:'18KW 纯正弦波输出'
						},
						{
							name:'太阳能控制器：',
							val:'240A(60A*4)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1810*560*960mm'
						},
						{
							name:'产品净重：',
							val:'720KG'
						}
					]
				},
				{
					name:'ESS2000P8',
					img:'../../../static/image/project/cnwdw/ess/canshu/ESS2000P8.png',
					cs:[
						{
							name:'电池模块：',
							val:'2000AH(200AH*10)'
						},
						{
							name:'能源容量：',
							val:'102.4KWH'
						},
						{
							name:'逆变器：',
							val:'外接'
						},
						{
							name:'太阳能控制器：',
							val:'480A(60A*8)'
						},
						{
							name:'安装：',
							val:'室内'
						},
						{
							name:'产品尺寸：',
							val:'1650*1120*1000mm'
						},
						{
							name:'产品净重：',
							val:'1300KG'
						}
					]
				}
			]
		}
	},
	methods:{
		addIndex(){
			const that=this;
			if(that.actIndex<(that.essList.length-1)){
				that.actIndex+=1;
			}
		},
		reduceIndex(){
			const that=this;
			if(that.actIndex>0){
				that.actIndex-=1;
			}
		},
	}
})