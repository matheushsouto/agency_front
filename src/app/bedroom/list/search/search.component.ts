import {Component, Inject, Injector} from '@angular/core';
import {Route} from '../../../app-const';
import {BaseSearchComponent} from '../../../base/base-search.component';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
})

export class SearchComponent extends BaseSearchComponent {
    routeApi = Route.BOOKING_BEDROOM;

    constructor(@Inject(Injector) injector: Injector) {
        super(injector);
    }

    /**
     * Initialize form.
     * @param filter
     */
    onCreateForm(filters) {
        this.createForm(
            {
                'name LIKE': filters['name LIKE'] || '',
                'count_bed =': filters['count_people LIKE'] || '',
                'count_people =': filters['count_people LIKE'] || '',
            }
        );
    }
}