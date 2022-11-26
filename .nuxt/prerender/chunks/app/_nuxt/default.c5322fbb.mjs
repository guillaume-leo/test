import { useSSRContext, mergeProps } from 'file:///Users/guillaumequet/code/perso/test/node_modules/vue/index.mjs';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttrs } from 'file:///Users/guillaumequet/code/perso/test/node_modules/vue/server-renderer/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/hookable/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/unctx/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/ufo/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/h3/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/@unhead/vue/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/@unhead/dom/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/destr/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/scule/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/ohash/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/unstorage/dist/drivers/fs.mjs';
import 'file:///Users/guillaumequet/code/perso/test/node_modules/radix3/dist/index.mjs';

function ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<h1${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}>Hi this is the header <p class="paragraph">paragraph paragraph inside the header coucou</p></h1>`);
}
const _sfc_main$1 = {};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/header.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", ssrRender]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_Header = __nuxt_component_0;
  _push(`<!--[-->`);
  _push(ssrRenderComponent(_component_Header, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`<div class="footer">footer</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.c5322fbb.mjs.map
