### justify-content ngang so với chính chúng
flex-start: can chỉnh về bên trái cảu vùng chứa
flex-end: căn chỉnh về bên phải của vùng chứa
center
space-between : các mục hiên thị với khoảng cách bàng nhau giưã chúng
space-around:đều nằm lá sen

### align-items doc
flex-start:can chinh ve dau vung chứa
flex-end:căn chỉnh về cuối vùng chứa
center:căn chỉnh tâm dọc vùng chứa(vertical)
baseline:các mục hiển thị ở vùng cơ sở của vùng chứa
stretch:căng item vừa với vùng chứa

### flex-direction liên quân đến hướng của các item(text khác)(hình ko xoay mà chỉ di chuyển lên xuống)
row:các mục đặt theo hướng văn bản(1 bên ếch 1 bên lá -phải)
row-reverse
column:các mục đặt từ trên xuống dưới
column-reverse

### order
  thay doi vi tri con ech tren cái lá 
  vd .yellow{order:1;} //the yellow doi sang vi tri so 1
  nếu trong vàng có thế sử dụng align-self có tác dụng tương tự align-item nhưng áp dụng vs phàn tử có thuộc tính duy nhất
  nếu 2 con vang chỉ cần xác định vị trí đầu tiên vd 1 2 thì điền 1 

### flex-wrap trai các con ếch bị dồn 1 dòng
nowrap:tất cả item fit trong 1 dòng
wrap:các mục bao quanh thành dòng bổ sung
wrap-reverse

kết hợp của flex-direction và flex-wrap là flex-flow
 vid flex-flow:row wrap;

### align-content set khoang cách giữa các dòng ếch để chúng vừa với dòng lá
-flex-start:đóng gói trên cùng
-flex-end:
- center:(dọc trục)
-space-between:
-space-around:
-stretch:

