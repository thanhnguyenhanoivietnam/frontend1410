Smart Component CONTAINER
 - quản lý xử lý dữ liệu
 - ko quan tâm nó render thế nào chỉ quan tâm render cái ji

 Dumb Component
 -Cho ji render cái đó
 -ko bt du liệu đến từ đâu

 ### CONTAINER
 HomePage
  -Prop:N/A
  -State:recipeList (Lây dữ liệu từ sever về)
  -Render
   - Header
   - Banner(hình mô tả)
   - RecipeList: state recipeList
   - Footer

### components
header: render header
banner: render banner
footer: render footer
recipeList
-Props:recopeList
-state:N/A
-render:a list of recipes