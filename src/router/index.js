function flattern (a, p='') {
    if(!a || !a.length) {
        return []
    } 
   let path
   return a.reduce((ret,r) => {
    path = p + r.path
    return [...ret, {...r, path}, ...flattern(r.children, path)]
   } , [])
}
export const routes = flattern([
    {
        path: '/',
        component: require('../views/Home').default,
        children: [
            {
                path: 'home',
                component: require('../views/Home').default
            },
            {
                path: 'design',
                component: require('../views/Design').default
            },
            {
                path: '*',
                component: require('../components/NotFound').default
            }
        ]

    },
])
