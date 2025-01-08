import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useMaterialStore } from '@/stores/useMaterial'
import type { Material } from '@/types'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/stash',
      name: 'stash',
      component: () => import('@/views/StashView/Index.vue'),
      redirect: '/select-group',
      children: [
        {
          path: '/select-group',
          name: 'select-group',
          component: () => import('@/views/StashView/SelectGroupView.vue'),
          redirect: '/single-select',
          children: [
            {
              path: '/single-select',
              name: 'single-select',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: '/multi-select',
              name: 'multi-select',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/MultiSelect.vue'),
            },
            {
              path: '/option-select',
              name: 'option-select',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/OptionSelect.vue'),
            },
            {
              path: '/single-pic-select',
              name: 'single-pic-select',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SinglePicSelect.vue'),
            },
            {
              path: '/multi-pic-select',
              name: 'multi-pic-select',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/MultiPicSelect.vue'),
            },
          ],
        },
        {
          path: '/input-group',
          name: 'input-group',
          component: () => import('@/views/StashView/InputGroupView.vue'),
          redirect: 'text-input',
          children: [
            {
              path: '/text-input',
              name: 'text-input',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
          ],
        },
        {
          path: '/advance-group',
          name: 'advance-group',
          component: () => import('@/views/StashView/AdvanceGroupView.vue'),
          redirect: '/rate-score',
          children: [
            {
              path: '/rate-score',
              name: 'rate-score',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/RateScore.vue'),
            },
            {
              path: '/date-time',
              name: 'date-time',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/DateTime.vue'),
            },
          ],
        },
        {
          path: '/note-group',
          name: 'note-group',
          component: () => import('@/views/StashView/NoteGroupView.vue'),
          redirect: '/text-note',
          children: [
            {
              path: '/text-note',
              name: 'text-note',
              component: () => import('@/components/SurveyComs/Materials/NoteComs/TextNote.vue'),
            },
          ],
        },
        {
          path: '/personal-info-group',
          name: 'personal-info-group',
          component: () => import('@/views/StashView/PersonalInfoGroupView.vue'),
          redirect: '/personal-info-name',
          children: [
            {
              path: '/personal-info-name',
              name: 'personal-info-name',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-id',
              name: 'personal-info-id',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-birth',
              name: 'personal-info-birth',
              component: () =>
                import('@/components/SurveyComs/Materials/AdvancedComs/DateTime.vue'),
            },
            {
              path: '/personal-info-gender',
              name: 'personal-info-gender',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: '/personal-info-age',
              name: 'personal-info-age',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: '/personal-info-education',
              name: 'personal-info-education',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: '/personal-info-collage',
              name: 'personal-info-collage',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-major',
              name: 'personal-info-major',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-industry',
              name: 'personal-info-industry',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-career',
              name: 'personal-info-career',
              component: () =>
                import('@/components/SurveyComs/Materials/SelectComs/SingleSelect.vue'),
            },
            {
              path: '/personal-info-company',
              name: 'personal-info-company',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-position',
              name: 'personal-info-position',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
          ],
        },
        {
          path: '/contact-group',
          name: 'contact-group',
          component: () => import('@/views/StashView/ContactGroupView.vue'),
          redirect: '/personal-info-tel',
          children: [
            {
              path: '/personal-info-tel',
              name: 'personal-info-tel',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-wechat',
              name: 'personal-info-wechat',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-qq',
              name: 'personal-info-qq',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-email',
              name: 'personal-info-email',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
            {
              path: '/personal-info-address',
              name: 'personal-info-address',
              component: () => import('@/components/SurveyComs/Materials/InputComs/TextInput.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/EditorView/Index.vue'),
      children: [
        {
          path: 'survey-type',
          name: 'survey-type',
          component: () => import('@/views/EditorView/LeftSide/SurveyType.vue'),
        },
        {
          path: 'outline',
          name: 'outline',
          component: () => import('@/views/EditorView/LeftSide/Outline.vue'),
        },
      ],
    },
  ],
})

router.beforeEach((to, _, next) => {
  const store = useMaterialStore()
  if (to.name) {
    store.setCurrentMaterialCom(to.name as Material)
  }
  next()
})

export default router
