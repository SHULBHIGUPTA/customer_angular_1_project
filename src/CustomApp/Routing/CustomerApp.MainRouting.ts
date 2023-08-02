import { HomeComponent } from "../Home/CustomerApp.HomeComponent";
import { SupplierModule } from "../Supplier/CustomerApp.SupplierModule";

export const MainRoutes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Customer',
  loadChildren: () => import('../Customer/CustomerApp.CustomerModule').then(x => x.CustomerModule)},
  {path: 'Supplier', 
  loadChildren: () => import('../Supplier/CustomerApp.SupplierModule').then(x => x.SupplierModule)},
  {path: '', component: HomeComponent},
]