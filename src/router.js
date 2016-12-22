// common
import isBuilding from "./views/common/building.vue";
import notfound from "./views/common/notfound.vue";
// business
import home from "./views/business/home.vue";

const routesMap = [
  // central router
  { path: '/', redirect: '/home' },
  { path: '/home', component: isBuilding },
  { path: '/404', component: notfound },
  { path: '*', redirect: '/404' }
  // business

]

export default routesMap