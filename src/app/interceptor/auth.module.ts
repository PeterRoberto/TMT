import { NgModule, ModuleWithProviders } from "@angular/core";
import { AuthInterceptor } from "./auth.interceptor";


@NgModule({
    declarations: [],
    imports: []
})

export class AuthModule {
    static forRoot(config: AuthModule): ModuleWithProviders<AuthModule> {
      return {
        ngModule: AuthModule,
        providers: [
          {provide: AuthInterceptor, useValue: config }
        ]
      };
    }
} 