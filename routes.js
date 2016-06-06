import AppComponent from './src/app';
import TopicList from './src/components/topic-list';
import TodosComponent from './src/components/todos';
import Topic from './src/components/topic';
import ImageDetail from './src/components/image-detail';

const routes = {
  path: '',
  component: AppComponent,
  childRoutes: [
    {
      path: '/',
      component: TopicList
    },
    {
      path: '/todos',
      component: TodosComponent
    },
    {
      path: '/topics/:id',
      component: Topic
    },
    {
      path: '/images/:id',
      component: ImageDetail
    }
  ]
}

export { routes };
