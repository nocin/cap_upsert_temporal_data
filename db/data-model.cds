namespace my.bookshop;

entity Books {
  key ID : Integer;
  title  : String;
  stock  : Integer;
  start  : Date @cds.valid.from;
  end    : Date @cds.valid.to;
}
