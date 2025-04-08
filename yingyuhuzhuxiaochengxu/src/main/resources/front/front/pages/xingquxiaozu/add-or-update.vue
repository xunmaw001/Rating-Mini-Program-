
<template>
    <view class="content">
        <form class="app-update-pv">
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                      class="title">小组名称</view>
                <input   disabled
                         :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.xingquxiaozuName" type="text" v-model="ruleForm.xingquxiaozuName" placeholder="小组名称"></input>
            </view>
                <view
                        :style='{"boxShadow":"0 0 0px rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(218, 220, 219, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"108rpx"}'
                        class="cu-form-group" @tap="xingquxiaozuPhotoTap">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                          class="title">小组封面</view>
                    <view class="right-input" style="padding:0;textAlign:left">
                        <image
                                :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-if="ruleForm.xingquxiaozuPhoto" :src="ruleForm.xingquxiaozuPhoto" mode="aspectFill">
                        </image>
                        <image  :style='{"width":"68rpx","boxShadow":"0 0 0px rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"68rpx"}'
                                class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
                    </view>
                </view>
					                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                          class="title">小组类型</view>
                    <picker @change="xingquxiaozuTypesChange" :value="xingquxiaozuTypesIndex" :range="xingquxiaozuTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.xingquxiaozuTypes?ruleForm.xingquxiaozuValue:"请选择小组类型"}}</view>
                    </picker>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                          class="title">专业</view>
                    <picker @change="zhuanyeTypesChange" :value="zhuanyeTypesIndex" :range="zhuanyeTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.zhuanyeTypes?ruleForm.zhuanyeValue:"请选择专业"}}</view>
                    </picker>
                </view>
                <view :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                      class="cu-form-group">
                    <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                          class="title">英语水平</view>
                    <picker @change="shuipingTypesChange" :value="shuipingTypesIndex" :range="shuipingTypesOptions" range-key="indexName">
                        <view
                                :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                                class="uni-input">{{ruleForm.shuipingTypes?ruleForm.shuipingValue:"请选择英语水平"}}</view>
                    </picker>
                </view>
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"88rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                      class="title">所属地点</view>
                <input   disabled
                         :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx"}'
                         :disabled="ro.xingquxiaozuAddress" type="text" v-model="ruleForm.xingquxiaozuAddress" placeholder="所属地点"></input>
            </view>
<!-- text后缀 -->
            <view
                    :style='{"boxShadow":"0","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"rgba(228, 232, 230, 1)","margin":"0 0 0px 0","borderWidth":"2rpx","borderStyle":"none none solid none ","height":"210rpx"}'
                    class="cu-form-group">
                <view :style='{"width":"160rpx","fontSize":"28rpx","color":"#96b8c4","textAlign":"left"}'
                      class="title">小组简介</view>
                <textarea :style='{"boxShadow":"0 0 16rpx #bcceda inset","backgroundColor":"rgba(255, 255, 255, 1)","borderColor":"#96b8c4","borderRadius":"20rpx","color":"#96b8c4","textAlign":"left","borderWidth":"2rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx","marginTop":"7rpx","height":"200rpx"}'
                          :disabled="ro.xingquxiaozuContent" v-model="ruleForm.xingquxiaozuContent" placeholder="小组简介"/>
            </view>

            <view class="btn">
                <button
                        :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"#96b8c4","borderColor":"#409EFF","borderRadius":"8rpx","color":"rgba(255, 255, 255, 1)","borderWidth":"0","width":"70%","fontSize":"32rpx","borderStyle":"solid","height":"80rpx"}'
                        @tap="onSubmitTap" class="bg-red">提交</button>
            </view>
        </form>

					<w-picker mode="dateTime" step="1" :current="false" :hasSecond="false" @confirm="createTimeConfirm"
                              ref="createTime" themeColor="#333333"></w-picker>


    </view>
</template>

<script>
    import wPicker from "@/components/w-picker/w-picker.vue";

    export default {
        data() {
            return {
                cross: '',
                ro:{
					xingquxiaozuName: false,
					xingquxiaozuPhoto: false,
					xingquxiaozuTypes: false,
					zhuanyeTypes: false,
					shuipingTypes: false,
					xingquxiaozuAddress: false,
					yonghuId: false,
					xingquxiaozuContent: false,
					createTime: false,
        },
            ruleForm: {
					xingquxiaozuName: '',
					xingquxiaozuPhoto: '',
					xingquxiaozuTypes: '',//数字
					xingquxiaozuValue: '',//数字对应的值
					zhuanyeTypes: '',//数字
					zhuanyeValue: '',//数字对应的值
					shuipingTypes: '',//数字
					shuipingValue: '',//数字对应的值
					xingquxiaozuAddress: '',
					yonghuId: '',
					xingquxiaozuContent: '',
					createTime: '',
            },
            // 登陆用户信息
            user: {},
				xingquxiaozuTypesOptions: [],
							xingquxiaozuTypesIndex : 0,
				zhuanyeTypesOptions: [],
							zhuanyeTypesIndex : 0,
				shuipingTypesOptions: [],
							shuipingTypesIndex : 0,

        }
        },
        components: {
            wPicker
        },
        computed: {
            baseUrl() {
                return this.$base.url;
            },
        },
        async onLoad(options) {

		/*下拉框*/
			let xingquxiaozuTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'xingquxiaozu_types',
            }
			let xingquxiaozuTypes = await this.$api.page(`dictionary`, xingquxiaozuTypesParams);
			this.xingquxiaozuTypesOptions = xingquxiaozuTypes.data.list
		/*下拉框*/
			let zhuanyeTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'zhuanye_types',
            }
			let zhuanyeTypes = await this.$api.page(`dictionary`, zhuanyeTypesParams);
			this.zhuanyeTypesOptions = zhuanyeTypes.data.list
		/*下拉框*/
			let shuipingTypesParams = {
                page: 1,
                limit: 100,
                dicCode: 'shuiping_types',
            }
			let shuipingTypes = await this.$api.page(`dictionary`, shuipingTypesParams);
			this.shuipingTypesOptions = shuipingTypes.data.list


            // 如果是更新操作
            if (options.id) {
                this.ruleForm.id = options.id;
                // 获取信息
                let res = await this.$api.info(`xingquxiaozu`, this.ruleForm.id);
                this.ruleForm = res.data;
            }
            if(options.xingquxiaozuId){
                this.ruleForm.xingquxiaozuId = options.xingquxiaozuId;
            }
            // 跨表
            // this.styleChange()
        },
        methods: {
            // 下拉变化
            xingquxiaozuTypesChange(e) {
                this.xingquxiaozuTypesIndex = e.target.value
                this.ruleForm.xingquxiaozuValue = this.xingquxiaozuTypesOptions[this.xingquxiaozuTypesIndex].indexName
                this.ruleForm.xingquxiaozuTypes = this.xingquxiaozuTypesOptions[this.xingquxiaozuTypesIndex].codeIndex
            },
            zhuanyeTypesChange(e) {
                this.zhuanyeTypesIndex = e.target.value
                this.ruleForm.zhuanyeValue = this.zhuanyeTypesOptions[this.zhuanyeTypesIndex].indexName
                this.ruleForm.zhuanyeTypes = this.zhuanyeTypesOptions[this.zhuanyeTypesIndex].codeIndex
            },
            shuipingTypesChange(e) {
                this.shuipingTypesIndex = e.target.value
                this.ruleForm.shuipingValue = this.shuipingTypesOptions[this.shuipingTypesIndex].indexName
                this.ruleForm.shuipingTypes = this.shuipingTypesOptions[this.shuipingTypesIndex].codeIndex
            },


            // styleChange() {
            // 	this.$nextTick(() => {
            // 		// document.querySelectorAll('.app-update-pv .cu-form-group .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
            // 		//   el.style.backgroundColor = this.addUpdateForm.yaoxianStyle.content.backgroundColor
            // 		// })
            // 	})
            // },


			xingquxiaozuPhotoTap() {
                let _this = this;
                this.$api.upload(function(res) {
                    _this.ruleForm.xingquxiaozuPhoto = _this.$base.url + 'upload/' + res.file;
                    _this.$forceUpdate();
                    _this.$nextTick(() => {
                        // _this.styleChange()
                    })
                });
            },
			// 日期控件
			createTimeConfirm(val) {
                console.log(val)
                this.ruleForm.createTime = val.result;
                this.$forceUpdate();
            },




            getUUID() {
                return new Date().getTime();
            },
            async onSubmitTap() {
				if ((!this.ruleForm.xingquxiaozuName)) {
                    this.$utils.msg(`小组名称不能为空`);
                    return
                }
				if ((!this.ruleForm.xingquxiaozuPhoto)) {
                    this.$utils.msg(`小组封面不能为空`);
                    return
                }
				if ((!this.ruleForm.zhuanyeTypes)) {
                    this.$utils.msg(`专业不能为空`);
                    return
                }
				if ((!this.ruleForm.shuipingTypes)) {
                    this.$utils.msg(`英语水平不能为空`);
                    return
                }
				if ((!this.ruleForm.xingquxiaozuAddress)) {
                    this.$utils.msg(`所属地点不能为空`);
                    return
                }
                if (this.ruleForm.id) {
                    await this.$api.update(`xingquxiaozu`, this.ruleForm);
                } else {
                    await this.$api.save(`xingquxiaozu`, this.ruleForm);
                }
                uni.setStorageSync('pingluenStateState', true);
                this.$utils.msgBack('提交成功');
            },
            getDate(type) {
                const date = new Date();
                let year = date.getFullYear();
                let month = date.getMonth() + 1;
                let day = date.getDate();
                if (type === 'start') {
                    year = year - 60;
                } else if (type === 'end') {
                    year = year + 2;
                }
                month = month > 9 ? month : '0' + month;;
                day = day > 9 ? day : '0' + day;
                return `${year}-${month}-${day}`;
            },
            toggleTab(str) {
                this.$refs[str].show();
            }
        }
    }
</script>

<style lang="scss" scoped>
    .container {
        padding: 20upx;
    }

    .content:after {
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
        content: '';
        background-attachment: fixed;
        background-size: cover;
        background-position: center;
    }

    textarea {
        border: 1upx solid #EEEEEE;
        border-radius: 20upx;
        padding: 20upx;
    }

    .title {
        width: 180upx;
    }

    .avator {
        width: 150upx;
        height: 60upx;
    }

    .right-input {
        flex: 1;
        text-align: left;
        padding: 0 24upx;
    }

    .cu-form-group.active {
        justify-content: space-between;
    }

    .btn {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        padding: 20upx 0;
    }

    .cu-form-group {
        padding: 0 24upx;
        background-color: transparent;
        min-height: inherit;
    }

    .cu-form-group+.cu-form-group {
        border: 0;
    }

    .cu-form-group uni-input {
        padding: 0 30upx;
    }

    .uni-input {
        padding: 0 30upx;
    }

    .cu-form-group uni-textarea {
        padding: 30upx;
        margin: 0;
    }

    .cu-form-group uni-picker::after {
        line-height: 68rpx;
    }

    .select .uni-input {
        line-height: 68rpx;
    }

    .input .right-input {
        line-height: 68rpx;
    }
</style>