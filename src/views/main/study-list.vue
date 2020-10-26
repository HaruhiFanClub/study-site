<template>
  <div class="study-list" style="padding: 32px;">
    <a-collapse :bordered="false" expandIconPosition="right">
      <a-collapse-panel v-for="userItem in userList" :key="userItem.user_id" :style="customStyle">
        <div slot="header" style="display:flex;padding: 8px 0 8px 4px;">
          <a-avatar shape="square" alt="用户头像" :size="40" icon="user" /> <!-- :src="userItem.avatar" -->
          <div style="margin-left: 20px;height: 40px;">
            <div style="line-height: 20px;">{{userItem.userName}}</div>
            <div style="line-height: 20px;">
              <span>积分：</span>
              <span class="points">{{userItem.points}}</span>
            </div>
          </div>
        </div>
        <div
          v-for="learningItem in userItem.learningList"
          :key="learningItem.subject_id"
          style="margin-left: 64px;display: flex;justify-content: space-between;"
        >
          <router-link to="/learning/tittle-tattle">{{learningItem.title}}</router-link>
          <a-progress :percent="learningItem.percent" size="small" style="width: 200px;" />
        </div>
      </a-collapse-panel>
    </a-collapse>
    <div style="margin-top: 30px;text-align: center;">
      <a-pagination
        v-model="pageId"
        :total="50"
        show-less-items
        show-size-changer
        show-quick-jumper
        @showSizeChange="onPageSizeChange"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: 'studyList',
  data () {
    return {
      text: 'A dog is a type of domesticated animal.Known for its loyalty and faithfulness,it can be found as a welcome guest in many households across the world.',
      customStyle: 'background: white;overflow: hidden;align-items: center;padding: 0px;border-bottom: 1px solid #e9e9e9;',
      userList: [
        {
          user_id: '1',
          userName: '电脑社成员',
          points: 999,
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
          // studyTitle: '学习方向-子方向-学习等级',
          learningList: [
            {
              subject_id: 0,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        },
        {
          user_id: '2',
          userName: '电脑社成员',
          points: 999,
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
          // studyTitle: '学习方向-子方向-学习等级',
          learningList: [
            {
              subject_id: 0,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        },
        {
          user_id: '3',
          userName: '电脑社成员',
          points: 999,
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
          // studyTitle: '学习方向-子方向-学习等级',
          learningList: [
            {
              subject_id: 0,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        }, {
          user_id: '4',
          userName: '电脑社成员',
          points: 999,
          avatar:
            'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1593935723191&di=f95de4d1d1eddc7ac1061cdfdaee2cef&imgtype=0&src=http%3A%2F%2Fimg.duoziwang.com%2F2016%2F11%2F23%2F16432937557.jpg',
          // studyTitle: '学习方向-子方向-学习等级',
          learningList: [
            {
              subject_id: 0,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        },
        {
          user_id: '538921',
          userName: '用户名',
          points: 999, // 用户积分
          avatar: 'https://****.com/***', // 头像url
          learningList: [
            {
              subject_id: 0, // 学习子方向id
              title: '学习方向-子方向', // 根据 大方向-子方向 的形式拼接成字符串
              percent: 60 // 学习方向完成度 0-100 根据学习方向的任务完成度计算
            },
            {
              subject_id: 1,
              title: '学习方向-子方向',
              percent: 60
            },
            {
              subject_id: 2,
              title: '学习方向-子方向',
              percent: 60
            }
          ]
        }
      ]
    }
  }
}
</script>
