import Avatar from 'primevue/avatar';
import AvatarGroup from 'primevue/avatargroup';
import Badge from 'primevue/badge';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Message from 'primevue/message';
import Row from 'primevue/row';
import StyleClass from 'primevue/styleclass';
import PrimeVue from 'primevue/config';

export default {
    install: (app) => {
        app.directive('styleclass', StyleClass);
        app.use(PrimeVue, {ripple: true});

        app.component('Avatar', Avatar);
        app.component('AvatarGroup', AvatarGroup);
        app.component('Badge', Badge);
        app.component('Button', Button);
        app.component('Card', Card);
        app.component('Message', Message);
        app.component('Row', Row);
    }
}
