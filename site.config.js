module.exports = {
    // 如果有demo的话，配置此项
    demoDir : 'components',

    // 文档的包含关系， components与react合并内容, design单独
    docDirList : [['components','react'], 'design'],

    // 扩展配置，目前不支持，后期再看
    // docMenu : [
    //     {dir : ['components','react'], name : '组件'},
    //     {dir : 'design', name : '设计'}
    // ],


    /**
     *@Params  
     * true 使用默认所有目录范围
     * [] 数组范围内的
     * false 不需要搜索
     */
    searchScope : ['components', 'design']
}
