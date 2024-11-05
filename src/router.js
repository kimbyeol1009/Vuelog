import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue"
import Warn from "./components/Warn.vue"
import Comment from "./components/Comment.vue"
import Author from "./components/Author.vue"
const routes = [
  {
    path: "/list",
    component: List,
  },
  {
    path:"/",
    component: Home,
  },
  {
    path : "/detail/:id",
    component : Detail,
    children: [
        {
            path : "author",
            component : Author,
        },
        {
            path : "comment",
            component: Comment,
        }
    ]
  },
  {
    path : "/:anything(.*)",
    component : Warn,

  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;