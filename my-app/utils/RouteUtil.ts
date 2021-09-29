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
  },

  /**
   * 管理ページのURLを取得する
   * @returns 
   */
  getAdminPageUrl: () => {
    return `/admin`
  },

  /**
   * スキル管理ページのURLを取得する
   * @returns 
   */
   getAdminSkillPageUrl: () => {
    return `/admin/skill`
  },

  /**
   * ブログ管理ページのURLを取得する
   * @returns 
   */
   getAdminBlogPageUrl: () => {
    return `/admin/blog`
  },

  /**
   * ブログ詳細管理ページのURLを取得する
   * @returns 
   */
   getAdminBlogDetailPageUrl: (id: number) => {
    return `/admin/blog/${id}`
  }
}