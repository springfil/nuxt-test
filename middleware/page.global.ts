export default defineNuxtRouteMiddleware((to, from) => {
    const getDepth = (path: string) => {
      return path.split('/').filter(seg => seg.length > 0).length;
    }
  
    const toDepth = getDepth(to.path);
    const fromDepth = getDepth(from.path);
  
    if (toDepth > fromDepth) {
      to.meta.pageTransition = { name: 'slide-left' };
      from.meta.pageTransition = { name: 'slide-left' };
    } else {
      to.meta.pageTransition = { name: 'slide-right' };
      from.meta.pageTransition = { name: 'slide-right' };
    }
})