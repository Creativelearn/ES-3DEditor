export default {
	layout: {
		header: {
			File: '文件',
			/* File 下的选项 */
			New: '新建',
			'New THREEJS Scene':'新建THREEJS场景',
			'New Cesium Fusion Scene':'新建Cesium融合场景',
			Import: '导入',
			'Import Zip': '导入压缩包',
			Export: '导出',
			'Export Geometry': '导出几何体',
			'Export Object': '导出物体',
			'Export Scene': '导出场景',
			'Export Format': '导出格式',
			'PLY (Binary)': 'PLY(二进制)',
			'STL (Binary)': 'STL(二进制)',
			/* Network */
			Network: '网络',
			'Save As A New Project':"保存为新工程",
			'Save To The Server As A New Project': '作为新工程保存至服务器',
			'Get The Project From The Server': '从服务器获取工程',
			'Update Project To Server': '更新工程至服务器',
			Preview: '预览',
			/* File 下的选项 End */
			/* Edit 下的选项 */
			'Undo(Ctrl+Z)': '撤销(Ctrl+Z)',
			'Redo(Ctrl+Y)': '重做(Ctrl+Y)',
			Clone: '拷贝',
			'Delete(Del)': '删除(Del)',
			/* Edit 下的选项 End */
			Add: '添加',
			/* Add 下的选项 */
			Object3D: '3D对象',
			Group: '组',
			Sprite: '精灵',
			General: '通用',
			Box: '正方体',
			Circle: '圆',
			Torus: '圆环体',
			Cylinder: '圆柱体',
			Sphere: '球体',
			Plane: '平面',
			Ring: '环',
			Polyhedron: '多面体',
			Tetrahedron: '四面体',
			Octahedron: '八面体',
			Dodecahedron: '十二面体',
			Icosahedron: '二十面体',
			Other: '其他',
			Capsule: '胶囊',
			Lathe: '酒杯',
			'Double cone':"双锥",
			TorusKnot: '环面扭结体',
			Tube: '管',
			Teapot: '茶壶',
			Light: '灯光',
			AmbientLight: '环境光',
			DirectionalLight: '平行光',
			HemisphereLight: '半球光',
			PointLight: '点光源',
			SpotLight: '聚光灯',
			Camera: '相机',
			OrthographicCamera: '正交相机',
			PerspectiveCamera: '透视相机',
			/* 示例下的选项 */
			Example: '示例',

			/* Help 下的选项 */
			Help: '帮助',
			Document:"文档",
			'Author': '作者',
			'Project Link': '项目地址',
			/* 中间快捷操作 */
			Fullscreen: '全屏',
			'Exit fullscreen': '退出全屏',
			Play: '启动',
			Stop: '停止',
			/* 右侧操作 */
			'Save locally': '本地保存',
			'Code out':"出码",
			"Use system theme":"跟随系统",
			Undertint: '浅色',
			Dark: '深色',
			'Main color': '主色调',
		},
		scene: {
			toolbar: {
				Top:"顶视图",
				Bottom:"底视图",
				Left:"左视图",
				Right:"右视图",
				Front:"前视图",
				Back:"后视图",
				"Scene camera":"场景相机",
				Realistic: "真实",
				Solid: '原色',
				Normals: '法向',
				Wireframe: '线框',
				local: '本地坐标',
				world: '世界坐标',
			},
			viewportInfo: {
				objects: '物体',
				vertices: '顶点',
				triangles: '三角面',
				frametime: '帧时',
			},
		},
		sider: {
			Scene: '场景',
			Project: '项目',
			scene: {
				search: '搜索',
				'Click Upload': '点击上传',
				// 几何组件tab
				Center: '居中',
				Width:"宽度",
				Height:"高度",
				Depth:"深度",
				"Width segments":"宽度分段",
				"Height segments":"高度分段",
				"Depth segments":"深度分段",
				Radius:"半径",
				Length:"长度",
				"Cap segments":"胶囊分段",
				"Radial segments":"径向分段",
				Segments:"分段",
				"Theta start":"弧度起点",
				"Theta length":"弧度长度",
				"Radius top":"顶部半径",
				"Radius bottom":"底部半径",
				"Open ended":"开端",
				"Facet segments":"面片分段",
				'Curve Segments':"曲线段",
				Steps:"细分点数",
				'Enabled bevel':"启用斜角",
				'Bevel thickness':"斜角厚度",
				'Bevel size':"斜角大小",
				'Bevel offset':"斜角偏移量",
				'Bevel segments':"斜角分段",
				'Convert to Shape':"转换图形",
				Path:"路径",
				'Tubular segments': '管厚分段',
				Closed:"闭合",
				'Curve type':"曲线类型",
				Tension: '张力',
				'Phi start':"经度起点",
				'Phi length':"经度长度",
				Points:"点",
				'Inner radius':"内半径",
				'Outer radius':'外半径',
				'Theta segments': '弧度分段',
				'Phi segments':'经度分段',
				Extrude:"拉伸",
				Tube:'管厚',
				Arc:"弧度",
				P:"管长弧度",
				Q:"扭曲弧度",
			},
			project: {
				'please enter the scene name': '请输入场景名称',
				'please enter the scene introduction': '请输入场景描述',
				editable: '编辑性',
				VR: '虚拟现实',
				antialias: '抗锯齿',
				shadows: '阴影',
				'tone mapping': '色调映射',
				materials: '材质',
				'select material': '选择材质',
				assign: '应用',
			},
			// ------------- 20240325：重新布局 ----------------
			"Renderer config": '渲染器配置',
			"Scene config": '场景配置',
			sceneConfig:{
				"Project information":"项目信息",
				Background: '背景',
				Environment: '环境',
				Fog: '雾',
				Grid: '网格',
				Helpers: '辅助',
				Video: '视频',
				resolution: '分辨率',
				"frame rate":"帧率",
				duration: '时长',
				seconds: '秒',
				render: '渲染',
			},
			History: '历史记录',
			history:{
				persistent: '本地存储',
				'Clear History': '清空历史记录',
			},
			Object: '对象',
			object:{
				type: '类型',
				uuid: '识别码',
				name: '名称',
				position: '位置',
				rotation: '旋转',
				scale: '缩放',
				fov: '视角',
				left: '左',
				right: '右',
				top: '上',
				bottom: '下',
				near: '近点',
				far: '远点',
				intensity: '强度',
				color: '颜色',
				groundcolor: '基色',
				distance: '距离',
				angle: '角度',
				penumbra: '边缘',
				decay: '衰减',
				shadow: '阴影',
				shadowBias: '阴影偏移',
				shadowNormalBias: '阴影法线偏移',
				shadowRadius: '阴影半径',
				cast: '产生',
				receive: '接受',
				visible: '可见性',
				frustumcull: '视锥体裁剪',
				renderorder: '渲染次序',
				userdata: '自定义数据',
			},
			Geometry: '几何',
			geometry:{
				'Compute Vertex Normals': '计算顶点法线',
				'Afficher normales': '显示顶点法线',
				bounds: '界限',
				attributes: '属性',
				index: '索引',
			},
			Material: '材质',
			material:{
				slot: '插槽',
				Programme: '程序',
				Info: '信息',
				Vert: '顶点',
				Frag: '片元',
				Color: '颜色',
				Specular: '高光',
				Shininess: '高光大小',
				Emissive: '自发光',
				Reflectivity: '反射率',
				Roughness: '粗糙度',
				Metalness: '金属度',
				Clearcoat: '清漆',
				'Clearcoat Roughness': '清漆粗糙度',
				Iridescence: '彩虹色',
				'Thin-Film IOR': '彩虹色折射率',
				'Thin-Film Thickness': '彩虹色厚度',
				Sheen: 'Sheen',
				'Sheen Roughness': 'Sheen Roughness',
				'Sheen Color': 'Sheen Color',
				Transmission: '透光',
				'Attenuation Distance': '衰减距离',
				'Attenuation Color': '衰减色',
				Thickness: '厚度',
				'Vertex Colors': '顶点颜色',
				'Depth Packing': '深度包装',
				Map: '贴图',
				'Specular Map': '高光贴图',
				'Emissive Map': '自发光贴图',
				Matcap: '材质捕获',
				'Alpha Map': '透明贴图',
				'Bump Map': '凹凸贴图',
				'Normal Map': '法线贴图',
				'Clearcoat Normal Map': '清漆法线贴图',
				'Displace Map': '置换贴图',
				'Rough Map': '粗糙贴图',
				'Metal Map': '金属贴图',
				'Irid Map': '彩虹色贴图',
				'Sheen Color Map': 'Sheen Color Map',
				'Sheen Rough. Map': 'Sheen Rough. Map',
				'Thin-Film Thickness Map': '彩虹色厚度贴图',
				'Env Map': '环境贴图',
				'Light Map': '光照贴图',
				'AO Map': '环境光遮蔽贴图',
				'Gradient Map': '渐变贴图',
				'Transmission Map': '透光贴图',
				'Thickness Map': '厚度贴图',
				Side: '面',
				Size: '大小',
				'Size Attenuation': '大小衰减',
				'Flat Shading': '平面着色',
				Blending: '混合',
				Opacity: '透明度',
				Transparent: '透明性',
				'Alpha Test': 'α测试',
				'Depth Test': '深度测试',
				'Depth Write': '深度缓冲',
				Wireframe: '线框',
			},
			Animations: '动画',
			animation:{
				Play: '播放',
				Pause: '暂停',
				'Time scale':"时间缩放"
			},
			Script: '脚本',
			script:{
				Edit: '编辑',
				Remove: '移除',
				New: '新建',
				'Please enter the script name': '请输入脚本名称',
				'The script name already exists': '脚本名称已存在',
			},
			'Scene drawing':"场景图纸",
			drawing:{
				'Click to select or drag the drawing to this area': '点击选择或拖拽图纸到此区域',
			}
		},
		assets:{
			'Resource library':"资源库",
			'Drawing library':"图纸库",
			'Scene library':"场景库",
		}
	},
	setting:{
		'Setting': '设置',
		Shortcuts: '快捷键',
		shortcuts:{
			'Please press a key': '请按下一个键位',
			Translate: '移动',
			Rotate: '旋转',
			Scale: '缩放',
			Undo: '撤销',
			Focus: '聚焦',
		},
		'System Setting':"系统设置",
		system:{
			'No system Settings are available': "暂无系统设置项"
		}
	},
	core: {
		'Any unsaved data will be lost. Are you sure?': '任何未保存的数据都将丢失。你确定吗?',
		// 此场景任何未保存的数据都将丢失，是否继续?
		'Any unsaved data in this scenario will be lost. Do you want to continue?': '任何未保存的数据都将丢失。你想继续吗?',
		editor:{
			"Default Camera":"默认相机",
			"Default Scene":"默认场景",
		}
	},
	other: {
		warning: '警告',
		ok: '确定',
		cancel: '取消',
		undo:"撤销",
		redo:"重做",
		delete:"删除",
		Action:"操作",
		Version:"版本",
		Loading:"请稍后",
		Load:"加载",
		'Query failed':"查询失败",
		"Under development":"开发中",
		'Related document':"相关文档"
	},
	/* 提示 */
	prompt: {
		'Disable this function in the demonstration environment!':'演示环境下禁用该功能！',
		'Disable when the scene is playing':'当场景正在播放时禁用',
		'Drag or double click to add to scene':'拖拽或双击添加至场景中',
		'No object selected.': '未选择任何对象。',
		'No geometric data for the time being':'暂无几何数据',
		'No material data for the time being':'暂无材质数据',
		"The selected object doesn't have geometry.": '所选对象没有几何体。',
		'No mesh selected': '未选择Mesh',
		'The Undo/Redo History will be cleared. Are you sure?':
			'撤消/重做 历史记录将被清除。你确定吗?',
		'The history will be preserved across sessions. This can have an impact on performance when working with textures.':
			'历史记录将在多个会话之间保留。这可能会影响处理纹理时的性能。',
		'Import of glTF asset not possible. Only versions >= 2.0 are supported. Please try to upgrade the file to glTF 2.0 using glTF-Pipeline':"无法导入gltf资产。仅支持大于等于2.0的版本。请尝试使用gltf-Pipeline将文件升级到gltf 2.0",
		"Unsupported file format":"不支持的文件格式",
		'Loader: "Geometry" is no longer supported.':"Loader:不再支持“几何图形”",
		'Are you sure to save the scene as a new project?':"确定将该场景保存为新工程吗？",
		'Are you sure to delete the scene?':"您确定要删除该场景吗？",
		'Are you sure to update the scene?':"确定更新该场景吗？",
		'Uploading':"正在上传中",
		'Please try again later!':"请稍后重试！",
		'There are grammatical errors!':"存在语法错误！",
		'Saved successfully!':"保存成功！",
		'Parameter error!':"参数错误！",
		"Parse failed":"解析失败",
	},
	/* 三维场景相关 */
	scene:{
		'All Projects':"全部工程",
		'Scene type':"场景类型",
		'Scene name':"场景名称",
		'Scene introduction':"场景说明",
		'Scene classification':"场景分类",
		'Include drawings':"包含图纸",
		'Scene data volume':"场景数据量",
		'Get the scene data':"获取场景数据中",
		'Failed to get scene data':"获取场景数据失败",
		'Generate scene data, please wait':"生成场景数据，请稍后",
		'Scene data is being regenerated, please wait':"场景数据正在重新生成，请稍后",
		'Scene information is being saved':"场景信息保存中",
		'Getting texture':"正在获取贴图",
		'Getting geometries':'正在获取几何体数据',
		'Getting models':'正在获取模型',
		'Parsing to editor':"正在解析至编辑器中",
		'In storage':"正在存储",
		'Loading completed!':"加载完成！",
		'Failed to save project!':"保存工程失败！",
		'Scene is packing...':"场景正在打包...",
		'Scene is unpacking...':"场景正在解包...",
		'Scene is being compressed...':"场景正在压缩...",
		'Please save the project first!':"请先保存该工程！",
	},
	/*cesium相关*/
	cesium:{
		"Please Enter Cesium Token":"请输入Cesium Token",
		"Default base map":"默认底图",
		"Base map type":"底图类型",
		"Image base map":"影像底图",
		"Vector base map":"矢量底图",

		map:{
			Amap:"高德",
			Tianditu:"天地图"
		}
	},
	/* 图纸相关 */
	drawing: {
		Drawing:"图纸",
		"Get the drawing data":"获取图纸数据中",
		"This operation will overwrite the current drawing, and any unsaved data will be lost. Do you want to continue?":"此操作会覆盖当前图纸，任何未保存的数据都将丢失，是否继续？",
		"adds the current model tag":"新增当前模型标记",
		'Please select the model you want to tag': '请选择您想要标记的模型',
		"The current model has been tagged":"当前模型已被标记",
		"Left-drag to add a mark":"按住左键拖动以添加标记",
		"drawing reset":"图纸复位",
		"Are you sure you want to delete the drawing?":"确定要删除图纸吗？",
		"Select the mark whose color you want to change!":"请选择要修改颜色的标记！",
		'Please upload the drawing file':"请上传图纸文件",
		"This format is not supported, please upload again! Supported formats are:":"不支持该格式，请重新上传！支持格式为：",
		toolbar:{
			"Mark color":"标记颜色",
			"Reset":"复位",
			"Layer":"图层",
			"Add mark":"新增标记",
			"Delete":"删除",
			"Setting":"设置"
		}
	},
	bim:{
		"BIM lightweight":"BIM轻量化",
		"BIM lightweight is in progress":"BIM轻量化正在进行中",
		"BIM lightweight completed":"BIM轻量化完成",
		"BIM lightweight failed":"BIM轻量化失败",
		Thumbnail:"缩略图",
		'BIM file':"BIM文件",
		"This format is not supported for lightweight, please upload again! Supported formats are:":"不支持该格式进行轻量化，请重新上传！支持格式为：",
		"Click or drag the file to this area.Supported formats are:":"点击或者拖动文件到该区域，支持格式为：",
		"File name":"文件名",
		"Please enter the BIM file name":"请输入BIM文件名称",
		'Please upload the BIM file':"请上传BIM文件",
		"Upload and lightweight":"上传并轻量化",
		"Failed to upload thumbnail":"缩略图上传失败",
		'Failed to upload BIM file':"BIM文件上传失败",
		In:"用时",
		seconds:"秒",
		"Whether to load the BIM model into the scene?":"是否加载该BIM模型至场景中？",
		"New lightweight BIM model received, do you want to view it?":"接收到新的轻量化BIM模型，是否查看？",
		"Conversion configuration":"转换配置",
		"Extreme lightweight":"极致轻量化",
		"Export Property":"导出属性",
		"Conversion view":"转换视图",
		"View name":"视图名称",
		"Please enter the conversion view name":"请输入转换视图名称",
		"Display style":"视觉样式",
		"Colour":"着色",
		"Realistic":"真实",
		"View default":"视图默认",
		"Coordinate reference":"坐标参考",
		"Origin":"原点",
		"Project base point":"项目基点",
		"Measuring point":"测量点"
	},
	cad:{
		"CAD parse":"CAD解析",
		"CAD upload and parse":"CAD上传解析",
		"CAD file":"CAD 文件",
		"Upload and parse":"上传并解析",
		"CAD parse is in progress":"CAD正在解析中",
		"Failed to upload CAD file":"上传CAD文件失败",
		"CAD parse completed":"CAD解析完成",
		"Do you want to load the preview?":"是否加载预览？",
		"CAD parse failed":"CAD解析失败",
	}
};
