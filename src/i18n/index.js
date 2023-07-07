import { createI18n } from "vue-i18n";
import localZhCn from '@/i18n/languages/zh-cn';
import localEn from '@/i18n/languages/en';
import zhCn from "element-plus/es/locale/lang/zh-cn";
import en from "element-plus/es/locale/lang/en";

const i18n = createI18n({
  legacy: false,
  locale: 'zh-cn',
  fallbackLocale: 'zh-cn',
  message: {
    'zh-cn': localZhCn,
    'en': localEn
  }
});

export const elementLocales = {
  'zh-cn': zhCn,
  en
}
export default i18n;