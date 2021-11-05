{
	"version":"LAYASCENE3D:02",
	"data":{
		"type":"Scene3D",
		"props":{
			"name":"Home",
			"sky":{
				"material":{
					"type":"Laya.SkyPanoramicMaterial",
					"path":"Assets/Game/Skybox/Skybox.lmat"
				},
				"mesh":"SkyDome"
			},
			"ambientColor":[
				0.5411765,
				0.5411765,
				0.5411765
			],
			"reflectionDecodingFormat":1,
			"reflection":"Assets/Scenes/HomeGIReflection.ltcb.ls",
			"reflectionIntensity":1,
			"ambientMode":0,
			"ambientSphericalHarmonicsIntensity":1,
			"lightmaps":[],
			"enableFog":false,
			"fogStart":0,
			"fogRange":300,
			"fogColor":[
				0.5,
				0.5,
				0.5
			]
		},
		"child":[
			{
				"type":"Camera",
				"instanceID":0,
				"props":{
					"name":"Main Camera",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0.06,
						1.44,
						39.72
					],
					"rotation":[
						0,
						0.9990211,
						0.04423762,
						0
					],
					"scale":[
						1,
						1,
						1
					],
					"clearFlag":1,
					"orthographic":false,
					"orthographicVerticalSize":10,
					"fieldOfView":60,
					"enableHDR":false,
					"nearPlane":0.3,
					"farPlane":1000,
					"viewport":[
						0,
						0,
						1,
						1
					],
					"clearColor":[
						0.1921569,
						0.3019608,
						0.4745098,
						0
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"DirectionLight",
				"instanceID":1,
				"props":{
					"name":"Directional Light",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						3,
						0
					],
					"rotation":[
						0.1093816,
						0.8754261,
						0.4082179,
						-0.2345697
					],
					"scale":[
						1,
						1,
						1
					],
					"intensity":0.6,
					"lightmapBakedType":0,
					"color":[
						1,
						0.9568627,
						0.8392157
					]
				},
				"components":[],
				"child":[]
			},
			{
				"type":"Sprite3D",
				"instanceID":2,
				"props":{
					"name":"map",
					"active":true,
					"isStatic":false,
					"layer":0,
					"position":[
						0,
						-0.328,
						20.874
					],
					"rotation":[
						0,
						0,
						0,
						-1
					],
					"scale":[
						1,
						1,
						1
					]
				},
				"components":[],
				"child":[
					{
						"type":"Sprite3D",
						"instanceID":3,
						"props":{
							"name":"cj1",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0,
								0
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								5,
								5,
								5.446961
							]
						},
						"components":[],
						"child":[
							{
								"type":"MeshSprite3D",
								"instanceID":4,
								"props":{
									"name":"box",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0.01,
										0
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										1.5,
										1,
										1.5
									],
									"meshPath":"Assets/youyu/map/map-box.lm",
									"enableRender":true,
									"receiveShadows":true,
									"castShadow":true,
									"materials":[
										{
											"path":"Assets/youyu/shader/map.lmat"
										}
									]
								},
								"components":[],
								"child":[]
							},
							{
								"type":"MeshSprite3D",
								"instanceID":5,
								"props":{
									"name":"gun1",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0.035,
										0.84,
										0.3198453
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										0.2,
										0.2,
										0.2
									],
									"meshPath":"Assets/youyu/map/map-gun1.lm",
									"enableRender":true,
									"receiveShadows":true,
									"castShadow":true,
									"materials":[
										{
											"type":"Laya.BlinnPhongMaterial",
											"path":"Assets/youyu/map/map.lmat"
										}
									]
								},
								"components":[],
								"child":[]
							},
							{
								"type":"Sprite3D",
								"instanceID":6,
								"props":{
									"name":"pCube6",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										-0.1224272,
										-0.04995213,
										0
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										0.3333333,
										0.3333333,
										0.3333333
									]
								},
								"components":[],
								"child":[
									{
										"type":"MeshSprite3D",
										"instanceID":7,
										"props":{
											"name":"polySurface11",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												0.3672817,
												0.1468564,
												4.469541
											],
											"rotation":[
												0,
												0,
												0,
												-1
											],
											"scale":[
												1,
												1,
												1
											],
											"meshPath":"Assets/youyu/map/map-polySurface11.lm",
											"enableRender":true,
											"receiveShadows":true,
											"castShadow":true,
											"materials":[
												{
													"path":"Assets/youyu/shader/red.lmat"
												}
											]
										},
										"components":[],
										"child":[]
									},
									{
										"type":"MeshSprite3D",
										"instanceID":8,
										"props":{
											"name":"polySurface12",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												0.3672817,
												0.1468564,
												-4.394413
											],
											"rotation":[
												0,
												0,
												0,
												-1
											],
											"scale":[
												1,
												1,
												1
											],
											"meshPath":"Assets/youyu/map/map-polySurface12.lm",
											"enableRender":true,
											"receiveShadows":true,
											"castShadow":true,
											"materials":[
												{
													"path":"Assets/youyu/shader/red.lmat"
												}
											]
										},
										"components":[],
										"child":[]
									},
									{
										"type":"Sprite3D",
										"instanceID":9,
										"props":{
											"name":"transform1",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												0.3672817,
												0.1468564,
												0
											],
											"rotation":[
												0,
												0,
												0,
												-1
											],
											"scale":[
												1,
												1,
												1
											]
										},
										"components":[],
										"child":[]
									}
								]
							},
							{
								"type":"Sprite3D",
								"instanceID":10,
								"props":{
									"name":"tree",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0.0006884861,
										0.3417767,
										4.322469
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										10,
										10,
										10
									]
								},
								"components":[],
								"child":[
									{
										"type":"Sprite3D",
										"instanceID":11,
										"props":{
											"name":"pasted__group15",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												-0.001147477,
												-0.03292012,
												0.00408332
											],
											"rotation":[
												0,
												0,
												0,
												-1
											],
											"scale":[
												1,
												1,
												1
											]
										},
										"components":[],
										"child":[
											{
												"type":"MeshSprite3D",
												"instanceID":12,
												"props":{
													"name":"pasted__pCube1",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0,
														0.009607115,
														0
													],
													"rotation":[
														0,
														0,
														0,
														-1
													],
													"scale":[
														1,
														1,
														1
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube1.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":13,
												"props":{
													"name":"pasted__pCube2",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.0005408034,
														0.04974565,
														0.01044939
													],
													"rotation":[
														0.0911649,
														-0.06098357,
														-0.1612768,
														-0.9807955
													],
													"scale":[
														1.175959,
														0.9039819,
														1.637175
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube2.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":14,
												"props":{
													"name":"pasted__pCube4",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.0133064,
														0.0526017,
														-0.01173195
													],
													"rotation":[
														-0.1174679,
														0.06605692,
														-0.108559,
														-0.9849126
													],
													"scale":[
														1.747833,
														0.9668435,
														2.122744
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube4.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":15,
												"props":{
													"name":"pasted__pCube5",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.0130905,
														0.05587364,
														-0.009395084
													],
													"rotation":[
														-0.07975696,
														0.2441307,
														-0.04136916,
														-0.9655712
													],
													"scale":[
														1.921981,
														0.8591505,
														0.9829289
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube5.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":16,
												"props":{
													"name":"pasted__pCube6",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.003739103,
														0.04566121,
														0.01316915
													],
													"rotation":[
														0,
														0.1777105,
														0,
														-0.9840828
													],
													"scale":[
														0.8181782,
														0.8181782,
														1.049658
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube6.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":17,
												"props":{
													"name":"pasted__pCube7",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.003747805,
														0.05943228,
														-0.001429867
													],
													"rotation":[
														-0.08768992,
														0.02505497,
														0.002755767,
														-0.9958289
													],
													"scale":[
														2.0806,
														1,
														1.171901
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube7.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":18,
												"props":{
													"name":"pasted__pCube9",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.002339355,
														0.05245298,
														-0.02056675
													],
													"rotation":[
														0,
														0,
														0,
														-1
													],
													"scale":[
														1.574648,
														1.295059,
														1.116203
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube9.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":19,
												"props":{
													"name":"pasted__pCube10",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.003494606,
														0.05778398,
														-0.01765156
													],
													"rotation":[
														-0.09747502,
														0.0488067,
														-0.03054682,
														-0.993571
													],
													"scale":[
														1.390104,
														1,
														1
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube10.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":20,
												"props":{
													"name":"pasted__pCube12",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.005861768,
														0.05328094,
														-0.0001237456
													],
													"rotation":[
														-0.08581543,
														-0.4592711,
														-0.1623925,
														-0.8690999
													],
													"scale":[
														2.780087,
														1.010734,
														2.300911
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube12.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":21,
												"props":{
													"name":"pasted__pCube13",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.01392069,
														0.05299843,
														-0.009612811
													],
													"rotation":[
														0,
														0,
														0,
														-1
													],
													"scale":[
														1.051966,
														1,
														1.051966
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube13.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":22,
												"props":{
													"name":"pasted__pCube14",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.01781494,
														0.04898632,
														-0.004321682
													],
													"rotation":[
														0,
														0,
														0,
														-1
													],
													"scale":[
														1.72655,
														1,
														1.385198
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube14.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											},
											{
												"type":"MeshSprite3D",
												"instanceID":23,
												"props":{
													"name":"pasted__pCube15",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.01188376,
														0.0587057,
														-0.004219591
													],
													"rotation":[
														0.004564173,
														0,
														0,
														-0.9999896
													],
													"scale":[
														1,
														0.8231372,
														1
													],
													"meshPath":"Assets/youyu/map/map-pasted__pCube15.lm",
													"enableRender":true,
													"receiveShadows":true,
													"castShadow":true,
													"materials":[
														{
															"path":"Assets/youyu/shader/tree.lmat"
														}
													]
												},
												"components":[],
												"child":[]
											}
										]
									}
								]
							}
						]
					},
					{
						"type":"MeshSprite3D",
						"instanceID":24,
						"props":{
							"name":"polySurface10",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0.0001779556,
								0.5181056,
								22.82655
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							],
							"meshPath":"Assets/youyu/map/map-polySurface10.lm",
							"enableRender":true,
							"receiveShadows":true,
							"castShadow":true,
							"materials":[
								{
									"path":"Assets/youyu/shader/yuan.lmat"
								}
							]
						},
						"components":[],
						"child":[]
					},
					{
						"type":"Sprite3D",
						"instanceID":25,
						"props":{
							"name":"boss",
							"active":true,
							"isStatic":false,
							"layer":0,
							"position":[
								0,
								0.327,
								22.861
							],
							"rotation":[
								0,
								0,
								0,
								-1
							],
							"scale":[
								1,
								1,
								1
							]
						},
						"components":[
							{
								"type":"Animator",
								"layers":[
									{
										"name":"Base Layer",
										"weight":0,
										"blendingMode":0,
										"states":[
											{
												"name":"daiji",
												"clipPath":"Assets/youyu/boss/boss@daiji-daiji.lani"
											},
											{
												"name":"Ready",
												"clipPath":"Assets/youyu/boss/boss@Ready-Ready.lani"
											},
											{
												"name":"urn round1",
												"clipPath":"Assets/youyu/boss/tboss@urn round1-urn round1.lani"
											},
											{
												"name":"turn round2",
												"clipPath":"Assets/youyu/boss/boss@turn round2-turn round2.lani"
											}
										]
									}
								],
								"cullingMode":0,
								"playOnWake":true
							}
						],
						"child":[
							{
								"type":"Sprite3D",
								"instanceID":26,
								"props":{
									"name":"aiSkyDomeLight1",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										1,
										1,
										1
									]
								},
								"components":[],
								"child":[]
							},
							{
								"type":"SkinnedMeshSprite3D",
								"instanceID":27,
								"props":{
									"name":"girl_002",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0,
										0
									],
									"rotation":[
										0,
										0,
										0,
										-1
									],
									"scale":[
										1,
										1,
										1
									],
									"rootBone":28,
									"boundBox":{
										"min":[
											-0.5296673,
											-0.7674496,
											-0.2223063
										],
										"max":[
											0.8078617,
											0.35129,
											0.2793672
										]
									},
									"boundSphere":{
										"center":[
											0.1390972,
											-0.2080798,
											0.02853049
										],
										"radius":0.9072263
									},
									"bones":[
										28,
										29,
										30,
										31,
										32,
										33,
										34,
										35,
										36,
										37,
										38,
										39,
										40,
										41,
										42,
										43,
										44,
										45,
										46,
										47
									],
									"enableRender":true,
									"receiveShadows":true,
									"castShadow":true,
									"materials":[
										{
											"path":"Assets/youyu/shader/boss1.lmat"
										},
										{
											"path":"Assets/youyu/shader/boss2.lmat"
										},
										{
											"path":"Assets/youyu/shader/red.lmat"
										}
									],
									"meshPath":"Assets/youyu/boss/boss@daiji-girl_002.lm"
								},
								"components":[],
								"child":[]
							},
							{
								"type":"Sprite3D",
								"instanceID":28,
								"props":{
									"name":"joint1",
									"active":true,
									"isStatic":false,
									"layer":0,
									"position":[
										0,
										0.5,
										0
									],
									"rotation":[
										0.7048222,
										0.709384,
										4.343725E-17,
										4.315791E-17
									],
									"scale":[
										1,
										1,
										1
									]
								},
								"components":[],
								"child":[
									{
										"type":"Sprite3D",
										"instanceID":29,
										"props":{
											"name":"joint2",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												0.1524342,
												0,
												0
											],
											"rotation":[
												0,
												0,
												-0.003225756,
												-0.9999948
											],
											"scale":[
												1,
												1,
												1
											]
										},
										"components":[],
										"child":[
											{
												"type":"Sprite3D",
												"instanceID":30,
												"props":{
													"name":"joint3",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.1140774,
														0,
														1.096678E-11
													],
													"rotation":[
														-0.999998,
														-0.002018547,
														-1.236003E-19,
														-6.123222E-17
													],
													"scale":[
														1,
														1,
														1
													]
												},
												"components":[],
												"child":[
													{
														"type":"Sprite3D",
														"instanceID":31,
														"props":{
															"name":"joint4",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																0.5318468,
																0,
																-8.31222E-11
															],
															"rotation":[
																0,
																0,
																0.705678,
																-0.7085327
															],
															"scale":[
																1,
																1,
																1
															]
														},
														"components":[],
														"child":[]
													},
													{
														"type":"MeshSprite3D",
														"instanceID":48,
														"props":{
															"name":"pasted__Mesh2",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																0.2187839,
																2.540252E-05,
																0.1686859
															],
															"rotation":[
																1.487104E-08,
																1.493121E-08,
																0.705678,
																-0.7085328
															],
															"scale":[
																1,
																1,
																1
															],
															"meshPath":"Assets/youyu/map/map-pasted__Mesh2.lm",
															"enableRender":true,
															"receiveShadows":true,
															"castShadow":true,
															"materials":[
																{
																	"path":"Assets/youyu/shader/h.lmat"
																}
															]
														},
														"components":[],
														"child":[]
													}
												]
											},
											{
												"type":"Sprite3D",
												"instanceID":32,
												"props":{
													"name":"joint5",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.05190507,
														-0.08927592,
														-1.325297E-09
													],
													"rotation":[
														0,
														0,
														0.9786606,
														-0.2054832
													],
													"scale":[
														1,
														1,
														1
													]
												},
												"components":[],
												"child":[
													{
														"type":"Sprite3D",
														"instanceID":33,
														"props":{
															"name":"joint6",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																0.1949254,
																0,
																0.01725858
															],
															"rotation":[
																0,
																0,
																0.001450796,
																-0.999999
															],
															"scale":[
																1,
																1,
																1
															]
														},
														"components":[],
														"child":[
															{
																"type":"Sprite3D",
																"instanceID":34,
																"props":{
																	"name":"joint7",
																	"active":true,
																	"isStatic":false,
																	"layer":0,
																	"position":[
																		0.174789,
																		0,
																		-0.01694275
																	],
																	"rotation":[
																		0,
																		0,
																		-0.3988433,
																		-0.9170191
																	],
																	"scale":[
																		1,
																		1,
																		1
																	]
																},
																"components":[],
																"child":[
																	{
																		"type":"Sprite3D",
																		"instanceID":35,
																		"props":{
																			"name":"joint8",
																			"active":true,
																			"isStatic":false,
																			"layer":0,
																			"position":[
																				0.09382878,
																				0,
																				0
																			],
																			"rotation":[
																				-0.03872693,
																				0.9992499,
																				-5.881507E-17,
																				6.355775E-17
																			],
																			"scale":[
																				1,
																				1,
																				1
																			]
																		},
																		"components":[],
																		"child":[]
																	}
																]
															}
														]
													}
												]
											},
											{
												"type":"Sprite3D",
												"instanceID":36,
												"props":{
													"name":"joint13",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.05190499,
														0.09124283,
														0
													],
													"rotation":[
														-0.9786606,
														0.2054833,
														-1.907509E-10,
														-4.005073E-11
													],
													"scale":[
														1,
														1,
														1
													]
												},
												"components":[],
												"child":[
													{
														"type":"Sprite3D",
														"instanceID":37,
														"props":{
															"name":"joint14",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																-0.1949256,
																-3.376311E-07,
																-0.0172586
															],
															"rotation":[
																-1.05367E-08,
																1.528662E-11,
																0.001450796,
																-0.999999
															],
															"scale":[
																1,
																1,
																1
															]
														},
														"components":[],
														"child":[
															{
																"type":"Sprite3D",
																"instanceID":38,
																"props":{
																	"name":"joint15",
																	"active":true,
																	"isStatic":false,
																	"layer":0,
																	"position":[
																		-0.174789,
																		1.005546E-08,
																		0.01694277
																	],
																	"rotation":[
																		-1.334907E-08,
																		6.653887E-09,
																		-0.3988433,
																		-0.9170191
																	],
																	"scale":[
																		1,
																		1,
																		1
																	]
																},
																"components":[],
																"child":[
																	{
																		"type":"Sprite3D",
																		"instanceID":39,
																		"props":{
																			"name":"joint16",
																			"active":true,
																			"isStatic":false,
																			"layer":0,
																			"position":[
																				-0.09382845,
																				8.022592E-08,
																				-1.030814E-10
																			],
																			"rotation":[
																				-0.03872693,
																				0.9992499,
																				-6.355775E-17,
																				-5.881507E-17
																			],
																			"scale":[
																				1,
																				1,
																				1
																			]
																		},
																		"components":[],
																		"child":[]
																	}
																]
															}
														]
													}
												]
											}
										]
									},
									{
										"type":"Sprite3D",
										"instanceID":44,
										"props":{
											"name":"joint9",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												-0.1373089,
												-0.07725464,
												-0.006877971
											],
											"rotation":[
												0,
												0,
												0.9954761,
												-0.09501321
											],
											"scale":[
												1,
												1,
												1
											]
										},
										"components":[],
										"child":[
											{
												"type":"Sprite3D",
												"instanceID":45,
												"props":{
													"name":"joint10",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														0.1905552,
														0,
														-0.002552678
													],
													"rotation":[
														0,
														0,
														0.01809082,
														-0.9998364
													],
													"scale":[
														1,
														1,
														1
													]
												},
												"components":[],
												"child":[
													{
														"type":"Sprite3D",
														"instanceID":46,
														"props":{
															"name":"joint11",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																0.156131,
																0,
																0.0283231
															],
															"rotation":[
																-0.8444622,
																0.5356151,
																3.279697E-17,
																-5.17084E-17
															],
															"scale":[
																1,
																1,
																1
															]
														},
														"components":[],
														"child":[
															{
																"type":"Sprite3D",
																"instanceID":47,
																"props":{
																	"name":"joint12",
																	"active":true,
																	"isStatic":false,
																	"layer":0,
																	"position":[
																		0.003138403,
																		-0.01256806,
																		0.04375527
																	],
																	"rotation":[
																		0,
																		0,
																		-0.2897841,
																		-0.957092
																	],
																	"scale":[
																		1,
																		1,
																		1
																	]
																},
																"components":[],
																"child":[]
															}
														]
													}
												]
											}
										]
									},
									{
										"type":"Sprite3D",
										"instanceID":40,
										"props":{
											"name":"joint17",
											"active":true,
											"isStatic":false,
											"layer":0,
											"position":[
												-0.1382938,
												0.07547657,
												-0.006877969
											],
											"rotation":[
												-0.9960683,
												0.08858894,
												-5.424508E-18,
												6.099159E-17
											],
											"scale":[
												1,
												1,
												1
											]
										},
										"components":[],
										"child":[
											{
												"type":"Sprite3D",
												"instanceID":41,
												"props":{
													"name":"joint18",
													"active":true,
													"isStatic":false,
													"layer":0,
													"position":[
														-0.1905558,
														1.015931E-07,
														0.00255268
													],
													"rotation":[
														0,
														0,
														0.01809082,
														-0.9998364
													],
													"scale":[
														1,
														1,
														1
													]
												},
												"components":[],
												"child":[
													{
														"type":"Sprite3D",
														"instanceID":42,
														"props":{
															"name":"joint19",
															"active":true,
															"isStatic":false,
															"layer":0,
															"position":[
																-0.1561308,
																4.237592E-07,
																-0.02832315
															],
															"rotation":[
																-0.8444622,
																0.5356151,
																-3.279697E-17,
																5.17084E-17
															],
															"scale":[
																1,
																1,
																1
															]
														},
														"components":[],
														"child":[
															{
																"type":"Sprite3D",
																"instanceID":43,
																"props":{
																	"name":"joint20",
																	"active":true,
																	"isStatic":false,
																	"layer":0,
																	"position":[
																		-0.003137723,
																		0.01256849,
																		-0.0437553
																	],
																	"rotation":[
																		0,
																		0,
																		-0.2897841,
																		-0.957092
																	],
																	"scale":[
																		1,
																		1,
																		1
																	]
																},
																"components":[],
																"child":[]
															}
														]
													}
												]
											}
										]
									}
								]
							}
						]
					}
				]
			}
		]
	}
}