export default {
  /**
   * スキルページのURLを取得する
   * @returns 
   */
  getSkillPageUrl: () => {
    return '/skill'
  },

  /**
   * ブログ一覧ページのURLを取得する
   * @returns 
   */
  getBlogListPageUrl: () => {
    return '/blog'
  },

  /**
   * ブログ記事ページのURLを取得する
   * @param id 
   * @returns 
   */
  getBlogDetailPageUrl: (id: string) => {
    return `/blog/${id}`
  }
}