/* eslint-disable */
/* prettier-ignore */
// @ts-nocheck
// Generated by unplugin-vue-router. ‼️ DO NOT MODIFY THIS FILE ‼️
// It's recommended to commit this file.
// Make sure to add this file to your tsconfig.json file as an "includes" or "files" entry.

declare module 'vue-router/auto-routes' {
  import type {
    RouteRecordInfo,
    ParamValue,
    ParamValueOneOrMore,
    ParamValueZeroOrMore,
    ParamValueZeroOrOne,
  } from 'unplugin-vue-router/types'

  /**
   * Route name map generated by unplugin-vue-router
   */
  export interface RouteNamedMap {
    '/[...all]': RouteRecordInfo<'/[...all]', '/:all(.*)', { all: ParamValue<true> }, { all: ParamValue<false> }>,
    '/Editor': RouteRecordInfo<'/Editor', '/Editor', Record<never, never>, Record<never, never>>,
    '/Preview': RouteRecordInfo<'/Preview', '/Preview', Record<never, never>, Record<never, never>>,
    '/StoryGalleryPage': RouteRecordInfo<'/StoryGalleryPage', '/StoryGalleryPage', Record<never, never>, Record<never, never>>,
    '/visual-editor': RouteRecordInfo<'/visual-editor', '/visual-editor', Record<never, never>, Record<never, never>>,
    '/visual-editor/[[id]]': RouteRecordInfo<'/visual-editor/[[id]]', '/visual-editor/:id?', { id?: ParamValueZeroOrOne<true> }, { id?: ParamValueZeroOrOne<false> }>,
    '/visual-editor/my-works': RouteRecordInfo<'/visual-editor/my-works', '/visual-editor/my-works', Record<never, never>, Record<never, never>>,
  }
}