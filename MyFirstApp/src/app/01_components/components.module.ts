import { NgModule } from "@angular/core";
import { ComponentsDemoComponent } from './components-demo/components-demo.component';
import { UserCardComponent } from './user-card/user-card.component';
import { TopicPropertyBindingsComponent } from './topic-property-bindings/topic-property-bindings.component';
import { TopicEventBindingComponent } from './topic-event-binding/topic-event-binding.component';

@NgModule({
    declarations: [ComponentsDemoComponent, UserCardComponent, TopicPropertyBindingsComponent, TopicEventBindingComponent],
    exports: [ComponentsDemoComponent],
})

export class ComponentModule{}