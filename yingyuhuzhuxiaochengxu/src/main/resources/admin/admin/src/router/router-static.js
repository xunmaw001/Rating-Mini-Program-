import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

     import users from '@/views/modules/users/list'
    import chat from '@/views/modules/chat/list'
    import dictionary from '@/views/modules/dictionary/list'
    import exampaper from '@/views/modules/exampaper/list'
    import examquestion from '@/views/modules/examquestion/list'
    import examrecord from '@/views/modules/examrecord/list'
    import examredetails from '@/views/modules/examredetails/list'
    import examrewrongquestion from '@/views/modules/examrewrongquestion/list'
    import forum from '@/views/modules/forum/list'
    import jiarudexiaozu from '@/views/modules/jiarudexiaozu/list'
    import news from '@/views/modules/news/list'
    import xingquxiaozu from '@/views/modules/xingquxiaozu/list'
    import xingquxiaozuLiuyan from '@/views/modules/xingquxiaozuLiuyan/list'
    import yonghu from '@/views/modules/yonghu/list'
    import zhutizixun from '@/views/modules/zhutizixun/list'
    import zhutizixunCollection from '@/views/modules/zhutizixunCollection/list'
    import zhutizixunLiuyan from '@/views/modules/zhutizixunLiuyan/list'
    import config from '@/views/modules/config/list'
    import dictionaryChat from '@/views/modules/dictionaryChat/list'
    import dictionaryExampaper from '@/views/modules/dictionaryExampaper/list'
    import dictionaryExamquestion from '@/views/modules/dictionaryExamquestion/list'
    import dictionaryForum from '@/views/modules/dictionaryForum/list'
    import dictionaryForumState from '@/views/modules/dictionaryForumState/list'
    import dictionaryNews from '@/views/modules/dictionaryNews/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShuiping from '@/views/modules/dictionaryShuiping/list'
    import dictionaryXingquxiaozu from '@/views/modules/dictionaryXingquxiaozu/list'
    import dictionaryZhuangtai from '@/views/modules/dictionaryZhuangtai/list'
    import dictionaryZhuanye from '@/views/modules/dictionaryZhuanye/list'
    import dictionaryZhutizixun from '@/views/modules/dictionaryZhutizixun/list'
    import dictionaryZhutizixunCollection from '@/views/modules/dictionaryZhutizixunCollection/list'

    import adminexam from '@/views/modules/exampaper/exam'




//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
	  ,{
	      path: '/adminexam',
	      name: 'adminexam',
	      component: adminexam,
	      meta: {icon:'', title:'adminexam'}
	    }
    ,{
        path: '/dictionaryChat',
        name: '数据类型',
        component: dictionaryChat
    }
    ,{
        path: '/dictionaryExampaper',
        name: '试卷状态',
        component: dictionaryExampaper
    }
    ,{
        path: '/dictionaryExamquestion',
        name: '试题类型',
        component: dictionaryExamquestion
    }
    ,{
        path: '/dictionaryForum',
        name: '帖子类型',
        component: dictionaryForum
    }
    ,{
        path: '/dictionaryForumState',
        name: '帖子状态',
        component: dictionaryForumState
    }
    ,{
        path: '/dictionaryNews',
        name: '公告类型',
        component: dictionaryNews
    }
    ,{
        path: '/dictionarySex',
        name: '性别',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShuiping',
        name: '英语水平',
        component: dictionaryShuiping
    }
    ,{
        path: '/dictionaryXingquxiaozu',
        name: '小组类型',
        component: dictionaryXingquxiaozu
    }
    ,{
        path: '/dictionaryZhuangtai',
        name: '状态',
        component: dictionaryZhuangtai
    }
    ,{
        path: '/dictionaryZhuanye',
        name: '专业',
        component: dictionaryZhuanye
    }
    ,{
        path: '/dictionaryZhutizixun',
        name: '资讯类型',
        component: dictionaryZhutizixun
    }
    ,{
        path: '/dictionaryZhutizixunCollection',
        name: '收藏表类型',
        component: dictionaryZhutizixunCollection
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/chat',
        name: '客服聊天',
        component: chat
      }
    ,{
        path: '/dictionary',
        name: '字典表',
        component: dictionary
      }
    ,{
        path: '/exampaper',
        name: '试卷表',
        component: exampaper
      }
    ,{
        path: '/examquestion',
        name: '试题表',
        component: examquestion
      }
    ,{
        path: '/examrecord',
        name: '测试记录表',
        component: examrecord
      }
    ,{
        path: '/examredetails',
        name: '答题详情表',
        component: examredetails
      }
    ,{
        path: '/examrewrongquestion',
        name: '错题表',
        component: examrewrongquestion
      }
    ,{
        path: '/forum',
        name: '学习讨论',
        component: forum
      }
    ,{
        path: '/jiarudexiaozu',
        name: '加入的小组',
        component: jiarudexiaozu
      }
    ,{
        path: '/news',
        name: '公告信息',
        component: news
      }
    ,{
        path: '/xingquxiaozu',
        name: '兴趣小组',
        component: xingquxiaozu
      }
    ,{
        path: '/xingquxiaozuLiuyan',
        name: '小组打卡',
        component: xingquxiaozuLiuyan
      }
    ,{
        path: '/yonghu',
        name: '用户',
        component: yonghu
      }
    ,{
        path: '/zhutizixun',
        name: '主题资讯',
        component: zhutizixun
      }
    ,{
        path: '/zhutizixunCollection',
        name: '资讯收藏',
        component: zhutizixunCollection
      }
    ,{
        path: '/zhutizixunLiuyan',
        name: '资讯评论',
        component: zhutizixunLiuyan
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
