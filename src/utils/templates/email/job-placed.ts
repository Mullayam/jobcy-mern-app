export const JobConfirmation = (url:string) => {
  const html = `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if (gte mso 9)|(IE)]>
  <xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1"> <!-- So that mobile will display zoomed in -->
<meta http-equiv="X-UA-Compatible" content="IE=edge"> <!-- enable media queries for windows phone 8 -->
<meta name="format-detection" content="telephone=no"> <!-- disable auto telephone linking in iOS -->
<meta name="format-detection" content="date=no"> <!-- disable auto date linking in iOS -->
<meta name="format-detection" content="address=no"> <!-- disable auto address linking in iOS -->
<meta name="format-detection" content="email=no"> <!-- disable auto email linking in iOS -->
<meta name="color-scheme" content="only">
<title></title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet">

<style type="text/css"> 
/*Basics*/
body {margin:0px !important; padding:0px !important; display:block !important; min-width:100% !important; width:100% !important; -webkit-text-size-adjust:none;}
table {border-spacing:0; mso-table-lspace:0pt; mso-table-rspace:0pt;}
table td {border-collapse: collapse;mso-line-height-rule:exactly;}
td img {-ms-interpolation-mode:bicubic; width:auto; max-width:auto; height:auto; margin:auto; display:block!important; border:0px;}
td p {margin:0; padding:0;}
td div {margin:0; padding:0;}
td a {text-decoration:none; color: inherit;}
/*Outlook*/
.ExternalClass {width: 100%;}
.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height:inherit;}
.ReadMsgBody {width:100%; background-color: #ffffff;}
/* iOS black LINKS */
a[x-apple-data-detectors] {color:inherit !important; text-decoration:none !important; font-size:inherit !important; font-family:inherit !important; font-weight:inherit !important; line-height:inherit !important;} 
/*Gmail black links*/
u + #body a {color:inherit;text-decoration:none;font-size:inherit;font-family:inherit;font-weight:inherit;line-height:inherit;}
/*Buttons fix*/
.undoreset a, .undoreset a:hover {text-decoration:none !important;}
.yshortcuts a {border-bottom:none !important;}
.ios-footer a {color:#aaaaaa !important;text-decoration:none;}
/*Responsive-Tablet*/
@media only screen and (max-width: 799px) and (min-width: 601px) {
  .outer-table.row {width:640px!important;max-width:640px!important;}
  .inner-table.row {width:580px!important;max-width:580px!important;}
}
/*Responsive-Mobile*/
@media only screen and (max-width: 600px) and (min-width: 320px) {
  table.row {width: 100%!important;max-width: 100%!important;}
  td.row {width: 100%!important;max-width: 100%!important;}
  .img-responsive img {width:100%!important;max-width: 100%!important;height: auto!important;margin: auto;}
  .center-float {float: none!important;margin:auto!important;}
  .center-text{text-align: center!important;}
  .container-padding {width: 100%!important;padding-left: 15px!important;padding-right: 15px!important;}
  .container-padding10 {width: 100%!important;padding-left: 10px!important;padding-right: 10px!important;}
  .hide-mobile {display: none!important;}
  .menu-container {text-align: center !important;}
  .autoheight {height: auto!important;}
  .m-padding-10 {margin: 10px 0!important;}
  .m-padding-15 {margin: 15px 0!important;}
  .m-padding-20 {margin: 20px 0!important;}
  .m-padding-30 {margin: 30px 0!important;}
  .m-padding-40 {margin: 40px 0!important;}
  .m-padding-50 {margin: 50px 0!important;}
  .m-padding-60 {margin: 60px 0!important;}
  .m-padding-top10 {margin: 30px 0 0 0!important;}
  .m-padding-top15 {margin: 15px 0 0 0!important;}
  .m-padding-top20 {margin: 20px 0 0 0!important;}
  .m-padding-top30 {margin: 30px 0 0 0!important;}
  .m-padding-top40 {margin: 40px 0 0 0!important;}
  .m-padding-top50 {margin: 50px 0 0 0!important;}
  .m-padding-top60 {margin: 60px 0 0 0!important;}
  .m-height10 {font-size:10px!important;line-height:10px!important;height:10px!important;}
  .m-height15 {font-size:15px!important;line-height:15px!important;height:15px!important;}
  .m-height20 {font-size:20px!important;line-height:20px!important;height:20px!important;}
  .m-height25 {font-size:25px!important;line-height:25px!important;height:25px!important;}
  .m-height30 {font-size:30px!important;line-height:30px!important;height:30px!important;}
  .radius6 {border-radius: 6px!important;}
  .fade-white {background-color: rgba(255, 255, 255, 0.8)!important;}
  .rwd-on-mobile {display: inline-block!important;padding: 5px!important;}
  .center-on-mobile {text-align: center!important;}
  .rwd-col {width:100%!important;max-width:100%!important;display:inline-block!important;}
  .type48 {font-size:48px!important;line-height:58px!important;}
}
</style>

</head>

<body  style="margin-top: 0; margin-bottom: 0; padding-top: 0; padding-bottom: 0; width: 100%; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%;" bgcolor="#000000">

<span class="preheader-text"  style="color: transparent; height: 0; max-height: 0; max-width: 0; opacity: 0; overflow: hidden; visibility: hidden; width: 0; display: none; mso-hide: all;"></span>

<!-- Preheader white space hack -->
<div style="display: none; max-height: 0px; overflow: hidden;">
&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;
</div>

<div   style="display:none; font-size:0px; line-height:0px; max-height:0px; max-width:0px; opacity:0; overflow:hidden; visibility:hidden; mso-hide:all;"></div>

<table border="0" align="center" cellpadding="0" cellspacing="0" width="100%" style="width:100%;max-width:100%;">
  <tr><!-- Outer Table -->
    <td align="center"  bgcolor="#000000" class="container-padding" data-composer>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-logo -->
  <tr>
    <td height="60" style="font-size:60px;line-height:60px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center">
      <img mc:edit="mc1" style="width:189px;border:0px;display: inline!important;" src="${url}/logo.png" width="189" border="0"       alt="logo">
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-logo -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-intro-13 -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td class="type48"  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:64px;line-height:84px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc2" >
            Order Confirmation 
          </div>
        
    </td>
  </tr>
  <tr  >
    <td height="10" style="font-size:10px;line-height:10px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center">
      <!-- rwd-col -->
      <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
        <tr>
          <td class="rwd-col" align="center">

            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td  align="right" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:32px;line-height:42px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
                    
                      <div mc:edit="mc3" >
                       Order Number:
                      </div>
                    
                </td>
              </tr>
            </table>

          </td>
          <td class="rwd-col" align="center" width="10" height="5" style="width:10px;max-width:10px;height:5px;">&nbsp;</td>
          <td class="rwd-col" align="center">

            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td  align="left" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:32px;line-height:42px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
                    
                      <div mc:edit="mc4" >
                       Black#798436#
                      </div>
                    
                </td>
              </tr>
            </table>

          </td>
        </tr>
      </table>
      <!-- rwd-col -->
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-intro-13 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-splitter -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" height="8"  style="font-size:8px;line-height:8px;border-top: 8px dotted #333333;">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-splitter -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-estimated-delivery -->
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc5" >
            Thank you for choosing our shop. <br> 
            Your estimated delivery date is
          </div>
        
    </td>
  </tr>
  <tr  >
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:32px;line-height:42px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc6" >
            5.14.22 – 5.18.22
          </div>
        
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-estimated-delivery -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-shipping-details -->
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:24px;line-height:32px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc7" >
            Shipping details
          </div>
        
    </td>
  </tr>
  <tr  >
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:32px;line-height:42px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc8" >
            75 East Harmon Avenue, <br>
            Las Vegas, NV 89109
          </div>
        
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-shipping-details -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-splitter -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" height="8"  style="font-size:8px;line-height:8px;border-top: 8px dotted #333333;">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-splitter -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-title-3 -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr>
    <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:48px;line-height:62px;font-weight:300;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc9" >
            Order details 
          </div>
        
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-title-3 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-product-1 -->
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center" bgcolor="#FFFFFF" > 
      <!-- row -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="93.1%" style="width:93.1%;max-width:93.1%;">
        <tr>
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td>
        </tr>
        <tr>
          <td align="center">
            <img mc:edit="mc10" class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;"    width="540" src="${url}/product-1.jpg" border="0"  alt="picture">
          </td>
        </tr>
        <tr>
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td>
        </tr>
      </table>
      <!-- row -->
    </td>
  </tr>
  <tr  >
    <td align="center" height="5" style="font-size:5px;line-height:5px;" bgcolor="#FF69AF" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" bgcolor="#333333" >
      <!-- row -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="93.1%" style="width:93.1%;max-width:93.1%;">
        <tr>
          <td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:40px;line-height:53px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
              
                <div mc:edit="mc11" >
                  27" 4K Monitor 
                </div>
              
          </td>
        </tr>
        <tr  >
          <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
        </tr>
        <tr  >
          <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:18px;line-height:36px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
              
                <div mc:edit="mc12" >
Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi. Unde omnis iste natus error sit volup tatem accus antium. Lorem ipsum dolor sit amet, consectetur. 
                </div>
              
          </td>
        </tr>
        <tr  >
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td> 
        </tr>
        <tr  >
          <td align="center">
            <!-- rwd-col -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
              <tr>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="right" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc13" >
                             Item Code:
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
                <td class="rwd-col" align="center" width="10" height="5" style="width:10px;max-width:10px;height:5px;">&nbsp;</td>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="left" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc14" >
                             #87193562
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
            </table>
            <!-- rwd-col -->
          </td>
        </tr>
        <tr  >
          <td height="25" style="font-size:25px;line-height:25px;">&nbsp;</td> 
        </tr>
        <tr  > 
          <td align="center" height="30"  style="font-size:30px;line-height:30px;border-top: 2px dotted #555555;">&nbsp;</td>
        </tr>
        <tr>
          <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc15" >
                Color
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc16" >
                White
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="5%" height="20" style="width:5%;max-width:5%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc17" >
                Quantity
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc18" >
                1
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="5%" height="20" style="width:5%;max-width:5%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc19" >
                Price
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc20" >
                $499
              </div>
            
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
<!-- rwd-col -->

          </td>
        </tr>
        <tr>
          <td height="30" style="font-size:30px;line-height:30px;">&nbsp;</td>
        </tr>
      </table>
      <!-- row -->
    </td>
  </tr>
  <tr>
    <td height="25" style="font-size:25px;line-height:25px;" >&nbsp;</td>
  </tr>
  <!-- black-product-1 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-product-2 -->
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center" bgcolor="#FFFFFF" > 
      <!-- row -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="93.1%" style="width:93.1%;max-width:93.1%;">
        <tr>
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td>
        </tr>
        <tr>
          <td align="center">
            <img mc:edit="mc21" class="auto-width" style="display:block;width:100%;max-width:100%;border:0px;"    width="540" src="${url}/product-2.jpg" border="0"  alt="picture">
          </td>
        </tr>
        <tr>
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td>
        </tr>
      </table>
      <!-- row -->
    </td>
  </tr>
  <tr  >
    <td align="center" height="5" style="font-size:5px;line-height:5px;" bgcolor="#FF69AF" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" bgcolor="#333333" >
      <!-- row -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="93.1%" style="width:93.1%;max-width:93.1%;">
        <tr>
          <td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:40px;line-height:53px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
              
                <div mc:edit="mc22" >
                  16" Laptop 
                </div>
              
          </td>
        </tr>
        <tr  >
          <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
        </tr>
        <tr  >
          <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:18px;line-height:36px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
              
                <div mc:edit="mc23" >
Ut enim ad minim veniam, quis nostrud exerci tation ullamco laboris nisi. Unde omnis iste natus error sit volup tatem accus antium. Lorem ipsum dolor sit amet, consectetur. 
                </div>
              
          </td>
        </tr>
        <tr  >
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td> 
        </tr>
        <tr  >
          <td align="center">
            <!-- rwd-col -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
              <tr>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="right" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc24" >
                             Item Code:
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
                <td class="rwd-col" align="center" width="10" height="5" style="width:10px;max-width:10px;height:5px;">&nbsp;</td>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="left" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc25" >
                             #27493567
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
            </table>
            <!-- rwd-col -->
          </td>
        </tr>
        <tr  >
          <td height="25" style="font-size:25px;line-height:25px;">&nbsp;</td> 
        </tr>
        <tr  > 
          <td align="center" height="30"  style="font-size:30px;line-height:30px;border-top: 2px dotted #555555;">&nbsp;</td>
        </tr>
        <tr>
          <td align="center">

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc26" >
                Color
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc27" >
                Silver
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="5%" height="20" style="width:5%;max-width:5%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc28" >
                Quantity
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc29" >
                1
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="5%" height="20" style="width:5%;max-width:5%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc30" >
                Price
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc31" >
                $1,699
              </div>
            
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
<!-- rwd-col -->

          </td>
        </tr>
        <tr>
          <td height="30" style="font-size:30px;line-height:30px;">&nbsp;</td>
        </tr>
      </table>
      <!-- row -->
    </td>
  </tr>
  <tr>
    <td height="25" style="font-size:25px;line-height:25px;" >&nbsp;</td>
  </tr>
  <!-- black-product-2 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-title-4 -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr>
    <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:48px;line-height:62px;font-weight:300;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
        
          <div mc:edit="mc32" >
            Order Total 
          </div>
        
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-title-4 -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-orders-total -->
  <tr>
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center" height="5" style="font-size:5px;line-height:5px;" bgcolor="#FF69AF" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" bgcolor="#333333" >
      <!-- row -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="93.1%" style="width:93.1%;max-width:93.1%;">
        <tr>
          <td height="40" style="font-size:40px;line-height:40px;">&nbsp;</td>
        </tr>
        <tr  > 
          <td align="center"> 

<!-- rwd-col -->
<table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation" width="100%" style="width:100%;max-width:100%;">
  <tr>
    <td class="rwd-col" align="center" width="30%" style="width:30%;max-width:30%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc33" >
                Subtotal
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc34" >
                $2,198
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="1%" height="20" style="width:1%;max-width:1%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="34%" style="width:34%;max-width:34%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc35" >
                Postage & packing
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc36" >
                Free
              </div>
            
          </td>
        </tr>
      </table>

    </td>
    <td class="rwd-col" align="center" width="1%" height="20" style="width:1%;max-width:1%;height:20px;">&nbsp;</td>
    <td class="rwd-col" align="center" width="34%" style="width:34%;max-width:34%;">

      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation"> 
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:16px;line-height:26px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc37" >
                Additional Country VAT
              </div>
            
          </td>
        </tr>
        <tr  >
          <td  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:32px;line-height:48px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding:0!important;">
            
              <div mc:edit="mc38" >
                $527.52
              </div>
            
          </td>
        </tr>
      </table>

    </td>
  </tr>
</table>
<!-- rwd-col -->

          </td>
        </tr>
        <tr  > 
          <td height="30" style="font-size:30px;line-height:30px;">&nbsp;</td>
        </tr>
        <tr  > 
          <td align="center" height="30"  style="font-size:30px;line-height:30px;border-top: 2px dotted #555555;">&nbsp;</td>
        </tr>
        <tr  > 
          <td height="20" style="font-size:20px;line-height:20px;">&nbsp;</td>
        </tr>
        <tr  >
          <td align="center">
            <!-- rwd-col -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
              <tr>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:40px;line-height:40px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc39" >
                             Total:
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
                <td class="rwd-col" align="center" width="10" height="5" style="width:10px;max-width:10px;height:5px;">&nbsp;</td>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="center" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:40px;line-height:40px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc40" >
                             $2,226.52
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
            </table>
            <!-- rwd-col -->
          </td>
        </tr>
        <tr  > 
          <td height="30" style="font-size:30px;line-height:30px;">&nbsp;</td>
        </tr>
        <tr  >
          <td align="center">
            <!-- rwd-col -->
            <table border="0" cellpadding="0" cellspacing="0" align="center" role="presentation">
              <tr>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="right" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FF69AF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc41" >
                             Your payment method:
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
                <td class="rwd-col" align="center" width="10" height="5" style="width:10px;max-width:10px;height:5px;">&nbsp;</td>
                <td class="rwd-col" align="center">

                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td  align="left" style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:400;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;">
                          
                            <div mc:edit="mc42" >
                             Visa
                            </div>
                          
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>
            </table>
            <!-- rwd-col -->
          </td>
        </tr>
        <tr  >
          <td height="50" style="font-size:50px;line-height:50px;">&nbsp;</td>
        </tr>
      </table>
      <!-- row -->
    </td>
  </tr>
  <tr>
    <td height="25" style="font-size:25px;line-height:25px;" >&nbsp;</td>
  </tr>
  <!-- black-orders-total -->
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center">
      <!-- Button -->
      <table border="0" cellspacing="0" cellpadding="0" role="presentation" align="center">
        <tr>
          <td align="center"    bgcolor="#FF0076" style="border-radius: 6px;">
      <!--[if (gte mso 9)|(IE)]>
        <table border="0" cellpadding="0" cellspacing="0" align="center">
          <tr>
            <td align="center" width="38"></td>
            <td align="center" height="60" style="height:60px;">
            <![endif]-->
              
                <a href="#" mc:edit="mc43"   style="font-family:'Roboto Slab',Arial,Helvetica,sans-serif;font-size:18px;line-height:28px;font-weight:700;font-style:normal;color:#FFFFFF;text-decoration:none;letter-spacing:0px;padding: 16px 38px 16px 38px;display: inline-block;"><span>VIEW MY ORDER</span></a>
              
            <!--[if (gte mso 9)|(IE)]>
            </td>
            <td align="center" width="38"></td>
          </tr>
        </table>
      <![endif]-->
          </td>
        </tr>
      </table>
      <!-- Buttons -->
    </td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
</table>

<table data-outer-table border="0" align="center" cellpadding="0" cellspacing="0" class="outer-table row" role="presentation" width="580" style="width:580px;max-width:580px;" >
  <!-- black-splitter -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr>
    <td align="center" height="8"  style="font-size:8px;line-height:8px;border-top: 8px dotted #333333;">&nbsp;</td>
  </tr>
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <!-- black-splitter -->
</table>

<table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="580" style="width:580px;max-width:580px;" >
  <!-- black-footer -->
  <tr>
    <td height="30" style="font-size:30px;line-height:30px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr class="center-on-mobile">
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              
                <a href="#" mc:edit="mc44"   style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:28px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>About Us</span></a> 
              
            <!-- Links -->
          </td>
          <td   class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="10"></td>
                <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:28px;line-height:28px;font-weight:100;font-style:normal;color:#444444;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="10"></td>
              </tr>
            </table>
          </td>
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              
                <a href="#" mc:edit="mc45"   style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:28px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>Help</span></a> 
              
            <!-- Links -->
          </td>
          <td   class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="10"></td>
                <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:28px;line-height:28px;font-weight:100;font-style:normal;color:#444444;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="10"></td>
              </tr>
            </table>
          </td>
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              
                <a href="#" mc:edit="mc46"   style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:28px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>Privacy Policy</span></a> 
              
            <!-- Links -->
          </td>
          <td   class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="10"></td>
                <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:28px;line-height:28px;font-weight:100;font-style:normal;color:#444444;text-decoration:none;letter-spacing:0px;">|</td>
                <td width="10"></td>
              </tr>
            </table>
          </td>
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <!-- Links -->
              
                <a href="#" mc:edit="mc47"   style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:28px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;display:inline-block;vertical-align:middle;"><span>Contact Us</span></a> 
              
            <!-- Links -->
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr  >
    <td height="40" style="font-size:40px;line-height:40px;" >&nbsp;</td>
  </tr>
  
  <tr  >
    <td align="center">
      <!-- Social Icons -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" width="100%" style="width:100%;max-width:100%;">
        <tr>
          <td align="center">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr class="center-on-mobile">

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td align="center">
                        <img mc:edit="mc48" style="width:28px;border:0px;display: inline!important;" src="${url}/facebook.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc49" style="width:28px;border:0px;display: inline!important;" src="${url}/twitter.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc50" style="width:28px;border:0px;display: inline!important;" src="${url}/linkedin.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc51" style="width:28px;border:0px;display: inline!important;" src="${url}/pinterest.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc52" style="width:28px;border:0px;display: inline!important;" src="${url}/instagram.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc53" style="width:28px;border:0px;display: inline!important;" src="${url}/dribbble.png" width="28" border="0"       alt="icon">
                      </td>
                      <td width="7"></td>
                    </tr>
                  </table>
                </td>

                <td   class="rwd-on-mobile" align="center" valign="middle" height="28" style="height: 28px;">
                  <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
                    <tr>
                      <td width="7"></td>
                      <td align="center">
                        <img mc:edit="mc54" style="width:28px;border:0px;display: inline!important;" src="${url}/youtube.png" width="28" border="0"       alt="icon">
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
      <!-- Social Icons -->
    </td>
  </tr>
  <tr  >
    <td height="45" style="font-size:45px;line-height:45px;" >&nbsp;</td>
  </tr>

  <tr  >
    <td align="center">
      <!-- Buttons -->
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="100%" style="width:100%;max-width:100%;">
        <tr>
          <td align="center">
            <!-- column -->
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr  >
                <td align="center">
                  <img mc:edit="mc55" style="display:block;width:100%;max-width:117px;border:0px;"    width="117" src="${url}/App-Store.png" border="0"  alt="icon">
                </td>
                <td width="10" style="width:10px;"></td>
                <td align="center">
                  <img mc:edit="mc56" style="display:block;width:100%;max-width:117px;border:0px;"    width="117" src="${url}/Google-play.png" border="0"  alt="icon"></td>
              </tr>
            </table>
            <!-- column -->
          </td>
        </tr>
      </table>
      <!-- Buttons -->
    </td>
  </tr>
  <tr  >
    <td height="50" style="font-size:50px;line-height:50px;" >&nbsp;</td>
  </tr>

  <tr  >
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation" class="row" width="480" style="width:480px;max-width:480px;">
        <tr>
          <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            
              <div mc:edit="mc57" >
                2022 black Inc. All Rights Reserved.<br>
                Address name St. 152, City Name, State, Country Name
              </div>
            
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr  >
    <td height="20" style="font-size:20px;line-height:20px;" >&nbsp;</td>
  </tr>
  <tr  >
    <td align="center">
      <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
        <tr class="center-on-mobile">
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <a href="*|UNSUB|*"  style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:24px;color:#999999;text-decoration:none;">Unsubscribe</a>
          </td>
          <td   class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">/</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <a href="*|ARCHIVE|*"  style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:24px;color:#999999;text-decoration:none;">View Online</a>
          </td>
          <td   class="hide-mobile" align="center" valign="middle">
            <table border="0" align="center" cellpadding="0" cellspacing="0" role="presentation">
              <tr>
                <td width="5"></td>
                <td class="center-text"  align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:400;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">/</td>
                <td width="5"></td>
              </tr>
            </table>
          </td>
          <td    class="rwd-on-mobile center-text" align="center" style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;line-height:24px;font-weight:300;font-style:normal;color:#999999;text-decoration:none;letter-spacing:0px;">
            <a href="*|FORWARD|*"  style="font-family:'Roboto',Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;line-height:24px;color:#999999;text-decoration:none;">Send to a friend</a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
  <tr>
    <td height="50" style="font-size:50px;line-height:50px;" >&nbsp;</td>
  </tr>
  <!-- black-footer -->
</table>

    </td>
  </tr><!-- Outer-Table -->
</table>

</body>
</html>

  `
  return html
}