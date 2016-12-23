import React            from 'react'
import Layout           from 'components/Layout'
import Home             from 'components/Home'
import MainContainer    from 'components/MainContainer'
import Article          from 'components/Article'
import ComponentDoc     from 'components/ComponentDoc'

import componentsData   from '_data/components'
import designData       from '_data/design'
import demosList        from '_data/demos-list'

import configs          from '../../site.config.js'


// Helps
// --------------------------------
const pathToFile = {};
Object.keys({}).forEach((key) => pathToFile[redirects[key]] = key)

// 未来 for changlog
pathToFile['components/changelog'] = './CHANGELOG'

function getMenuItems(data){
      const menuData = Object.keys(data).map(key => data[key]).map(d => d.meta)
    
      const menuItems = {};

      menuData.sort((a, b) => {
        return parseInt(a.order, 10) - parseInt(b.order, 10);
      }).forEach((meta) => {
        if (meta.display !== false) {
          const category = meta.category || 'topLevel';
          if (!menuItems[category]) {
            menuItems[category] = {};
          }

          const type = meta.type || 'topLevel';
          if (!menuItems[category][type]) {
            menuItems[category][type] = [];
          }

          menuItems[category][type].push(meta);
        }
      });

    return menuItems
}

function getChildrenWrapper(data) {
  return function childrenWrapper(props) {
    const trimedPathname = props.location.pathname.replace(/^\//, '')
    const processedPathname = pathToFile[trimedPathname] || trimedPathname
    const doc = data[`${processedPathname}.md`] ||
            data[`${processedPathname}/index.md`]

    const hasDemos = demosList[doc.meta.fileName]

    return !hasDemos ?
      <Article {...props} content={doc} /> :
      <ComponentDoc {...props} doc={doc} />
  }
}

function generateMainContainer(data){
    const menuItems = getMenuItems(data)

    return (props) => {
        return <MainContainer {...props} menuItems={menuItems} />
    }
}

const routeConfigs = {
  path        : '/',
  component   : Layout,
  indexRoute  : { component : Home },
  childRoutes : []
}


const { docDirList } = configs 
const allDirs = docDirList.reduce((a, b) => a.concat(b))

let dataObj = {}

docDirList.forEach(item => { 
    const isArr = Array.isArray(item) 
    const key = isArr ? item[0] : item

    if(isArr){
        item.forEach(name => {
            dataObj[`${name}`] = item[0]
        })
    }else{
        dataObj[item] = item
    }

})

allDirs.forEach(name => {
    const data = require(`_data/${dataObj[name]}`)

    routeConfigs.childRoutes.push({
        path : `/docs/${name}`,
        component : generateMainContainer(data),
        childRoutes : [
            { path : ':children', component : getChildrenWrapper(data)}
        ]
    })
})



export default routeConfigs

/**
 *@Configs looks like this, expect indexRoute
 */
// export default {
//   path        : '/',
//   component   : Layout,
//   indexRoute  : { component : Home },
//   childRoutes : [
//     { 
//         path : '/docs/components',
//         component : generateMainContainer(componentsData),
//         childRoutes : [
//             { path : ':children', component : getChildrenWrapper(componentsData)}
//         ]
//     },

//     {
//         path : '/docs/react',
//         indexRoute : {onEnter: (nextState, replace) => replace('/docs/react/introduce')},
//         component : generateMainContainer(componentsData),
//         childRoutes : [
//             { path : ':children', component : getChildrenWrapper(componentsData)}
//         ]
//     },

//     {
//         path : '/docs/design',
//         indexRoute : {onEnter: (nextState, replace) => replace('/docs/design/color')},
//         component : generateMainContainer(designData),
//         childRoutes : [
//             { path : ':children', component : getChildrenWrapper(designData)}
//         ]
//     }
//   ]
// }
