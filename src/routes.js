import {Front, UserInfo, QuestionOne, QuestionTwo, QuestionThree, Thanks} from './page/index';

const routes = [
  { path: '/', component: Front, exact: true },
  { path: '/userinfo/', component: UserInfo,},
  { path: '/q1/', component: QuestionOne,},
  { path: '/q2/', component: QuestionTwo,},
  { path: '/q3/', component: QuestionTwo,},
  { path: '/thanks/', component: Thanks,},
];

export default routes;
