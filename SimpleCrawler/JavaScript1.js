//! moment.js
//! version : 2.18.1
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

/*!
 * Platform.js <https://mths.be/platform>
 * Copyright 2014-2016 Benjamin Tan <https://demoneaux.github.io/>
 * Copyright 2011-2013 John-David Dalton <http://allyoucanleet.com/>
 * Available under MIT license <https://mths.be/mit>
 */

// Copyright (c) 2009 Kazuhiko Arase

// Licensed under the MIT license:

//   http://www.opensource.org/licenses/mit-license.php

define("window", [], function () {
    window.createStyle = function (t) {
        var e = document.createElement("style");
        e.type = "text/css",
            e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t)),
            document.getElementsByTagName("head")[0].appendChild(e)
    }
        ;
    var t = /hi=b/.test(window.location.search) || /hi=bzp/.test(window.location.search);
    if (t)
        try {
            sessionStorage.setItem("hi-hide", encodeURIComponent(window.location.search))
        } catch (t) { }
    return window.appserverDomain = window.appserverDomain || "https://app.tianyancha.com",
        (t || sessionStorage.getItem("hi-hide")) && window.createStyle(".hi-hide {display:none} \n .hi-show .company_mobile_pager {display:block} \n .hi-show .content-container > div {display:block}"),
        String.prototype.startsWith = String.prototype.startsWith || function (t) {
            return RegExp("^" + t).test(this)
        }
        ,
        String.prototype.endsWith = String.prototype.endsWith || function (t) {
            return RegExp(t + "$").test(this)
        }
        ,
        Array.prototype.forEach = Array.prototype.forEach || function (t, e) {
            var i, s;
            if (null === this)
                throw new TypeError("this is null or not defined");
            var a = Object(this)
                , n = a.length >>> 0;
            if ("function" != typeof t)
                throw new TypeError(t + " is not a function");
            for (arguments.length > 1 && (i = e),
                s = 0; s < n;) {
                var o;
                s in a && (o = a[s],
                    t.call(i, o, s, a)),
                    s++
            }
        }
        ,
        window
}),
    function (t, e) {
        "use strict";
        "object" == typeof module && module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define("templates", [], e) : t.templates = e()
    }("object" == typeof window ? window : this, function () {
        "use strict";
        function t(t, i) {
            var a = s({}, n.locals);
            return e(t)(s(a, i))
        }
        function e(t) {
            return a[t]
        }
        function i(t) {
            return t ? (t + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#39;").replace(/"/g, "&quot;") : ""
        }
        function s(t, e) {
            e = e || {};
            for (var i in e)
                t[i] = e[i];
            return t
        }
        var a = {};
        a.addBusinessMember = a["addBusinessMember.ejs"] = function (t) {
            var e = "";
            return e += '<div class="modal-fix-placeholder" ><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">添加成员</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c1 "><div class="pb12 clearfix pt15"><span class="order-receipt-title">姓名</span><div class="order-receipt-outer" style="width: 320px"><input type="text" class="order-receipt membername" onfocus="clearMsg(\'name\')" placeholder="请输入新成员姓名" /><div class="new-err collapse errMsgname">请输入新成员姓名</div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">手机号码</span><div class="order-receipt-outer" style="width: 320px"><input type="text" class="order-receipt memberphone" onfocus="clearMsg(\'phone\')" placeholder="请输入新成员手机号码" /><div class="new-err collapse errMsgphone">请输入新成员手机号码</div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">备注</span><div class="order-receipt-outer" style="width: 320px"><input type="text" class="order-receipt memberremark" onfocus="clearMsg(\'remark\')" placeholder="请输入5-10个字符的备注信息" /><div class="new-err collapse errMsgremark">请输入5-10个字符的备注信息</div></div></div><div class="pb40 clearfix "><div class="order-receipt-outer sec-c4 pull-right f13" style="width: 320px">添加完成后，被添加成员会接到短信通知</div></div><div class="text-center pb30"><div class="button-yel-sm in-block w150" onclick="addComfirmMember()">提交</div></div></div></div>',
                e.trim()
        }
            ,
            a.addProductInfo = a["addProductInfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                i += '<div class="modal-fix-placeholder"><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">添加',
                    i = "" + i + (e.addType ? e.addType : ""),
                    i += '</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c1 "><div class="base-info-input-group mt10"><div class="input-title">图片</div>';
                var s = 1
                    , a = []
                    , n = "";
                return e.item && e.item.imageUrl && (n = e.item.imageUrl,
                    a = n.split("?"),
                    a.length >= 2 ? n = a[0] + (e.ratio ? "@!fill_180x120" : "@!fill_200x200") : (a = n.split("@"),
                        a.length >= 2 ? a[1].indexOf(e.ratio ? "pad_180x120" : "pad_200x200") >= 0 ? s = 2 : a[1].indexOf(e.ratio ? "fill_180x120" : "fill_200x200") >= 0 ? s = 1 : (n = a[0] + (e.ratio ? "@!fill_180x120" : "@!fill_200x200"),
                            s = 1) : n = a[0] + (e.ratio ? "@!fill_180x120" : "@!fill_200x200"))),
                    i += '<div\n        class="input-value company-img-upload addProduct-company-img-upload ',
                    i += e.item && e.item.imageUrl ? "hidden" : "",
                    i += '"><div id="addProduct-companyFileImgUpload" class="point fileImg fileImgUpload"></div><input type="file" id="addProductImg_fileinput" accept="image/jpeg,image/gif,image/png"\n               class="lawyerfileinput cursor-pointer " style=""><input id="addProductImgUrl" type="text"\n               value="',
                    i = "" + i + (e.item && e.item.imageUrl ? n : ""),
                    i += '" class="fileinput  hidden"><div class="upload-img-intro visible-lg-inline-block"><ul><li>图片格式：jpg jpeg png</li><li>文件大小：小于5M</li><li>最适尺寸：200px X 200px</li></ul></div>\x3c!--<img class="fileImgUpload uploadimgurl hidden" /><div class="trial-alert-error collapse errMsgimgUrl">请上传图片</div>--\x3e</div><div\n        class="input-value company-img-area addProduct-company-img-area ',
                    i += e.item && e.item.imageUrl ? "" : "hidden",
                    i += '"><div class="frame"\n             style="width: ',
                    i = "" + i + (e.ratio ? 180 : 200),
                    i += "px; height:  ",
                    i = "" + i + (e.ratio ? 120 : 200),
                    i += 'px;display: inline-block;margin-right:50px"><img style="border: 1px solid #efefef;" id="addProduct-company-img-select-area"\n               src="',
                    i = "" + i + (e.item && e.item.imageUrl ? n : ""),
                    i += '"\n               onerror="uploadImgLoadError(this);"></div><div id="addProduct-company-img-preview" style="display: inline-block;"><span><label><input type="radio" name="addProduct-styleType" value="1" ',
                    i += 1 == s ? 'checked="true"' : "",
                    i += ' >样式一</label><label style="margin-left:20px;"><input type="radio" name="addProduct-styleType" value="2" ',
                    i += 2 == s ? 'checked="true"' : "",
                    i += " >样式二</label></span><div onclick=\"saveSelectImg('addProduct',",
                    i = "" + i + e.ratio,
                    i += ');" style="display: block;position:inherit;" class="btn-save-img-select point">重新上传</div></div><script>\n          var initLogoUrl = "',
                    i = "" + i + (e.item && e.item.imageUrl ? a[0] : ""),
                    i += "\";\n          if (initLogoUrl) {\n            $(\"input[name='addProduct-styleType']\").on('change', function () {\n              if (this.value == 1) {\n                $('#addProduct-company-img-select-area').attr('src', initLogoUrl + '",
                    i += e.ratio ? "@!fill_180x120" : "@!fill_200x200",
                    i += "');\n                $('#addProductImgUrl').val(initLogoUrl +  '",
                    i += e.ratio ? "@!fill_180x120" : "@!fill_200x200",
                    i += "');\n              } else {\n                $('#addProduct-company-img-select-area').attr('src', initLogoUrl +  '",
                    i += e.ratio ? "@!pad_180x120" : "@!pad_200x200",
                    i += "');\n                $('#addProductImgUrl').val(initLogoUrl +  '",
                    i += e.ratio ? "@!pad_180x120" : "@!pad_200x200",
                    i += ' \');\n              }\n            });\n          }\n\n        <\/script></div></div><div class="base-info-input-group"><div class="input-title">名称</div><div class="input-value"><input onfocus="hideErrorInfo(\'errMsgaddpopup\');" id="addProductItemName" type="text"\n                                      value="',
                    i = "" + i + (e.item && e.item.name ? e.item.name : ""),
                    i += '"></div></div><div class="base-info-input-group"><div class="input-title vertical-top">介绍</div><div class="input-value"><textarea onfocus="hideErrorInfo(\'errMsgaddpopup\');" id="addProductItemIntro">',
                    i = "" + i + (e.item && e.item.introduce ? e.item.introduce : ""),
                    i += '</textarea></div></div><div class="add-product-save-container mt30"><div ng-click="cancel()">取消</div><div onclick="saveAddProductItem(',
                    i = "" + i + e.ratio,
                    i += ');" class="save-btn">保存</div></div><div class="mt20 text-center new-err collapse errMsgaddpopup in"><span style="margin-left:-30px;"></span></div></div></div>',
                    i.trim()
            }
            ,
            a.announcement = a["announcement.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">开庭公告详情</div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="28%">案由</td><td>',
                    i = "" + i + e.strFilter(e.items.caseReason),
                    i += '</td></tr><tr ><td class="table-left">案号</td><td>',
                    i = "" + i + e.strFilter(e.items.caseNo),
                    i += '</td></tr><tr><td class="table-left">原告/上诉人</td><td>',
                    e.items.plaintiff && e.items.plaintiff.length ? e.items.plaintiff.forEach(function (t) {
                        i += "<div><a ",
                            i += t.id && 2 != t.type ? 'href="/company/' + t.id + '"' : "",
                            i += '\n            class="',
                            i += t.id && 2 != t.type ? "text-click-color point" : "text-dark-color",
                            i += ' "\n            target="_blank">',
                            i = "" + i + t.name,
                            i += "</a></div>"
                    }) : i += '<span class="c-none"></span>',
                    i += '</td></tr><tr><td class="table-left">被告/被上诉人</td><td>',
                    e.items.defendant && e.items.defendant.length ? e.items.defendant.forEach(function (t) {
                        i += "<div><a ",
                            i += t.id && 2 != t.type ? 'href="/company/' + t.id + '"' : "",
                            i += '\n            class="',
                            i += t.id && 2 != t.type ? "text-click-color point" : "text-dark-color",
                            i += ' "\n            target="_blank">',
                            i = "" + i + t.name,
                            i += "</a></div>"
                    }) : i += '<span class="c-none"></span>',
                    i += '</td></tr><tr><td class="table-left">开庭日期</td><td>',
                    i = "" + i + e.dateFormat(e.items.startDate, "", "int"),
                    i += '</td></tr><tr><td class="table-left">当事人</td><td>',
                    i = "" + i + e.strFilter(e.items.litigant),
                    i += '</td></tr><tr><td class="table-left">承办部门</td><td>',
                    i = "" + i + e.strFilter(e.items.contractors),
                    i += '</td></tr><tr><td class="table-left">审判长/主审人</td><td>',
                    i = "" + i + e.strFilter(e.items.judge),
                    i += '</td></tr><tr><td class="table-left">法院</td><td>',
                    i = "" + i + e.strFilter(e.items.court),
                    i += '</td></tr><tr><td class="table-left">法庭</td><td>',
                    i = "" + i + e.strFilter(e.items.courtroom),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.appmessage = a["appmessage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup pt15 pb15" style="color: #333;"><div  class="text-center">',
                    e.items.msg && (i += '<div class="f14 " >',
                        i = "" + i + e.items.msg,
                        i += "</div>"),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a.bond = a["bond.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">债劵信息</div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="15%">债券名称</td><td width="35%">',
                    i = "" + i + (e.items.bondName && "&nbsp;" != e.items.bondName ? e.items.bondName : "未公示"),
                    i += '</td><td class="table-left" width="15%">债劵代码</td><td width="35%">',
                    i = "" + i + (e.items.bondNum && "&nbsp;" != e.items.bondNum ? e.items.bondNum : "未公示"),
                    i += '</td></tr><tr><td class="table-left">发行人</td><td>',
                    i = "" + i + (e.items.publisherName && "&nbsp;" != e.items.publisherName ? e.items.publisherName : "未公示"),
                    i += '</td><td class="table-left">债劵类型</td><td>',
                    i = "" + i + (e.items.bondType && "&nbsp;" != e.items.bondType ? e.items.bondType : "未公示"),
                    i += '</td></tr><tr><td class="table-left">债劵发行日</td><td>',
                    i = "" + i + (e.items.publishTime && "&nbsp;" != e.items.publishTime ? e.moment(parseInt(e.items.publishTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td><td class="table-left">债劵到期日</td><td>',
                    i = "" + i + (e.items.publishExpireTime && "&nbsp;" != e.items.publishExpireTime ? e.moment(parseInt(e.items.publishExpireTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td></tr><tr><td class="table-left">债劵期限</td><td>',
                    i = "" + i + (e.items.bondTimeLimit && "&nbsp;" != e.items.bondTimeLimit ? e.items.bondTimeLimit : "未公示"),
                    i += '</td><td class="table-left">上市交易日</td><td>',
                    i = "" + i + (e.items.bondTradeTime && "&nbsp;" != e.items.bondTradeTime ? e.moment(parseInt(e.items.bondTradeTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td></tr><tr><td class="table-left">计息方式</td><td>',
                    i = "" + i + (e.items.calInterestType && "&nbsp;" != e.items.calInterestType ? e.items.calInterestType : "未公示"),
                    i += '</td><td class="table-left">债劵摘牌日</td><td>',
                    i = "" + i + (e.items.bondStopTime && "&nbsp;" != e.items.bondStopTime ? e.moment(parseInt(e.items.bondStopTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td></tr><tr><td class="table-left">信用评级机构</td><td>',
                    i = "" + i + (e.items.creditRatingGov && "&nbsp;" != e.items.creditRatingGov ? e.items.creditRatingGov : "未公示"),
                    i += '</td><td class="table-left">债项评级</td><td>',
                    i = "" + i + (e.items.debtRating && "&nbsp;" != e.items.debtRating ? e.items.debtRating : "未公示"),
                    i += '</td></tr><tr><td class="table-left">面值（元）</td><td>',
                    i = "" + i + (e.items.faceValue && "&nbsp;" != e.items.faceValue ? e.items.faceValue : "未公示"),
                    i += '</td><td class="table-left">参考利率（％）</td><td>',
                    i = "" + i + (e.items.refInterestRate && "&nbsp;" != e.items.refInterestRate ? e.items.refInterestRate : "未公示"),
                    i += '</td></tr><tr><td class="table-left">票面利率（％）</td><td>',
                    i = "" + i + (e.items.faceInterestRate && "&nbsp;" != e.items.faceInterestRate ? e.items.faceInterestRate : "未公示"),
                    i += '</td><td class="table-left">实际发行量（亿）</td><td>',
                    i = "" + i + (e.items.realIssuedQuantity && "&nbsp;" != e.items.realIssuedQuantity ? e.items.realIssuedQuantity : "未公示"),
                    i += '</td></tr><tr><td class="table-left">计划发行量（亿）</td><td>',
                    i = "" + i + (e.items.planIssuedQuantity && "&nbsp;" != e.items.planIssuedQuantity ? e.items.planIssuedQuantity : "未公示"),
                    i += '</td><td class="table-left">发行价格（元）</td><td>',
                    i = "" + i + (e.items.issuedPrice && "&nbsp;" != e.items.issuedPrice ? e.items.issuedPrice : "未公示"),
                    i += '</td></tr><tr><td class="table-left">利差（BP）</td><td>',
                    i = "" + i + (e.items.interestDiff && "&nbsp;" != e.items.interestDiff ? e.items.interestDiff : "未公示"),
                    i += '</td><td class="table-left">付息频率</td><td>',
                    i = "" + i + (e.items.payInterestHZ && "&nbsp;" != e.items.payInterestHZ ? e.items.payInterestHZ : "未公示"),
                    i += '</td></tr><tr><td class="table-left">债劵起息日</td><td>',
                    i = "" + i + (e.items.startCalInterestTime && "&nbsp;" != e.items.startCalInterestTime ? e.moment(parseInt(e.items.startCalInterestTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td><td class="table-left">行权类型</td><td>',
                    i = "" + i + (e.items.exeRightType && "&nbsp;" != e.items.exeRightType ? e.items.exeRightType : "未公示"),
                    i += '</td></tr><tr><td class="table-left">行权日期</td><td>',
                    i = "" + i + (e.items.exeRightTime && "&nbsp;" != e.items.exeRightTime ? e.moment(parseInt(e.items.exeRightTime)).format("YYYY-MM-DD") : "未公示"),
                    i += '</td><td class="table-left">托管机构</td><td>',
                    i = "" + i + (e.items.escrowAgent && "&nbsp;" != e.items.escrowAgent ? e.items.escrowAgent : "未公示"),
                    i += '</td></tr><tr><td class="table-left">流通范围</td><td colspan="3">',
                    i = "" + i + (e.items.flowRange && "&nbsp;" != e.items.flowRange ? e.items.flowRange : "未公示"),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.browserinfo = a["browserinfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div><table class="table companyInfo-table"><thead><tr class="doctor-thead"><th colspan="2">以下是您机器相关信息</th></tr></thead><tbody><tr class="doctor-tcontent"><td width="15%">操作系统</td><td id=\'\'>',
                    i = "" + i + e.items.os_info,
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">浏览器</td><td id=\'\'>',
                    i = "" + i + e.items.browser_info,
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">用户代理</td><td id=\'\'>',
                    i = "" + i + e.items.useragent_info,
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">Flash 版本号</td><td id=\'\'>',
                    i = "" + i + e.items.flash_info,
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">Cookie 状态</td><td id=\'\'>',
                    i = "" + i + e.items.cookie_info,
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">Javascript 状态</td><td id=\'\'>',
                    i += e.items.js_info ? "开启(" + e.items.js_info + ")" : "关闭",
                    i += '</td></tr><tr class="doctor-tcontent"><td width="15%">LocalStorage 状态</td><td id=\'\'>',
                    i = "" + i + e.items.ls_info,
                    i += "</td></tr></tbody></table></div>",
                    i.trim()
            }
            ,
            a.certificate = a["certificate.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div class="popupHeader">证书信息</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table">',
                    e.items.detail.forEach(function (t) {
                        i += '<tr ><td class="table-left" width="28%">',
                            i = "" + i + e.checkData(t.title),
                            i += "</td><td >",
                            i = "" + i + e.checkData(t.content),
                            i += "</td></tr>"
                    }),
                    i += "</table></div>",
                    i.trim()
            }
            ,
            a.changeCheckType = a["changeCheckType.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup"><div class="modal-new-header"><div class="popupHeader">验证方式更换提示</div><div class="modal-new-close" style="" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="text-center new-c2 f14 pt20"><div class="pb4">无法获取短信验证码？选择语音验证，</div><div>我们将提供来电语音验证服务，请注意接听。</div><div class="check_btn mt25 point mb25 " onclick="getVoiceCode(',
                    i = i + (e.items.phone + ",'") + e.items.vertype + "'," + e.items.funtype + ",'" + e.items.currentstate + "'",
                    i += ');">语音验证</div></div></div>',
                    i.trim()
            }
            ,
            a.claimDetail = a["claimDetail.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div  class="popupHeader pr30">',
                    i = "" + i + e.title,
                    i += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 pl30 pr30 pt15 pb25 break-all" style="line-height: 24px;"><div class="text-center pb20"><img src="',
                    i = "" + i + e.imageSelf(e.img, "@!watermark_w550", "force"),
                    i += '" alt="" class="claim-detail-img"></div><p class="pl5 pr5">',
                    i = "" + i + e.detail,
                    i += "</p></div>",
                    i.trim()
            }
            ,
            a.claimDissent = a["claimDissent.ejs"] = function (t) {
                var e = "";
                return e += '<div class="position-rel"><div style="border-bottom: 1px solid #e0e0e0"><p class="text-center f16 pt16 c1">有异议</p><div class="position-abs claim_pop_close modal-new-close mt6" ng-click="cancel()"><i class="tic tic-close"></i></div></div><p class="mt10 text-center mb5 mt20 sec-c3">该企业已被认证 , 如有异议 ,</p><p class="text-center mb20 sec-c3">请联系客服 : 400-871-6266</p></div>',
                    e.trim()
            }
            ,
            a.claimErrorInfo = a["claimErrorInfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader">',
                    i += 0 == e.items.status ? "认证" : "编辑",
                    i += '失败原因</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n    class="tic tic-close"></i></div></div><div class="modal-body">',
                    e.list && e.list.length > 0 ? e.list.forEach(function (t, e) {
                        i = "" + i + (t || ""),
                            i += "<br>"
                    }) : (i += '<div class="info">',
                        i = "" + i + (e.items.causation ? e.items.causation : ""),
                        i += "</div>"),
                    i += '<div class="button-blue-lg re-claim-btn" onclick="reClaim(',
                    i = "" + i + e.items.status,
                    i += ",",
                    i = "" + i + e.items.companyId,
                    i += ');">重新',
                    i += 0 == e.items.status ? "认证" : "编辑",
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a.claimGate = a["claimGate.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="position-rel"><p class="text-center f16 pt16 c1">免费认证企业</p><div class="position-abs claim_pop_close modal-new-close" ng-click="cancel()"><i class="tic tic-close"></i></div><div class="claim_pop_body1"><p class="text-center f18 pt32 c1">免费完成认证后，即可编辑/添加该信息模块</p><a class="button-blue-lg in-block claim_gate_button_a claim_gate_pop_button" onclick="claimCompany(',
                    i = "" + i + e.companyId,
                    i += ')" target="_blank">免费认证该企业</a></div><p class="text-center f18 pt20 c1">认证后有什么好处 ?</p><div class="claim_pop_body2 mt20"><div class="claim_pop_item new-border"><div class="claim_pop_item_icon text-center"><i class="tic tic-claim-setting in-block c9"></i></div><p class="text-center f14 c1">企业信息自主管理</p><p class="text-center f14 c3 pl16 pr16">编辑完善企业信息，修改企业联系方式</p></div><div class="claim_pop_item new-border"><div class="claim_pop_item_icon text-center"><i class="tic tic-claim-note in-block c9"></i></div><p class="text-center f14 c1">自主上传企业优势信息</p><p class="text-center f14 c3 pl16 pr16">自主上传产品/业务、资质证书、团队成员信息</p></div><div class="claim_pop_item new-border"><div class="claim_pop_item_icon text-center"><i class="tic tic-claim-increase in-block c9"></i></div><p class="text-center f14 c1">提升信誉度</p><p class="text-center f14 c3 pl16 pr16">专属的已认领企业标志，提升信誉度</p></div><div class="claim_pop_item new-border"><div class="claim_pop_item_icon text-center"><i class="tic tic-claim-trumpet in-block c9"></i></div><p class="text-center f14 c1">官方免费企业推广</p><p class="text-center f14 c3 pl16 pr16">免费广告位，认领企业专属推广，提升业务量</p></div></div><p class="text-center f18 pt20 c1">如何认证 ?</p><div class="claim_pop_body3 mt20"><div class="claim_pop_item2 claim_gate_flow_select claim_item2_first position-rel float-left"><span class="f16 text-center position-abs claim_pop_span c-white">选择企业</span></div><div class="tic tic-claim-next float-left f20 mt40 c9"></div><div class="claim_pop_item2 claim_gate_flow_unselect position-rel float-left"><span class="f16 text-center position-abs claim_pop_span c1">认证申请</span></div><div class="tic tic-claim-next float-left f20 mt40 c9"></div><div class="claim_pop_item3 claim_gate_flow_end position-rel float-left"><span class="f16 text-center position-abs claim_pop_span2 c1">认证成功</span></div></div><a class="button-blue-lg in-block claim_gate_button_a claim_gate_pop_button" onclick="claimCompany(',
                    i = "" + i + e.companyId,
                    i += ')" target="_blank">免费认证该企业</a><div class="mb40 mt20"></div></div>',
                    i.trim()
            }
            ,
            a.claimdemo = a["claimdemo.ejs"] = function (t) {
                var e = "";
                return e += '<div><div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n        class="tic tic-close"></i></div><div class="popupHeader">图片示例</div></div><div class="modal-body text-center sec-c2 pb50"><div class="in-block pr30 pt20"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/claim-pop-card.png" alt=""><div class=\'pt15\'>营业执照</div></div><div class="in-block pt20"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/claim-pop-idcard.png" alt=""><div class="pt15">身份证照片</div></div></div></div>',
                    e.trim()
            }
            ,
            a.comDetail = a["comDetail.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div  class="popupHeader">企业简介</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 pl30 pr30 pt20" style="line-height: 28px;"><p>',
                    i = "" + i + e.items,
                    i += "</p></div>",
                    i.trim()
            }
            ,
            a.comfirmMsg = a["comfirmMsg.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="" ><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">提示</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c2 f20"><div class="pt20 pb40 clearfix text-center ">',
                    i = "" + i + e.title,
                    i += '</div><div class="text-center pb15"><div class="button-blue-lg in-block w180 " onclick="common.closePopup()">确定</div></div></div></div>',
                    i.trim()
            }
            ,
            a.complaintContent = a["complaintContent.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header complaintHeader"><div style=" width: 100%; text-align: center;;"><span class="complaintTitle">投诉</span><div style="position: absolute;right: 15px;top:13px;cursor: pointer;" onclick="footer.complain.cancel()"><img alt="."  class="bottom-banner-close" alt="close" src="https://static.tianyancha.com/wap/images/complainr_cross.png"></div></div></div><div class="modal-body complaintBody"><div class="complaintItem complaintItemread collapse in" ><h4>',
                    i = "" + i + e.items.read.title,
                    i += '</h4><img class=\'complaintImg1\' src="https://static.tianyancha.com/wap/images/complaint_modal_hr.png"  alt="投诉"/><div class="complaintbox" id="readbox">',
                    i = "" + i + e.items.read.inner,
                    i += '</div><div><button  type="button" onclick="footer.complain.changeState(\'info\')" class="complaintItemBtn disabled" >',
                    i = "" + i + footer.complain.btnContent,
                    i += '</button></div></div><div class="complaintItem collapse complaintIteminfo" ><h4>',
                    i = "" + i + e.items.info.title,
                    i += '</h4><img class=\'complaintImg1\' src="https://static.tianyancha.com/wap/images/complaint_modal_hr.png"  alt="投诉"/><div class=""><form><div class="apptrial-group"><div class="trail-left"><img alt="."  src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;"><label for="contactfirm">公司名称:</label></div><div class="trail-right" ><input  onfocus=\'footer.complain.focusinput("contactfirm")\' onblur=\'footer.complain.blurinput("contactfirm")\' type="text" id="contactfirm" class="apptrial-control" name="firmname" placeholder="请输入公司名称" /><div  class="trial-alert-error  text-left collapse contactfirm">公司名称不能为空</div></div></div><div class="apptrial-group" style=\'min-height: 230px;\'><div class="trail-left"><img alt="."  src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;"><label for="contactcontent">投诉内容：</label></div><div class="trail-right" ><textarea col="5" row=\'3\' onfocus=\'footer.complain.focusinput("contactcontent")\' onblur=\'footer.complain.blurinput("contactcontent")\' id="contactcontent" name="Compliant"  placeholder="请输入投诉内容" class="apptrial-textarea"></textarea><div class="trial-alert-error  text-left collapse contactcontent">投诉内容不能为空</div></div></div><div class="apptrial-group"><div class="trail-left">\x3c!--<img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;">--\x3e<label for="contactuserinput">联系人:</label></div><div class="trail-right" ><input type="text" id="contactuserinput" class="apptrial-control" name="userinput" placeholder="请输入联系人姓名" />\x3c!--<div  class="trial-alert-error  text-left">联系人不能为空</div>--\x3e</div></div><div class="apptrial-group"><div class="trail-left">\x3c!--<img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;">--\x3e<label for="contactuserphone">联系电话：</label></div><div class="trail-right"><input type="text" id="contactuserphone" name="userphone" class="apptrial-control" placeholder="请输入联系电话" />\x3c!--<div  class="trial-alert-error  text-left">联系电话不能为空</div>--\x3e</div></div><div class="apptrial-group"><div class="trail-left"><img alt="."  src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;"><label for="contactemail">电子邮箱:</label></div><div class="trail-right" ><input  onfocus=\'footer.complain.focusinput("contactemail")\' onblur=\'footer.complain.blurinput("contactemail")\' type="text" id="contactemail" class="apptrial-control" name="usermail" placeholder="请输入电子邮箱" /><div class="trial-alert-error  text-left collapse contactemail">电子邮箱不能为空</div><div class="trial-alert-error  text-left collapse contactemailerr">电子邮箱格式错误</div></div></div><div class="apptrial-group"><div class="trail-left">\x3c!-- <img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/apptrial_info_icon1.png" style="margin-top: 15px;">--\x3e<label for="contactuseraddress">联系地址:</label></div><div class="trail-right" ><input type="text" id="contactuseraddress" class="apptrial-control" name="useraddress" placeholder="请输入联系人姓名" />\x3c!-- <div  class="trial-alert-error text-left">联系地址不能为空</div>--\x3e</div></div></form></div><div><button  type="button" onclick="footer.complain.submitAll()">下一步</button></div></div><div class="complaintItem collapse complaintItemfeedback" ><h4>',
                    i = "" + i + e.items.feedback.title,
                    i += '</h4><img class=\'complaintImg1\' src="https://static.tianyancha.com/wap/images/complaint_modal_hr.png"  alt="投诉"/><div class="complaintbox">',
                    i = "" + i + e.items.feedback.inner,
                    i += '</div><div><button  type="button" onclick="footer.complain.cancel()">完成</button></div></div></div>',
                    i.trim()
            }
            ,
            a.concerntaglist = a["concerntaglist.ejs"] = function (t) {
                var e = t
                    , i = "";
                i += '<div class="" >';
                var s, a = e.tags ? e.tags : "0";
                if (e.groupItem)
                    var n = e.groupItem;
                return i += '<a class="concern-group point ',
                    i += "0" == a ? "active" : "",
                    i += '" ng-class="{active:activeGroupConcern==\'0\'}" onclick="changeActiveGroupConcern(\'0\',this)">全部<input class="_group_id" type="hidden" value="0"></a>',
                    n.data && n.data.length && n.data.forEach(function (t) {
                        "默认分组" == t.tag && (s = t.id),
                            i += '<a class="concern-group point ',
                            i += a == t.id ? "active" : "",
                            i += '" ng-repeat=\'group in groupItem | orderBy :"id"\' ng-class="{active:activeGroupConcern==group.id}" onclick="changeActiveGroupConcern(',
                            i = "" + i + t.id,
                            i += ',this)">',
                            i = "" + i + t.tag,
                            i += "<span >",
                            i = i + "（" + t.count + "）",
                            i += '</span><input class="_group_id" type="hidden" value="',
                            i = "" + i + t.id,
                            i += '"></a>'
                    }),
                    i += '<input type=\'hidden\' class="_group_defaultid"  value="',
                    i = "" + i + s,
                    i += '"/></div>',
                    i.trim()
            }
            ,
            a.confirmDeleteProduct = a["confirmDeleteProduct.ejs"] = function (t) {
                var e = "";
                return e += '<div class="focusBox\n\n\n                      focusBox_cancel\n                      "><div class="modal-new-close" style="" ng-click="cancel()"><i class="tic tic-close"></i></div><div class="modal-new-header"><div class="popupHeader">删除</div></div><div class="modal-body pl30 pr30 sec-c2 "><div class="pt20 pb25 clearfix text-center f26"><div class="in-block text-left vertical-middle"><div class="sec-c1">确认删除?</div></div></div><div class="text-center pb15"><div class="cancel_btn mr20 button-disabled-bg" ng-click="cancel()">取消</div><div class="cancel_btn button-blue-md" onclick="confirmDeleteProduct();">确定</div></div></div></div>',
                    e.trim()
            }
            ,
            a.copyRight = a["copyRight.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div class="popupHeader">著作人详情信息</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="15%" >软件全称</td><td width="85%" colspan="3">',
                    i = "" + i + e.checkData(e.items.fullname),
                    i += '</td></tr><tr><td class="table-left" width="15%">软件简称</td><td width="35%">',
                    i = "" + i + e.checkData(e.items.simplename),
                    i += '</td><td class="table-left" width="15%">登记号</td><td width="35%">',
                    i = "" + i + e.checkData(e.items.regnum),
                    i += '</td></tr><tr><td class="table-left">分类号</td><td>',
                    i = "" + i + e.checkData(e.items.catnum),
                    i += '</td><td class="table-left">版本号</td><td>',
                    i = "" + i + e.checkData(e.items.version),
                    i += '</td></tr><tr><td class="table-left">著作权人(国籍)</td><td colspan="3">',
                    i = "" + i + e.checkData(e.items.authorNationality),
                    i += '</td></tr><tr><td class="table-left">首次发表日期</td><td >',
                    i = "" + i + e.dateFormat(e.items.publishtime, "", "int"),
                    i += '</td><td class="table-left">登记日期</td><td>',
                    i = "" + i + e.dateFormat(e.items.regtime, "", "int"),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.court = a["court.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div ><div class="popupHeader">法院公告</div></div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table">',
                    e.items.publishdate && (i += '<tr ><td class="table-left" width="28%">发布日期</td><td>',
                        i = "" + i + e.strFilter(e.items.publishdate),
                        i += "</td></tr>"),
                    i += '<tr ><td class="table-left">上诉方：</td><td >',
                    i = "" + i + e.strFilter(e.items.party1),
                    i += '</td></tr><tr ><td class="table-left">被诉方：</td><td>',
                    i = "" + i + e.strFilter(e.items.party2),
                    i += '</td></tr><tr ><td class="table-left">公告类型：</td><td>',
                    i = "" + i + e.strFilter(e.items.bltntypename),
                    i += '</td></tr><tr ><td class="table-left">法院：</td><td>',
                    i = "" + i + e.strFilter(e.items.courtcode),
                    i += '</td></tr><tr ><td class="table-left">公告内容：</td><td>',
                    i = "" + i + e.strFilter(e.items.content),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.deepSearchFilter = a["deepSearchFilter.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div  class="modal-content noResult_popup"><div class="modal-header"><button type="button" class="close" data-dismiss="modal" ng-click="cancel()"><span >×</span><span class="sr-only">x</span></button><img style="margin-left:auto;margin-right:auto;display:block;" src="https://static.tianyancha.com/wap/images/noresult_title.png"/><div class="modal-title" ><i class="tic tic-map-marker"></i>当前识别区域：<span class="specify-prov" id="currentCity">',
                    i = "" + i + (e.items.city ? e.items.city : "无"),
                    i += '</span><span style="display: none" id="baseCode">',
                    i = "" + i + e.items.baseCode,
                    i += '</span></div></div><div class="modal-body" style="padding:0 15px 10px;"><ul class="map"><li>国家<span>|</span><a href="javascript:void(0)" onclick="provName(\'GJ\',\'总局\')" name="总局">总局</a></li><li>华北<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'BJ\',\'北京\')" name="北京">北京</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'TJ\',\'天津\')" name="天津">天津</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'HEB\',\'河北\')" name="河北">河北</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'SX\',\'山西\')" name="山西">山西</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'NMG\',\'内蒙古\')" name="内蒙古">内蒙古</a></li><li>东北<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'LN\',\'辽宁\')" name="辽宁">辽宁</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'JL\',\'吉林\')" name="吉林">吉林</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'HLJ\',\'黑龙江\')" name="黑龙江">黑龙江</a></li><li>华东<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'SH\',\'上海\')" name="上海">上海</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'JS\',\'江苏\')" name="江苏">江苏</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'ZJ\',\'浙江\')" name="浙江">浙江</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'AH\',\'安徽\')" name="安徽">安徽</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'FJ\',\'福建\')" name="福建">福建</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'JX\',\'江西\')" name="江西">江西</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'SD\',\'山东\')" name="山东" >山东</a></li><li>华南<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'GD\',\'广东\')" name="广东">广东</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'GX\',\'广西\')" name="广西">广西</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'HAN\',\'海南\')" name="海南">海南</a></li><li>华中<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'HEN\',\'河南\')" name="河南">河南</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'HUB\',\'湖北\')" name="湖北">湖北</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'HUN\',\'湖南\')" name="湖南">湖南</a></li><li>西南<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'CQ\',\'重庆\')" name="重庆">重庆</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'SC\',\'四川\')" name="四川">四川</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'GZ\',\'贵州\')" name="贵州">贵州</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'YN\',\'云南\')" name="云南">云南</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'XZ\',\'西藏\')" name="西藏">西藏</a></li><li>西北<span>|</span><a class="pr8" href="javascript:void(0)" onclick="provName(\'SNX\',\'陕西\')" name="陕西">陕西</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'GS\',\'甘肃\')" name="甘肃">甘肃</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'QH\',\'青海\')" name="青海">青海</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'NX\',\'宁夏\')" name="宁夏">宁夏</a><a class="pr8" href="javascript:void(0)" onclick="provName(\'XJ\',\'新疆\')" name="新疆">新疆</a></li></ul></div><div class="modal-footer text-center" id="submmitBtn"><div class="button_ok cursor-pointer" onclick="buttonSelect()">确定</div></div></div>',
                    i.trim()
            }
            ,
            a.delComfirm = a["delComfirm.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="" ><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">删除成员</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c2 "><div class="pt20 pb40 clearfix text-center f26"><i class="tic tic-alert c9 mr10"></i>确认删除&nbsp;？</div><div class="text-center pb15"><div class="new-button-sm b-c-disabled lh30 c-white in-block w140 mr6" onclick="closePopup()">取消</div><div class="button-yel-sm in-block lh30 w140 ml6" onclick="',
                    i = "" + i + e.onChange,
                    i += '">确定</div></div></div></div>',
                    i.trim()
            }
            ,
            a.dishonest = a["dishonest.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">失信人详情</div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr ><td class="table-left" width="28%">名称</td><td>',
                    i = "" + i + e.strFilter(e.items.iname),
                    i += '</td></tr><tr ><td class="table-left">法定代表人</td><td>',
                    i = "" + i + e.strFilter(e.items.businessentity),
                    i += '</td></tr><tr ><td class="table-left">身份证号／组织机构代码</td><td>',
                    i = "" + i + e.strFilter(e.items.cardnum),
                    i += '</td></tr><tr ><td class="table-left">执行依据文号</td><td>',
                    i = "" + i + e.strFilter(e.items.gistid),
                    i += '</td></tr><tr ><td class="table-left">案号</td><td>',
                    i = "" + i + e.strFilter(e.items.casecode),
                    i += '</td></tr><tr ><td class="table-left">做出执行依据单位</td><td>',
                    i = "" + i + e.strFilter(e.items.gistunit),
                    i += '</td></tr><tr ><td class="table-left">法律生效文书确定的义务</td><td>',
                    i = "" + i + e.strFilter(e.items.duty),
                    i += '</td></tr><tr ><td class="table-left">被执行人的履行情况</td><td>',
                    i = "" + i + e.strFilter(e.items.performance),
                    i += '</td></tr><tr ><td class="table-left">执行法院</td><td>',
                    i = "" + i + e.strFilter(e.items.courtname),
                    i += '</td></tr><tr ><td class="table-left">省份</td><td>',
                    i = "" + i + e.strFilter(e.items.areaname),
                    i += '</td></tr><tr ><td class="table-left">立案时间</td><td>',
                    i = "" + i + e.dateFormat(e.items.regdate, "", "int"),
                    i += '</td></tr><tr ><td class="table-left">发布时间</td><td>',
                    i = "" + i + e.dateFormat(e.items.publishdate, "", "int"),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.equity = a["equity.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">股权出质</div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="28%">登记日：</td><td>',
                    i = "" + i + e.dateFormat(e.items.regDate, "", "int"),
                    i += '</td></tr><tr><td class="table-left">登记编号：</td><td>',
                    i = "" + i + e.strFilter(e.items.regNumber),
                    i += '</td></tr><tr><td class="table-left">状态：</td><td>',
                    i = "" + i + e.strFilter(e.items.state),
                    i += '</td></tr><tr><td class="table-left">出质股权数额：</td><td>',
                    i = "" + i + e.strFilter(e.items.equityAmount),
                    i += '</td></tr><tr><td class="table-left">出质人：</td><td>',
                    i = "" + i + e.strFilter(e.items.pledgorStr || e.items.pledgee),
                    i += '</td></tr><tr><td class="table-left">出质人证件号码：</td><td>',
                    i = "" + i + e.strFilter(e.items.certifNumber, "未公示"),
                    i += '</td></tr><tr><td class="table-left">质权人：</td><td>',
                    i = "" + i + e.strFilter(e.items.pledgeeStr || e.items.pledgor),
                    i += '</td></tr><tr><td class="table-left">质权人号码：</td><td>',
                    i = "" + i + e.strFilter(e.items.certifNumberR, "未公示"),
                    i += '</td></tr><tr><td class="table-left">备注：</td><td>所报材料真实合法，一切责任由当事人自负。</td></tr></table></div>',
                    i.trim()
            }
            ,
            a.equitydetail = a["equitydetail.ejs"] = function (t) {
                var e = t
                    , i = "";
                return e.detail && (i += '<div class="equity-scroll"><span class="modal-close-btn" onclick="equity.close()"><i class="tic tic-close"></i></span><div class="intro-head-g1 ">公司信息<img class="three-ponit" alt="."\n                                        src="https://static.tianyancha.com/wap/images/three-point.png"></div><div class="modal-c pt10"><a href="',
                    i = "" + i + e.serverDomain,
                    i += "/company/",
                    i = "" + i + e.modelCid,
                    i += '" target="_blank">',
                    i = "" + i + e.modelCname,
                    i += "</a></div>",
                    e.detail.baseInfo && (i += '<div class="equity-company-basic sec-c3" ><div class="pt12 " >法定代表人：',
                        "C" == e.detail.baseInfo.type && e.detail.baseInfo.legalPersonId ? (i += '<a class="c9"  target="_blank" href="/company/',
                            i = "" + i + e.detail.baseInfo.legalPersonId,
                            i += '">',
                            i = "" + i + (e.detail.baseInfo.legal_person_name ? e.detail.baseInfo.legal_person_name : "—"),
                            i += "</a>") : "H" == e.detail.baseInfo.type && e.detail.baseInfo.legalPersonId ? (i += '<a class="c9"  target="_blank" href="/human/',
                                i = i + (e.detail.baseInfo.legalPersonId + "-c") + e.detail.baseInfo.id,
                                i += '">',
                                i = "" + i + (e.detail.baseInfo.legal_person_name ? e.detail.baseInfo.legal_person_name : "—"),
                                i += "</a>") : (i += '<span class="sec-c2">',
                                    i = "" + i + (e.detail.baseInfo.legal_person_name ? e.detail.baseInfo.legal_person_name : "—"),
                                    i += "</span>"),
                        i += '</div><div class="pt12 " >经营状态：<span class="sec-c2">',
                        i = "" + i + (e.detail.baseInfo.regStatus ? e.detail.baseInfo.regStatus : "—"),
                        i += '</span></div><div class="pt12 " >注册资本：<span class="sec-c2">',
                        i = "" + i + (e.detail.baseInfo.reg_capital ? e.detail.baseInfo.reg_capital : "—"),
                        i += '</span></div><div class="pt12 " >成立日期：<span class="sec-c2">',
                        i = "" + i + (e.detail.baseInfo.estiblish_time ? e.moment(parseInt(e.detail.baseInfo.estiblish_time)).format("YYYY-MM-DD") : "—"),
                        i += "</span></div></div>"),
                    i += '<div id="equity-detail-content"><div class="equity-detail-content"><div class="table-h"><span class="active" ng-class="{\'active\':activetab==\'holder\'}" onclick="equity.changeActiveTab(\'holder\' ,this)">股东</span><span ng-class="{\'active\':activetab==\'invest\'}" onclick="equity.changeActiveTab(\'invest\' ,this)">对外投资</span><span ng-class="{\'active\':activetab==\'staff\'}" onclick="equity.changeActiveTab(\'staff\' ,this)">主要成员</span></div><div class="tab holder activetab collapse in" ng-if="activetab==\'holder\'">',
                    e.detail.holderList && e.detail.holderList.length ? (i += '<table class="table-bordered table" ng-if="detail.holderList&&detail.holderList.length"><thead><tr><td>企业名称 / 姓名</td><td>股比</td></tr></thead><tbody>',
                        e.detail.holderList.forEach(function (t, s) {
                            i += '<tr><td width="75%">',
                                "C" == t.type ? (i += '<a\n                 href="',
                                    i = "" + i + e.serverDomain,
                                    i += "/company/",
                                    i = "" + i + t.id,
                                    i += '"\n                 target="_blank">',
                                    i = "" + i + t.name,
                                    i += "</a>") : "H" == t.type && t.id && t.cid ? (i += '<a  target="_blank" href="',
                                        i = "" + i + e.serverDomain,
                                        i += "/human/",
                                        i = "" + i + t.id,
                                        i += "-c",
                                        i = "" + i + t.cid,
                                        i += '">',
                                        i = "" + i + t.name,
                                        i += "</a>") : (i += "<span >",
                                            i = "" + i + t.name,
                                            i += "</span>"),
                                i += '</td><td width="25%">',
                                i = "" + i + (t.percent ? t.percent : "—"),
                                i += "</td></tr>"
                        }),
                        i += "</tbody></table>") : e.detail.holderList && e.detail.holderList.length || (i += '<div ng-if="!detail.holderList||!detail.holderList.length" class="nodata">暂无信息</div>'),
                    i += '</div><div class="tab invest collapse" ng-if="activetab==\'invest\'">',
                    e.detail.inverstList && e.detail.inverstList.length ? (i += '<table class="table-bordered table" ng-if="detail.inverstList&&detail.inverstList.length"><thead><tr><td>企业名称</td><td>股比</td></tr></thead><tbody>',
                        e.detail.inverstList.forEach(function (t, s) {
                            i += '<tr ng-repeat="p in detail.inverstList"><td width="75%"><a href="',
                                i = "" + i + e.serverDomain,
                                i += "/company/",
                                i = "" + i + t.id,
                                i += '"\n                               target="_blank">',
                                i = "" + i + t.name,
                                i += '</a></td><td width="25%">',
                                i = "" + i + (t.percent ? t.percent : "—"),
                                i += "</td></tr>"
                        }),
                        i += "</tbody></table>") : e.detail.inverstList && e.detail.inverstList.length || (i += '<div ng-if="!detail.inverstList||!detail.inverstList.length" class="nodata">暂无信息</div>'),
                    i += '</div><div class="tab staff collapse" ng-if="activetab==\'staff\'">',
                    e.detail.staffList && e.detail.staffList.length ? (i += '<table class="table table-bordered" ng-if="detail.staffList&&detail.staffList.length"><thead><tr><td>姓名</td><td>职务</td></tr></thead><tbody>',
                        e.detail.staffList.forEach(function (t, s) {
                            i += '<tr ng-repeat="p in detail.staffList"><td width="75%">',
                                t.id ? (i += '<a  target="_blank" href="',
                                    i = "" + i + e.serverDomain,
                                    i += "/human/",
                                    i = "" + i + t.id,
                                    i += "-c",
                                    i = "" + i + e.detail.baseInfo.id,
                                    i += '">',
                                    i = "" + i + t.name,
                                    i += "</a>") : i = "" + i + t.name,
                                i += '</td><td width="25%">',
                                i = "" + i + (t.typeJoin[0] ? t.typeJoin[0] : "—"),
                                i += "</td></tr>"
                        }),
                        i += "</tbody></table>") : e.detail.staffList && e.detail.staffList.length || (i += '<div ng-if="!detail.staffList||!detail.staffList.length" class="nodata">暂无信息</div>'),
                    i += "</div></div></div></div>"),
                    i.trim()
            }
            ,
            a.equitylimit = a["equitylimit.ejs"] = function (e) {
                var i = e
                    , s = "";
                return s += '<div>\x3c!--<span class="modal-close-btn" ng-click="cancel()" style="z-index: 2000"><i class="tic tic-close"></i></span>--\x3e<div class="vipcontentHeader vipBgColor"><div style=" width: 100%; text-align: center;;" class="text-center f16 c-white"><span class="">成为VIP会员，查看股权结构图</span></div></div><div  class=\'equity-outer\' style="height: 600px;" ><div class="equityMaskBox pl35 pr35"><div>',
                    s = "" + s + function (e, i) {
                        return t(e, i)
                    }("vipequitymask", {
                        viptype: 2,
                        title: i.vipMessage ? i.vipMessage : "普通用户每天可查看2家公司，<em>VIP会员可无限查看</em>",
                        tyceventname: "CompanyDeatil.guquan.VIP"
                    }),
                    s += "</div></div></div></div>",
                    s.trim()
            }
            ,
            a.equitystructure = a["equitystructure.ejs"] = function (e) {
                var i = "";
                return i += '<div><div ng-show="!noResult" class=\'equity-outer\' style="height: 600px;" ng-style="equityDetailShow?{width: \'1000px\'}:{}"><span class="modal-close-btn" ng-click="cancel()" style="z-index: 2000"><i class="tic tic-close"></i></span><div class="f10 equity" ><div class="path position-rel"><div class="title">疑似实际股权控制路径</div><span class="fr"><img alt="."  src="https://static.tianyancha.com/dis/resources/images/suspect.png"/><span class="in-block vertical-middle">疑似实际控制人</span></span><div class="btn-pos"><span class=\'btn mr4\' onclick="equity.restore()"><i class="tic tic-repeat pr4"\n                                                                  aria-hidden="true"></i>还原</span><span class=\'btn\' onclick="equity.multifun(this)"><i class="tic tic-arrow-circle-o-down  pr4"\n                                                     ng-class=\'isCollapsed?"tic-arrow-circle-o-down":"tic-arrow-circle-o-up"\'></i><span class="btncontent">一键展开</span></span></div><div id="path"></div><div id="nopath">暂无该企业股比信息，<br>未能解析疑似实际股权路径</div><div class="tip user-bottom-border"><img\n          src="https://static.tianyancha.com/web-require-js/themes/18blue/images/logo_sm.png"\n          alt="."\n          style="vertical-align: middle;height:15px;" class="pr8">仅针对公开数据进行数据挖掘并展示相关结果，该结果仅作参考，因使用此数据信息产生的一切行为后果由行为人自然承担。</div></div><svg id="outersvg" class=""></svg><div style="position: absolute;bottom: -3px;box-sizing: border-box;padding: 0;width: 100%;background: rgba(255,255,255,.9);"><span style="font-size: 12px;color: #d5d5d5;padding: 5px;"><i\n                  style="line-height: 26px;display: inline-block;height: 20px;vertical-align: middle;">*</i>该信息由天眼查数据库分析得出，仅供参考，详情见页尾服务协议。</span><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/logo_sm.png"\n             alt="."\n             style="position: absolute;bottom: 5px;right:10px;width:78px;"></div></div><div id="gif-loading" ng-show="gifLoading"\n         style="position: absolute; height: 100%;  top: 0px;right:0px; left: 0px;right:0px; z-index: 100000; text-align: center;" class="f10"><div id="gif-loading-m"\n           style="background-color: rgb(255, 255, 255); position: absolute; height: 100%;  top: 0px;right:0px; left: 0px;right:0px;    z-index: -1;"></div><p class="middle-abs-all"><img class="gif-loading w100"\n                                     alt="."\n                                     style=""\n                                     src="https://c.tianyancha.com/wap/images/gif_loading2.gif"><span class="loadspan">正在逐级解析中...</span></p></div><div id="nodata"><img  alt="." src="https://static.tianyancha.com/dis/resources/images/nodata.png"></div><div class="js-dialog dialog equity-detail f14" style="" ng-class="{\'closing\':closing,\'show\':show}"\n         ng-if="show"><div id="equity-detail-content">',
                    i += '</div></div></div><div ng-if="noResult" class=\'hide equitynoresult\' style="width: 100%;background: #f7f8fa;" >',
                    i = "" + i + function (e, i) {
                        return t(e, i)
                    }("errorPage"),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a.errorPage = a["errorPage.ejs"] = function (t) {
                var e = "";
                return e += '<div class="errorpage text-center"><img src="https://static.tianyancha.com/wap/images/pagenotfound2.png" alt="."/><div class="mtft mbft f24" style="color:#e1e1e1;">很抱歉，您要访问的页面不存在</div><div style="width: 163px;color: #ffffff;border-radius: 3px;"\n       class="f16 ptten pbten text-center point b-c9 margin-auto" onclick="location.reload()"><i class="tic tic-repeat mr3" ></i>刷新试试</div><div class="f18 " style="margin-top: 40px;color: #e1e1e1;">——————<span style="color: #ababab;">联系我们</span>——————</div><div class="f14 mtten" style="color: #919191;">反馈问题并获取技术支持，请加“天眼查”QQ群：515982002</div></div>',
                    e.trim()
            }
            ,
            a.feedback = a["feedback.ejs"] = function (t) {
                var e = "";
                return e += '<div class="pl20 pr20 feedback_popup"><div class="modal-header"><span  class="close_btn_popup position-abs point" style="right: 8px;top: 8px;" ng-click="cancel()"></span><h4 class="modal-title text-center pt20">意见反馈</h4></div><div class="modal-body"><div class="form-group"><label class="control-label new-c3">请选择您要反馈的问题类型</label><span class="cred">*</span><span class="cred pl15 errType collapse" ng-if="errType">反馈的问题类型不能为空</span><div class="pt5"><div class="feedback-boxs in-block mr4  position-rel point text-center"\n             ng-class="{\'active_feedback\':activeCheck == \'数据纠错\'}"\n             onclick="backToTop.changeActiveCheck(\'数据纠错\',this)">数据纠错<div class="right_feedback position-abs"></div><i class="tic tic-duihao position-abs icon"></i></div><div class="feedback-boxs in-block mr4  position-rel point text-center"\n             ng-class="{\'active_feedback\':activeCheck == \'功能建议\'}"\n             onclick="backToTop.changeActiveCheck(\'功能建议\',this)">功能建议<div class="right_feedback position-abs"></div><i class="tic tic-duihao position-abs icon"></i></div><div class="feedback-boxs in-block mr4  position-rel point text-center"\n             ng-class="{\'active_feedback\':activeCheck == \'其他\'}"\n             onclick="backToTop.changeActiveCheck(\'其他\',this)">其他<div class="right_feedback position-abs"></div><i class="tic tic-duihao position-abs icon"></i></div></div></div><div class="form-group pt10"><label class="control-label new-c3">反馈内容</label><span class="cred">*</span><span class="cred pl15 errContent collapse" ng-if="errContent">反馈内容不能为空</span><textarea placeholder="写点东西吧，我们希望听到您的声音^_^" onfocus=\'backToTop.clearErr(".errContent")\' rows="4" class="form-control mt10 feedBackcontent" ng-model="feedBack.content"></textarea></div><div class="form-group pt10"><label class="control-label new-c3">联系方式</label><span class="cred">*</span><span class="cred pl15 errContact collapse" ng-if="errContact">联系方式不能为空</span><div class="pt5"><input type="text" placeholder="请留下联系方式，以便我们及时联系您" onfocus=\'backToTop.clearErr(".errContact")\' class="form-control feedBackemail" ng-model="feedBack.email"></div></div></div><div style="text-align:center" class="modal-footer"><div  class="check_btn_popup margin-auto text-center f18 point mt15 mb15 feedbacksubmitContent" onclick="backToTop.feedbackSubmit()">提交</div></div></div>',
                    e.trim()
            }
            ,
            a.feedbackCompany = a["feedbackCompany.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="feedback_body" style="position:relative;padding-top:30px;"><div class="feedback_title">',
                    i = "" + i + e.items.companyName,
                    i += '</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;z-index:1000;" ng-click="cancel()"><i class="tic tic-close"></i></div><div class="feedback"><div class="title">1、我有话说<span class="cred">*</span><span class="cred pl15 errContent collapse" ng-if="errContent">反馈内容不能为空</span></div><textarea ng-model="content"  style="background-color:white;" maxlength="160" class="feedbackCompanycontent" onfocus=\'backToTop.clearErr(".errContent")\'></textarea><div class="title">2、请留下您的信息，以便我们及时反馈（选填）</div><div class="phone"><span>联系方式</span><input type="text"  ng-model="phone" class="feedbackCompanyphone"/></div><div class="name"><span>姓名</span><input type="text"  ng-model="name" class="feedbackCompanyname"/></div><div onclick="feedbackSubmit();" class="text-center" style="margin-top: 40px; margin-bottom:40px; width:100%;"><div class="submit_btn text-center">提交</div></div></div></div>',
                    i.trim()
            }
            ,
            a.focusCompany = a["focusCompany.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="focusBox\n                      ',
                    s += "loginSuccessFocus" == i.items.focus || "loginSuccessListen" == i.items.focus ? "focusBox_success" : "",
                    s += "\n                      ",
                    s += "loginLargeListen2" == i.items.focus || "loginLargeListen5" == i.items.focus || "loginLargeListen6" == i.items.focus ? "focusBox_alert" : "",
                    s += "\n                      ",
                    s += "loginCancelFocus" == i.items.focus || "loginCancelListen" == i.items.focus || "loginComfirmlListen" == i.items.focus || "delGroup" == i.items.focus ? "focusBox_cancel" : "",
                    s += "\n                      ",
                    s += "loginFocusGroup" == i.items.focus || "moveFocusGroup" == i.items.focus ? "focusBox_cancel" : "",
                    s += '">',
                    "newGroup" != i.items.focus && (s += '<div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close" ></i></div>'),
                    "loginCancelFocus" == i.items.focus && (s += '<div class="modal-new-header"><div class="popupHeader">移除关注</div></div><div class="modal-body pl30 pr30 sec-c2 "><div class="pt20 pb25 clearfix text-center f26"><i class="tic tic-tankuang focus_alert_icon"></i><div class="in-block"><div class="sec-c1" >确定移除?</div><div class="sec-c3 f14 lh-1em">同时也将移除监控</div></div></div><div class="text-center pb15"><div class="cancel_btn mr20 button-disabled-bg" onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md " onclick="follow.cancelFocus(1',
                        s += i.items.id ? "," + i.items.id : "",
                        s += ');">确定</div></div></div>'),
                    "loginCancelListen" == i.items.focus && (s += '<div class="modal-new-header"><div class="popupHeader">移除监控</div></div><div class="modal-body pl30 pr30 sec-c2 "><div class="pt20 pb25 clearfix text-center "><i class="tic tic-tankuang1 focus_alert_icon vertical-middle"></i><div class="in-block vertical-middle"><div class="sec-c1 focus_alert_title" >确定移除?</div></div></div><div class="text-center pb15"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.cancelFocus(2',
                        s += i.items.id ? "," + i.items.id : "",
                        s += ');">确定</div></div></div>'),
                    "loginComfirmlListen" == i.items.focus && (s += '<div class="modal-new-header"><div class="popupHeader">加入监控</div></div><div class="modal-body pl30 pr30 sec-c2 "><div class="pt20 pb25 clearfix text-center f30"><i class="tic tic-eye focus_alert_icon vertical-middle"></i><div class="in-block vertical-middle"><div class="sec-c1 focus_alert_title" >确定加入?</div></div></div><div class="text-center pb15"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.addFocus(2',
                        s += i.items.id ? "," + i.items.id : "",
                        s += ');">确定</div></div></div>'),
                    "loginFocusGroup" == i.items.focus && (s += '<div class="focus_group f14" ><div class=\'in-block\' style="width: 368px;"><div class="modal-new-header"><div class="popupHeader">选择分组</div></div><div class="modal-body pl30 pr30 sec-c2"><div class="w300 pb10 margin-auto"><div class="button-blue-bd-sm in-block" onclick="follow.addGroup();">新建分组</div></div><div class="group_content new-border mt10">',
                        s = "" + s + a("groupItem", {
                            items: i.items
                        }),
                        s += '</div><div class="text-center pb15 pt20"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.focusOK(\'',
                        s = "" + s + i.items.GroupType,
                        s += '\');">确定</div></div></div></div><div  class="in-block vertical-top mt60 ml30 group_add hide" style="width: 345px;height: 195px;background-color: #fff;"><div class="modal-new-header"><div class="popupHeader">新建分组</div></div><div class="mt30 mb20 margin-auto" style="width: 300px;"><input type="text" class="_input input_nor followgroupName"\n               placeholder="请输入1-15个字符" ng-model="groupName" onfocus="common.mouseHideBySelElem(\'.follownewGroupError\')"/><div class=" new-err follownewGroupError collapse" style="" ></div></div><div class="c-white text-center"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.addGroupBtn(1);">取消</div><div class="cancel_btn button-blue-md" onclick="follow.addGroupBtn(2,this);">确定</div></div></div></div>'),
                    "moveFocusGroup" == i.items.focus && (s += '<div class="modal-new-header"><div class="popupHeader">选择分组</div></div><div class="modal-body pl30 pr30 sec-c2 focus_group"><div class="group_content new-border mt10">',
                        s = "" + s + a("groupItem", {
                            items: i.items
                        }),
                        s += '</div><div class="text-center pb15 pt20"><div class="cancel_btn mr20 button-disabled-bg" onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.moveConfirmFocus(\'',
                        s = "" + s + i.items.id,
                        s += "');\">确定</div></div></div>"),
                    "newGroup" == i.items.focus && (s += '<div class="group_add" style="height: 195px;" ><div class="modal-new-header"><div class="popupHeader">新建分组</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n          class="tic tic-close"></i></div></div><div class="mt30 mb20 margin-auto" style="width: 300px;"><input type="text" class="_input input_nor followgroupName"\n             placeholder="请输入1-15个字符" ng-model="$parent.groupName" onfocus="common.mouseHideBySelElem(\'.follownewGroupError\')"/><div class="new-err follownewGroupError collapse" ></div></div><div class="c-white text-center"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.checkInput(1,\'',
                        s = "" + s + i.items.id,
                        s += "');\">确定</div></div></div>"),
                    "editGroup" == i.items.focus && (s += '<div class="group_add" style="height: 195px;" ><div class="modal-new-header"><div class="popupHeader">修改分组</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n          class="tic tic-close"></i></div></div><div class="mt30 mb20 margin-auto" style="width: 300px;"><input type="text" class="_input input_nor followgroupName"\n             placeholder="请输入1-15个字符" ng-model="$parent.groupName" onfocus="common.mouseHideBySelElem(\'.follownewGroupError\')"/><div class="new-err follownewGroupError collapse" ></div></div><div class="c-white text-center"><div class="cancel_btn mr20 button-disabled-bg" onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md  " onclick="follow.checkInput(2,\'',
                        s = "" + s + i.items.id,
                        s += "');\">确定</div></div></div>"),
                    "delGroup" == i.items.focus && (s += '<div class="modal-new-header"><div class="popupHeader">删除分组</div></div><div class="modal-body pl30 pr30 sec-c2 "><div class="pt20 pb25 clearfix text-center f26"><i class="tic tic-trash-o focus_alert_icon vertical-middle"></i><div class="in-block text-left vertical-middle"><div class="sec-c1" >确认删除?</div><div class="sec-c3 f14 lh-1em"><div>删除该分组后,</div><div class="pt5">组内企业将移至默认分组中</div></div></div></div><div class="text-center pb15"><div class="cancel_btn mr20 button-disabled-bg"  onclick="follow.cancel();">取消</div><div class="cancel_btn button-blue-md" onclick="follow.confirmDelFocus(\'',
                        s = "" + s + i.items.id,
                        s += "');\">确定</div></div></div>"),
                    "loginLargeListen5" == i.items.focus && (s += '<div class="pt60 f14 new-c2"><div style="width: 270px; line-height: 30px;" class="text-center margin-auto">已超过监控企业数量上限，最多监控<span style="color: #ee2a38;">10</span>家， 可前往监控列表进行调整。</div><div class="mt40  text-center"><a  href=\'/usercenter/concern/2\' style="" class="in-block pb2 c9 border-blue-bottom" onclick="follow.cancel();">前往监控列表</a></div></div>'),
                    "loginLargeListen6" == i.items.focus && (s += '<div class="pt60 f14 new-c2"><div style="width: 270px; line-height: 30px;" class="text-center margin-auto">已超过监控企业数量上限，最多监控<span class="new-err">50</span>家， 可前往监控列表进行调整。</div><div class="mt40  text-center"><a  href=\'/usercenter/concern/2\' class="in-block pb2 new-c9 border-blue-bottom" onclick="follow.cancel();">前往监控列表</a></div></div>'),
                    "loginLargeListen2" == i.items.focus && (s += '<div class="pt60 f14 new-c2"><div style="width: 270px; line-height: 30px;" class="text-center margin-auto">普通会员最多可监控<span class="new-err">2</span>家企业</br>成为VIP会员之后可监控<span class="new-err">10</span>家企业</div><div class="mt50 text-center mb50" onclick="follow.cancel()"><a href-new-event event-name="监控成为VIP" is-need-state=\'true\' class="button-blue-lg tobeVIP in-block" href="/vipintro" target="_blank">立即成为VIP</a></div><div class="mt30 mb30 text-center"><a  class="in-block pb2 new-c9 border-blue-bottom" href=\'/usercenter/concern/2\' onclick="follow.cancel();">前往监控列表</a></div></div>'),
                    "unloginEquity" == i.items.focus && (s += '<div><table class="table companyInfo-table text-center f14" style="margin-top: 0px;margin-bottom: 0px"><thead><tr style="height: 40px;"><td width="100%" style="background-color: #fff1e6;border-color:#ffe3ce !important;" class="vipColor">股权结构图</td></tr></thead><tbody><tr style="height: 40px;" class="f14"><td><div class="company_stock_box1 point" onclick="haveEquityPermissionById()"><img onerror="this.src=\'https://static.tianyancha.com/wap/images/equitydef.png\'" src="',
                        s = "" + s + (i.items.equityUrl ? i.items.equityUrl : "https://static.tianyancha.com/wap/images/equitydef.png"),
                        s += '" alt="股权结构图"></div><div><div class=" c-white pl15 pr15 pt5 pb5 in-block mt15 mb20 point vipBtnBgColor" onclick="follow.closeModal(\'login\',\'equity\');" tyc-event-click tyc-event-ch="CompanyDeatil.guquan.Login">登录查看</div></div></td></tr></tbody></table></div>'),
                    s += "</div>",
                    s.trim()
            }
            ,
            a.goudiPage = a["goudiPage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader"><a href="',
                    i = "" + i + e.items.linkUrl,
                    i += '" target="_blank" class="sec-c1">土地购地情况信息</a></div></div><div class="modal-body"><div class=""><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td width="15%" class="table-left"><div>行政区</div></td><td width="35%"><div>',
                    i = "" + i + e.checkData(e.items.adminRegion),
                    i += '</div></td><td width="18%" class="table-left"><div>电子监管号</div></td><td width="32%"><div>',
                    i = "" + i + e.checkData(e.items.elecSupervisorNo),
                    i += '</div></td></tr><tr><td class="table-left"><div>签订日期</div></td><td><div>',
                    i = "" + i + (e.items.signedDate ? e.initTime(e.items.signedDate) : ""),
                    i += '</div></td><td class="table-left"><div>供地总面积（公顷）</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.totalArea),
                    i += '</div></td></tr><tr><td class="table-left"><div>宗地位置</div></td><td  colspan="3"><div>',
                    i = "" + i + e.checkData(e.items.location),
                    i += '</div></td></tr><tr><td class="table-left"><div>受让人</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.assignee),
                    i += '</div></td><td class="table-left"><div>上级公司</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.parentCompany),
                    i += '</div></td></tr><tr><td class="table-left"><div>土地用途</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.purpose),
                    i += '</div></td><td class="table-left"><div>供应方式</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.supplyWay),
                    i += '</div></td></tr><tr><td class="table-left"><div>最小容积率</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.minVolume),
                    i += '</div></td><td class="table-left"><div>最大容积率</div></td><td><div>',
                    i = "" + i + e.checkData(e.items.maxVolume),
                    i += '</div></td></tr><tr><td class="table-left"><div>成交价款（万元）</div></td><td colspan="3"><div colspan="3">',
                    i = "" + i + e.checkData(e.items.dealPrice),
                    i += '</div></td></tr><tr><td class="table-left"><div>约定动工时间</div></td><td><div>',
                    i = "" + i + (e.items.startTime ? e.initTime(e.items.startTime) : ""),
                    i += '</div></td><td class="table-left"><div>约定竣工时间</div></td><td><div>',
                    i = "" + i + (e.items.endTime ? e.initTime(e.items.endTime) : ""),
                    i += "</div></td></tr></table></div></div>",
                    i.trim()
            }
            ,
            a.groupItem = a["groupItem.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    e.items.groupItem && e.items.groupItem.length && e.items.groupItem.forEach(function (t, e) {
                        i += '<div class="group_item over-hide p10 point ',
                            i += 0 == e ? "active" : "",
                            i += '"  onclick="follow.selectGroup(this);"><input type="hidden" value="',
                            i = "" + i + t.id,
                            i += '" class="followgroupid"><span class="float-left group-text ">',
                            i = "" + i + t.tag,
                            i += '</span><span class="float-right group_circle mr8 mt4" ><span class="',
                            i += 0 == e ? "group_circle_small" : "",
                            i += ' check-circle" ></span></span></div>'
                    }),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.h5moneyrule = a["h5moneyrule.ejs"] = function (t) {
                var e = "";
                return e += '<div class="c1"><div class="modal-header" style=""><div style=" width: 100%; text-align: center;">\x3c!--<img src="https://static.tianyancha.com/wap/images/court_title_pic.png"  alt="公告详情"/>--\x3e      返现规则</div></div><div class="modal-body"><div>天眼查普通用户</div><div>1.通过分享链接邀请好友成为天眼查VIP会员后，邀请者获得<span class="bluec">18</span>元（受邀者购买1年VIP）或者<span class="bluec">36</span>元（受邀者购买2或3年VIP）现金奖励；</div><div>2.受邀者凭借此分享链接的邀请码可享受购买VIP价格<span class="bluec">10</span>元减免优惠；</div><br><div><img src="https://static.tianyancha.com/wap/images/invitecrown.png" alt=""  class="crownicon"><div class="in-block vertival-top">成为天眼查VIP用户后</div></div><div>1.通过分享链接邀请好友成为天眼查VIP会员后，邀请者获得<span class="bluec">25.2</span>元（受邀者购买1年VIP）或者<span class="bluec">50.4</span>元（受邀者购买2或3年VIP）现金奖励；</div><div>2.受邀者凭借此分享链接的邀请码可享受购买VIP价格<span class="bluec">15</span>元减免优惠；</div></div></div>',
                    e.trim()
            }
            ,
            a.h5rule = a["h5rule.ejs"] = function (t) {
                var e = "";
                return e += '<div class="c1"><div class="modal-header"><div style=" width: 100%; text-align: center;">活动详细规则介绍</div>\x3c!--<div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" onclick="cancel()"><i class="tic tic-close"></i></div>--\x3e</div><div class="modal-body"><div>点击发出邀请即默认您已阅读并同意《邀请奖励协议》。为保障您的合法权益，请在使用邀请奖励功能之前，仔细阅读本协议。当您邀请好友天眼查成为VIP时，默认您已知悉如下条款：</div><br><div>一、邀请奖励功能介绍</div><div>&nbsp;&nbsp;1.天眼查的所有用户，通过天眼查APP发出链接邀请好友加入天眼查并体验VIP服务，一起公平看清世界；</div><div>&nbsp;&nbsp;2.天眼查用户通过分享链接邀请好友成为天眼查VIP会员后，邀请者获得30元现金奖励；受邀者凭借此分享链接的邀请码可享受购买VIP价格15元减免优惠。</div><br><div>二、注意事项</div><div>&nbsp;&nbsp;&nbsp;&nbsp;1.每位用户的邀请次数无上限；</div><div>&nbsp;&nbsp;&nbsp;&nbsp;2.拥有相同账户、手机号的用户视为同一用户，该规则适用于邀请者与被邀请者；</div><div>&nbsp;&nbsp;&nbsp;&nbsp;3.已注册的天眼查用户也可使用邀请奖励功能，可凭借有效的邀请码享受购买VIP优惠；</div><div>&nbsp;&nbsp;&nbsp;&nbsp;4.受邀者可凭借有效手机号绑定多次邀请码，但以最后一次绑定的邀请码为有效；</div><div>&nbsp;&nbsp;&nbsp;&nbsp;5.每位用户每日只有一次提现机会。</div><div>&nbsp;&nbsp;&nbsp;&nbsp;6.提现方式为微信提现，请确保已通过微信认证。</div><br><div>三、特别声明</div><div>&nbsp;&nbsp;&nbsp;&nbsp;我们包含邀请用户购买VIP在内的所有优惠推广功能仅向正当、合法使用我们产品/服务的用户。      每位参与者（含邀请人及被邀请者）的天眼查账号、手机号及其他身份认证信息必须是唯一的， 任何信息与其他用户重合都不能参与该奖励。      一旦发现您存在利用我们的规则漏洞进行任何形式的作弊行为 （包括但不限于通过我们的功能获得不正当的经济利益），我们有权取消与作弊行为相关账户的奖励、 追回您作弊所得的不正当经济利益、关闭作弊账户或与您相关的所有天眼查的账户，并保留取消您后续使用我们产品/服务的权利， 必要时会依据严重程度追究您的法律责任。      因获得奖励而产生的税负，由奖励获得方自行承担。      奖励提取方式为微信支付方式， 请确认您已开通相关服务。      北京金堤科技有限公司对本次活动相关内容保留最终解释权。</div></div></div>',
                    e.trim()
            }
            ,
            a.hjCardIntro = a["hjCardIntro.ejs"] = function (t) {
                var e = "";
                return e += '<div class="invitePage text-center pt20 pb20"><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="f18 pt10 pb10">黄金邀请卡（VIP会员专享）</div><div class="card rightCard margin-auto card-box-shadow"><div class="cardHead f16"><div class="titleLine1"></div><div>好友使用该邀请卡购买VIP</div><div class="titleLine2"></div></div><div class="cardText f14 text-left">1.你将获得25元或50元现金 可直接微信提现<br>2.好友购买VIP直接减免15元</div></div><a href="/vipintro"  tyc-event-click tyc-event-ch="xdl.vip.go"\n     class="getButton margin-auto new-b-alert point in-block mt20" style="width: 190px;">成为VIP</a></div>',
                    e.trim()
            }
            ,
            a.howInviteCode = a["howInviteCode.ejs"] = function (t) {
                var e = "";
                return e += '<div><div class="modal-header complaintHeader"><div class="text-center"><span class="complaintTitle">什么是邀请码</span><span class="close_btn_popup position-abs point" style="right: 8px;top: 8px;" ng-click="cancel()"></span></div></div><div class="modal-body"><div class="lh43">1.邀请码为邀请人唯一分享码;</div><div class="lh27">2.用户在天眼查APP中，点击 ‘我的→邀请赢奖→发出邀请’;</div><div class="lh43">3.通过分享邀请链接，邀请好友成为天眼查 VIP会员;</div><div class="lh27">4.邀请成功后邀请者立即获得现金奖励，受邀者获得购买VIP价格优惠。</div></div></div>',
                    e.trim()
            }
            ,
            a.howToSelect = a["howToSelect.ejs"] = function (t) {
                var e = "";
                return e += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">如何入选展示专区</div></div><div class="modal-body pl25 pt30 pb60"><div class="sec-c3 pl6 pb30">同时满足以下条件的企业，优先进入【展示专区】，获取更优质的流量：</div><div class="timeline-container over-hide f16 sec-c3"><div class="timeline-block"><div class="timeline-left-tag"><div class="timeline-circle timeline-tag">1</div></div><div class="timeline-panel"><div><div class="sec-c1"><b>完成企业认证</b></div><div>代表了该企业的权威度，认证后企业主页会添加            特有的认证标记。</div><span class="pull-right claim_yel c-white pl15 pr15 mt8" onclick="openClaimApply()">去认证我的企业</span></div></div></div><div class="timeline-block"><div class="timeline-left-tag"><div class="timeline-circle timeline-tag">2</div></div><div class="timeline-panel"><div class="sec-c1"><b>企业主页信息完善度丰满</b></div><div>代表了该企业主页内容丰富，便于客户全面了解，          高效洽谈商务合作,完成企业认证后可直接上传编          辑。</div></div></div></div></div>',
                    e.trim()
            }
            ,
            a.humanreport = a["humanreport.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="text-center b-c-gray pb30"><div class="report514_title text-center c-white f18 mb30">个人投资任职报告</div><span class="modal-close-btn" ng-click="cancel()" style="z-index: 2000;color: #fff"><i class="tic tic-close"></i></span><div class="text-center b-c-white new-border p20" style="height: 515px;margin: 30px;"><a target="_blank"  href="',
                    i = "" + i + e.items.reportUrl,
                    i += '"\n       class="f14 float-right vipColor">样例></a><div class="font-bold f24 sec-c2 mt25 mb35">专业版</div>',
                    2 == e.items.reportUserType ? i += '<div class="new-red" style="font-size: 28px;line-height: 28px;"><span class="f14 pr5 vertical-top in-block">¥</span><span class="in-block vertical-top font-bold">40</span></div><div class="mb35 mt13"><a class="c9" target="_blank" href="/vipintro">成为VIP立减30元></a></div>' : (i += '<div class="new-red" style="font-size: 28px;line-height: 28px;"><span class="f14 pr5 vertical-top in-block">¥</span><span class="in-block vertical-top font-bold">20</span></div><div class="sec-c4 mb20 mt13"><span>券后价：',
                        i = "" + i + e.items.discoverAmount,
                        i += '</span><span class="pl20">可用券数量：',
                        i = "" + i + e.items.coupanNum,
                        i += "</span></div>"),
                    e.items.overPlus && (i += '<div class="new-c1 mb10">当日还可免费下载<span class="new-red">',
                        i = "" + i + e.items.overPlus,
                        i += "</span>次</div>"),
                    i += '<div class="button-yel-lg" style="width: 130px;" onclick="payHumanReport(true,\'',
                    i = "" + i + e.items.jumpurl,
                    i += '\');" tyc-event-click tyc-event-ch="CompangyDetail.Report.Buy.base">立即购买</div><div class="sec-c3 f14 pt30"><ul class="in-block text-left pl0" style="line-height: 30px;"><li>基本工商信息</li><li>担任法定代表人的企业</li><li>投资的企业信息（含股比）</li><li>任职的企业信息</li><li>人脉圈分析</li></ul></div></div></div>',
                    i.trim()
            }
            ,
            a.humansuggest = a["humansuggest.ejs"] = function (t) {
                var e = t
                    , i = "";
                return e.humanInfo && e.humanInfo.distinctNum > 0 && e.humanInfo.resultList && e.humanInfo.resultList.length && (e.humanInfo.resultList.forEach(function (t) {
                    i += "<li>",
                        t.headUrl ? (i += '<div class="human-image-sm in-block vertical-top position-rel float-left" ><div class="imageouter"><img src="',
                            i = "" + i + t.headUrl,
                            i += '" alt="." class="vertical-top" ></div></div>') : (i += '<div class="human-image-sm in-block vertical-top float-left " ><div class="letter">',
                                i = "" + i + e.safeCharAt(t.name, 0, ""),
                                i += "</div></div>"),
                        i += '<div class="sec-c1  ml40 pl6" style="width:70%"><div class=" pb2  ">',
                        i = "" + i + t.name,
                        i += '</div><div class="f12">',
                        e.arrayLimit(t.office, 1).forEach(function (e) {
                            i += '<span class="human-sugget-right in-block overflow-width vertical-top">',
                                i = "" + i + e.companyName,
                                i += '</span><span class="pl15 in-block vertical-top">',
                                i += t.companyNum > 1 ? "等" : "",
                                i += "<span>",
                                i = "" + i + t.companyNum,
                                i += "家公司</span></span></div>"
                        }),
                        i += "</div></li>"
                }),
                    i += '<li class="human-suggest-bottom"><a class="new-border-top pt5 pb5 f13 sec-c1" href="/human/',
                    i = "" + i + e.humanInfo.id,
                    i += '?searchfrom=human" target=\'_blank\' style="display: block">查看<span class="new-err">',
                    i = "" + i + e.humanInfo.distinctNum,
                    i += "</span>个<span>",
                    i = "" + i + e.humanInfo.humanName,
                    i += "</span></a></li>"),
                    i.trim()
            }
            ,
            a.importAndExport = a["importAndExport.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">进出口信用详情</div></div><div class="modal-body">',
                    e.items.baseInfo && (i += '<div>注册信息</div><table class="table companyInfo-table"><tr ><td class="table-left" width="15%">注册日期</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.recordDate),
                        i += '</td><td class="table-left" width="15%">海关注册号</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.crCode),
                        i += '</td></tr><tr ><td class="table-left" width="15%">注册海关</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.customsRegisteredAddress),
                        i += '</td><td class="table-left" width="15%">行政区划</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.administrativeDivision),
                        i += '</td></tr><tr ><td class="table-left" width="15%">经济区划</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.economicDivision),
                        i += '</td><td class="table-left" width="15%">经营类别</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.managementCategory),
                        i += '</td></tr><tr ><td class="table-left" width="15%">特殊贸易区域</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.specialTradeArea),
                        i += '</td><td class="table-left" width="15%">行业种类</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.industryCategory),
                        i += '</td></tr><tr ><td class="table-left" width="15%">报关有效期</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.validityDate),
                        i += '</td><td class="table-left" width="15%">海关注销标识</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.status),
                        i += '</td></tr><tr ><td class="table-left" width="15%">年报情况</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.annualReport),
                        i += '</td><td class="table-left" width="15%">跨境贸易电子商务类型</td><td width="35%">',
                        i = "" + i + e.strFilter(e.items.baseInfo.types),
                        i += "</td></tr></table>"),
                    e.items.creditRating && e.items.creditRating.length && (i += '<div>信用等级</div><table class="table companyInfo-table"><tr ><td class="table-left" width="20%">认定时间</td><td class="table-left" width="50%">认证证书编码</td><td class="table-left" width="30%">信用等级</td></tr>',
                        e.items.creditRating.forEach(function (t) {
                            i += "<tr ><td >",
                                i = "" + i + e.strFilter(t.identificationTime),
                                i += "</td><td >",
                                i = "" + i + e.strFilter(t.authenticationCode),
                                i += "</td><td >",
                                i = "" + i + e.strFilter(t.creditRating),
                                i += "</td></tr>"
                        }),
                        i += "</table>"),
                    e.items.sanction && e.items.sanction.length && (i += '<div>行政处罚信息</div><table class="table companyInfo-table"><tr ><td class="table-left" width="25%">当事人</td><td class="table-left" width="25%">案件性质</td><td class="table-left" width="25%">处罚日期</td><td class="table-left" width="25%">行政处罚决定书编号</td></tr>',
                        e.items.sanction.forEach(function (t) {
                            i += "<tr ><td >",
                                i = "" + i + e.strFilter(t.party),
                                i += "</td><td >",
                                i = "" + i + e.strFilter(t.natureOfCase),
                                i += "</td><td >",
                                i = "" + i + e.strFilter(t.penaltyDate),
                                i += "</td><td >",
                                i = "" + i + e.strFilter(t.decisionNumber),
                                i += "</td></tr>"
                        }),
                        i += "</table>"),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.inviteApp = a["inviteApp.ejs"] = function (t) {
                var e = "";
                return e += '<div class="text-center pt40 pb40"><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="f20 pb20"><span class="c9">扫码下载APP</span><span>查看账目明细和提现</span></div><img src="https://static.tianyancha.com/wap/images/inviteTixian1.png" alt="" style="width:405px;"><div class="pt20 f12 new-c1">注意：请使用同一账号登录</div></div>',
                    e.trim()
            }
            ,
            a.invitesucc = a["invitesucc.ejs"] = function (t) {
                var e = "";
                return e += '<div class="c1 inviteSucc"><div><img src="https://static.tianyancha.com/wap/images/invite_get_succ.png" alt="" width="100%"></div><div class="inviteSucc-abs"><div class="clip"><span></span></div><div class="succ_close"><img src="https://static.tianyancha.com/wap/images/invite_close_icon.png" alt="" width="30px"></div></div></div>',
                    e.trim()
            }
            ,
            a.jobPage = a["jobPage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div class="popupHeader">招聘信息</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tbody><tr><td class="table-left" width="15%">所在城市</td><td width="35%">',
                    i = "" + i + e.checkData(e.items.city),
                    i += '</td><td class="table-left" width="15%">所在区</td><td width="35%">',
                    i = "" + i + e.checkData(e.items.district),
                    i += '</td></tr><tr><td class="table-left">公司名字</td><td>',
                    i = "" + i + e.checkData(e.items.companyName),
                    i += '</td><td class="table-left">工资</td><td>',
                    i = "" + i + e.checkData(e.items.oriSalary),
                    i += '</td></tr><tr><td class="table-left">经验</td><td>',
                    i = "" + i + e.checkData(e.items.experience),
                    i += '</td><td class="table-left">来源</td><td><a target="_blank" rel="nofollow" href-new-event event-name="招聘详情-招聘链接" href="',
                    i = "" + i + e.items.urlPath,
                    i += '">',
                    i = "" + i + e.checkData(e.items.source),
                    i += '</a></td></tr><tr><td class="table-left">招聘开始日期</td><td>',
                    i = "" + i + (e.items.startdate ? e.initTime(e.items.startdate) : ""),
                    i += '</td><td class="table-left">招聘截至日期</td><td>',
                    i = "" + i + (e.items.enddate ? e.initTime(e.items.enddate) : ""),
                    i += '</td></tr><tr><td class="table-left">教育</td><td>',
                    i = "" + i + e.checkData(e.items.education),
                    i += '</td><td class="table-left">招聘人数</td><td>',
                    i = "" + i + e.checkData(e.items.employerNumber),
                    i += '</td></tr><tr><td class="table-left">职位描述</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.description),
                    i += "</td></tr></tbody></table></div>",
                    i.trim()
            }
            ,
            a.lawsuitCaseContent = a["lawsuitCaseContent.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div style=" width: 100%; text-align: center;"><p class="f16 " style="margin:0px;" id="_customerName">',
                    i = "" + i + e.items.name,
                    i += '</p><p class="f12 c3">',
                    i += "customerName" == e.items.type ? "被代理案件" : "代理案件",
                    i += '</p></div><div style="position: absolute; right: 15px; top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body" style="margin:0 15px;"><div ng-if="lawFirm.caseCount"><div style="padding-top:10px;" class="row b-c-white" id="_modal_container_customerPage"></div></div></div>',
                    i.trim()
            }
            ,
            a.legend = a["legend.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="legend new-c2" >',
                    e.rules && e.rules.length && (i += '<ul class="list-unstyled mt40" ng-if="rules&&rules.length">',
                        e.rules.forEach(function (t, e) {
                            t.isNode && (i += '<li ng-repeat="rule in rules | filter:{isNode:true}" class="clearfix"><a\n\t\t\tstyle="background-color: ',
                                i = "" + i + t.color,
                                i += ";border-color: ",
                                i = "" + i + t["border-color"],
                                i += '"\n\t\t\tclass="preview"><div class="shade"></div></a><div class="contents no-condition"><div class="class-name">',
                                i = "" + i + (t.fakeKlass ? t.fakeKlass : "Default"),
                                i += '</div><div class="condition"></div></div></li>')
                        }),
                        i += '</ul><ul class="list-unstyled mt35" ng-if="rules&&rules.length">',
                        e.rules.forEach(function (t, e) {
                            t.isRelationship && (i += '<li ng-repeat="rule in rules | filter:{isRelationship:true}"><a\n        style="background-color: ',
                                i = "" + i + t.color,
                                i += ";border-color: ",
                                i = "" + i + t["border-color"],
                                i += '"\n\t\t\tclass="previewRelationship"></a><div class="contents no-condition"><div class="relationship-name">',
                                i = "" + i + (t.fakeKlass ? t.fakeKlass : "Default"),
                                i += '<input type="checkbox"\n\t\t\t\t\t\tname="selected" ',
                                i += t.showCheck ? 'checked="checked"' : "",
                                i += '\n\t\t\t\t\t\tonclick="clickRelationship(this)" onchange="showRelationship(this)" label="',
                                i = "" + i + t.label,
                                i += '"\n\t\t\t\t\t\tstyle="margin-top: 0px;" /></div><div class="condition"></div></div></li>')
                        }),
                        i += "</ul>"),
                    i += '<div class="text-center mb8 mt18"><span class="btn btn-default"  onclick="DiscreteClick(this)">',
                    i += e.hideDiscreteNodes ? "显示离散点" : "隐藏离散点",
                    i += '</span></div><div class="text-center mb8"><span class="btn btn-default changeScreenState" onclick="changeScreenState()">',
                    i += e.isFull ? "退出全屏" : "全屏查看",
                    i += '</span></div><div class="text-center "><div style=""  class="view-refresh btn btn-default" onclick="saveAsPng();">下载</div></div>\x3c!-- <div style="margin-top: 15px;     display: table;" class="view-refresh btn btn-default"\n\t\tng-click="refresh();"><span style="padding-right: 5px;"><i class="tic tic-refresh "></i>优化</span></div>--\x3e</div>',
                    i.trim()
            }
            ,
            a.login = a["login.ejs"] = function (t) {
                var e = "";
                return e += '<div class="modal-header"><span  class="close_btn_popup position-abs point" style="right: 8px;top: 8px;" ng-click="cancel()"></span><h4 class="modal-title text-center pt15"><span id="loginObjTitle">短信验证码登录</span></h4></div><div class="modal-body"><div class="login_page"><div class="bgContent"><div class="module module3 registermodule register_box pl15 pr15 collapse  "><div class="pb30 mt10 position-rel"><input type="text" class="_input input_nor contactphone" onfocus="loginObj.clearMsg(\'phone\');"\n                 placeholder="请输入您的手机号码" ng-model="contact.phone"/><div class="position-abs new-err collapse errMsgphone" style="top: 42px;" ></div></div>\x3c!--<div class="pb30  position-rel">--\x3e\x3c!--<div class="dun-validata-container  "></div>--\x3e\x3c!--<div class="position-abs new-err collapse errMsgvalidata" style="top: 42px;" ></div>--\x3e\x3c!--</div>--\x3e<div class="pb10 over-hide"><input type="text" onfocus="loginObj.clearMsg(\'scode\');" class="_input input_nor float-left contactscode"\n                 style="width: 70%"\n                 placeholder="请输入验证码" ng-model="contact.scode"/><div  class="float-right text-center pt8 c-white f14 scode scodebtn point" onclick="loginObj.getSMSCode(3,\'SMS\',0)">获取验证码</div></div><div class="f14 pb25 text-right"><span onclick="loginObj.changeCheckType(0,3);" class="point new-c10 voicescodebtn">无法收到短信验证码？点击切换语音验证</span><div class="float-left new-err collapse errMsgscode" style="top: 42px;" ></div></div><div class="pb25 position-rel"><input type="password" onfocus="loginObj.clearMsg(\'word\')" class="_input input_nor contactword"\n                 placeholder="密码为8-20位数字和字母组合" ng-model="contact.word"/><div class="position-abs new-err collapse errMsgword" style="top: 42px;" ></div></div><div class="pb35 position-rel"><input type="password" onfocus="loginObj.clearMsg(\'reword\')" class="_input input_nor contactreword"\n                 placeholder="请再次确认密码" ng-model="contact.reword"/><div class="position-abs new-err collapse errMsgreword" style="top: 42px;" ></div></div><div\n          tyc-event-click tyc-event-ch="Login.Register"\n          class="c-white b-c9 pt8 f18 text-center login_btn"\n          onclick="loginObj.register();">注册</div><div class=" new-err reg_error_msg_content collapse errMsgregErr register_error"></div><div class=" f14 pt10 pb20 new-c1"><div  class="float-left">阅读并接受<a class="new-c9" href="/property/2" target="_blank">《服务协议》</a></div><div class="c9 f14 in-block point border-blue-bottom float-right" onclick="loginObj.changeCurrent(2);"\n               style="">返回登录>></div></div></div><div class="module module1 module2 loginmodule collapse in">\x3c!--手机登录模块1--\x3e<div class="modulein modulein1 mobile_box pl15 pr15 f14 collapse "><div class="mt10 mb10 new-c9 text-right point canClick" onclick="loginObj.changeCurrent(2);">短信验证码登录</div><div class="pb30 position-rel"><input type="text" onfocus="loginObj.clearMsg(\'phone\')" class="_input input_nor contactphone"\n                   placeholder="请输入您的手机号码" ng-model="contact.phone"/><div class="position-abs new-err collapse errMsgphone" style="top: 42px;" ></div></div><div class="pb40 position-rel"><input type="password" onfocus="loginObj.clearMsg(\'word\')" class="_input input_nor contactword"\n                   placeholder="请输入密码" onkeyup="loginObj.loginByPhone(event,\'keydown\')" ng-model="contact.word"/><div class="position-abs new-err collapse errMsgword" style="top: 42px;" ></div></div><div class="f14 mb28"><input type="checkbox" class="contactautoLogin" ng-model="contact.autoLogin" checked><span class="new-c1">下次自动登录</span>\x3c!--<span class="float-right new-c9 point canClick" onclick="changeCurrent(4);">忘记密码？</span>--\x3e</div><div\n            tyc-event-click tyc-event-ch="Login.Login"\n            class="c-white b-c9 pt8 f18 text-center login_btn"\n            onclick="loginObj.loginByPhone(event);">登录</div><div class=" f14 pt10 new-c1">点击“登录”即表示同意<a target="_blank"\n                                                       href="https://www.tianyancha.com/property/2"\n                                                       class="new-c9">《服务协议》</a></div><div class=" new-err reg_error_msg_content errMsgresErr collapse"></div><div class="text-right pt28"><div class="c9 f14 in-block point border-blue-bottom" onclick="loginObj.changeCurrent(3);"\n                 style="">免费注册>></div></div></div>\x3c!--短信登录模块2--\x3e<div class="modulein modulein2 message_box pl15 pr15 f14 collapse in"><div class="mt10 mb10 new-c9 text-right point canClick" onclick="loginObj.changeCurrent(1);" >账号密码登录</div><div class="pb30 position-rel"><input onfocus="loginObj.clearMsg(\'phone\')" type="text" class="_input input_nor contactphone"\n                   placeholder="请输入您的手机号码" ng-model="contact.phone"/><div class="position-abs new-err collapse errMsgphone" style="top: 42px;" ></div></div>\x3c!--<div class="pb30  position-rel">--\x3e\x3c!--<div class="dun-validata-container  "></div>--\x3e\x3c!--<div class="position-abs new-err collapse errMsgvalidata" style="top: 42px;" ></div>--\x3e\x3c!--</div>--\x3e<div class="pb10 over-hide position-rel"><input type="text" onfocus="loginObj.clearMsg(\'scode\')" class="_input input_nor float-left contactscode"\n                   style="width: 70%"\n                   placeholder="请输入验证码" ng-model="contact.scode"/><div id="smsCodeBtnPopup" class="float-right text-center pt8 c-white f14 scode point scodebtn " onclick="loginObj.getSMSCode(2,\'SMS\',1)">获取验证码</div></div><div class="f14 pb12 text-right"><span onclick="loginObj.changeCheckType(1,2);" class="point new-c10 voicescodebtn">无法收到短信验证码？点击切换语音验证</span><div class="new-err float-left collapse errMsgscode"></div></div><div class="f14 mb28"><input type="checkbox" class="contactautoLogin"  checked><span class="new-c1">下次自动登录</span></div><div href-new-event event-name="登录注册-登录" class="c-white b-c9 pt8 f18 text-center login_btn"\n               onclick="loginObj.loginByMes()">登录</div><div class=" new-err reg_error_msg_content collapse errMsgmesLoginErr" ></div><div class=" f14 pt10 new-c1">点击“登录”即表示同意<a target="_blank"\n                                                                  href="https://www.tianyancha.com/property/2"\n                                                                  class="new-c9">《服务协议》</a></div></div></div></div></div><input type="hidden" value="2" class="loginState"></div>',
                    e.trim()
            }
            ,
            a.message = a["message.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup pt15 pb15" ><div  class="text-center">',
                    e.items.msg ? (i += '<div class="f16 " ng-if="items.msg" style="color: #111;"><i class="tic tic-close-circle mr10 new-err"></i>',
                        i = "" + i + e.items.msg,
                        i += "</div>") : e.items.alertmsg && (i += '<div class="f16 human-alert-em c-white " ng-if="items.alertmsg"><i class="tic tic-exclamation-circle mr10 "></i><span ng-bind-html="items.alertmsg">',
                            i = "" + i + e.items.alertmsg,
                            i += "</span></div>"),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a.mortgage = a["mortgage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header"><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">动产抵押</div></div><div class="modal-body" ><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="28%">登记编号：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.regNum, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >登记机关：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.regDepartment, "未公示"),
                    i += '</td ><tr><td class="table-left" >登记日期：</td><td >',
                    i = "" + i + e.dateFormat(e.items.baseInfo.regDate, "未公示", "int"),
                    i += '</td ></tr><tr><td class="table-left" >状态：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.status, "未公示"),
                    i += '</td ></tr><tr><td class="table-left" >被担保债权类型：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.type, "未公示"),
                    i += '</td ></tr><tr><td class="table-left" >被担保债权数额：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.amount, "未公示"),
                    i += '</td ></tr><tr><td class="table-left" >债务人履行债务期限：</td><td >',
                    e.strFilter(e.items.baseInfo.overviewTerm, "未公示"),
                    i += '</td ></tr><tr><td class="table-left" >担保范围：</td><td >',
                    i = "" + i + e.strFilter(e.items.baseInfo.scope, "未公示"),
                    i += '</td ></tr><tr><td class="table-left" >备注：</td><td >所报材料真实合法，一切责任由当事人自负。</td ></tr>',
                    e.items.peopleInfo && e.items.peopleInfo.forEach(function (t) {
                        i += '<tr><td class="table-left" >抵押权人名称：</td ><td >',
                            i = "" + i + e.strFilter(t.peopleName),
                            i += '</td></tr><tr><td class="table-left" >抵押权人证照／证件类型：</td ><td >',
                            i = "" + i + e.strFilter(t.liceseType),
                            i += '</td></tr><tr><td class="table-left" >证件／证照号码：</td ><td >',
                            e.strFilter(-t.licenseNum),
                            i += "</td></tr>"
                    }),
                    e.items.pawnInfoList && e.items.pawnInfoList.forEach(function (t) {
                        i += '<tr><td class="table-left" >名称：</td><td>',
                            i = "" + i + e.strFilter(t.pawnName),
                            i += '</td></tr><tr><td class="table-left" >所有权归属：</td><td>',
                            i = "" + i + e.strFilter(t.ownership),
                            i += '</td></tr><tr><td class="table-left" >数量、质量、状况、所在地等情况：</td><td>',
                            i = "" + i + e.strFilter(t.detail),
                            i += '</td></tr><tr><td class="table-left" >备注：</td><td>',
                            i = "" + i + e.strFilter(t.remark, "--"),
                            i += "</td></tr>"
                    }),
                    e.items.changeInfoList && e.items.changeInfoList.forEach(function (t) {
                        i += '<tr><td class="table-left block-status status-chg" >变更</td><td class="status-content"><div>时间:<span >',
                            i = "" + i + e.strFilter(t.changeDate),
                            i += "</span></div><div>原因:<span >",
                            i = "" + i + e.strFilter(t.changeContent),
                            i += "</span></div></td></tr>"
                    }),
                    e.items.baseInfo.cancelDate && (i += '<tr><td class="table-left block-status status-dis">注销</td><td class="status-content"><div>时间:<span>',
                        i = "" + i + e.strFilter(e.items.baseInfo.cancelDate),
                        i += "</span></div><div>原因:<span>",
                        i = "" + i + e.strFilter(e.items.baseInfo.cancelReason),
                        i += "</span></div></td></tr>"),
                    i += "</table></div>",
                    i.trim()
            }
            ,
            a.nearCompany = a["nearCompany.ejs"] = function (t) {
                var e = "";
                return e += '<div class="feedback_body" style="position:relative;padding-top:30px;"><div class="f18 sec-c1 text-center new-border-bottom pb20">扫码下载APP获取</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;z-index:1000;" ng-click="cancel()"><i class="tic tic-close"></i></div><div class="text-center pt20 pb30"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/smxzApp1019.jpg" alt="app"></div></div>',
                    e.trim()
            }
            ,
            a.needupdate = a["needupdate.ejs"] = function (t) {
                var e = "";
                return e += '<div><div ng-show="!noResult" class=\'equity-outer\' style="" ng-style="equityDetailShow?{width: \'1000px\'}:{}"><span class="modal-close-btn" ng-click="cancel()" style="z-index: 2000"><i class="tic tic-close"></i></span><img src="https://static.tianyancha.com/wap/images/needupdate.png" alt="" width="100%"></div></div>',
                    e.trim()
            }
            ,
            a.noticeDownload = a["noticeDownload.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="text-center"><div class="notice-modal-box notice-modal-1 collapse ',
                    i += "1" == e.noticeindex ? "in" : "",
                    i += '"><div class="c-content f18 new-border-bottom pt15 pb15">pdf下载提示</div><div style="" class="pb50"><div  class="in-block pt60 f16 sec-c1 pb60 lh30" style="width:65%;">文件需要下载后才可阅读，此期间需要几分钟的等待！</div><div><span class="in-block button-white-lg pl50 pr50 mr25" onclick="closeWebPage()">取消</span><span class="in-block button-blue-lg pl50 pr50" onclick="jumpWait()">下载</span></div></div></div><div class="notice-modal-box notice-modal-2 collapse ',
                    i += "2" == e.noticeindex ? "in" : "",
                    i += '"><div class="c-content f18 new-border-bottom pt15 pb15">pdf下载中...</div><div style="" class="pb50"><div  class="in-block mt35 mb50" style=""><i class="tic tic-spinner tic-spin tic-5x in-block vertival-middle c-s-gray"></i></div><div><span class="in-block button-white-lg pl50 pr50" onclick="closeWebPage()">取消</span></div></div></div><div class="notice-modal-box notice-modal-3 collapse"><div class="c-content f18 new-border-bottom pt15 pb15">网络不畅提示</div><div style="" class="pb50"><div  class="in-block mt35" style=""><img src="https://static.tianyancha.com/wap/images/notice-error.jpg" alt="."/></div><div  class=" pt25 f16 sec-c1 pb40 lh30" >网络出现故障，已经中断下载！</div><div><span class="in-block button-white-lg pl50 pr50 mr25" onclick="closeWebPage()">取消</span><span class="in-block button-blue-lg pl50 pr50" onclick="jumpWait()">继续下载</span></div></div></div><div class="notice-modal-box notice-modal-4 collapse"><div class="close_btn_popup position-abs point" style="right: 8px;top: 8px;" ng-click="cancel()"></div><div class="c-content f18 new-border-bottom pt15 pb15">下载成功</div><div style="" class="pb50"><div  class="in-block mt35" style=""><img src="https://static.tianyancha.com/wap/images/notice-success.jpg" alt="."/></div><div  class=" pt25 f16 sec-c1 pb40 lh30" >文件已成功下载，请点击预览</div><div><a class="in-block button-blue-lg pl50 pr50 previewPdf" onclick="openNotice()">预览</a></div></div></div></div>',
                    i.trim()
            }
            ,
            a.openReceipt = a["openReceipt.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="receiverPopup modal-fix-placeholder" ng-click="hideProvpop($event)"><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">开发票</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c1 "><div class="text-center">您有<span class="new-err">',
                    s = "" + s + i.receiptInfo.totalOrder / 100,
                    s += '</span>元未开发票金额</div><div class="vip-head-b2 mb25 mt10 ">发票详情</div><div class="pb12 clearfix"><span class="order-receipt-title">公司抬头</span><div class="order-receipt-outer"><input type="text" class="order-receipt _receipt_title"  onfocus="clearMsg(\'\')" placeholder="请填写公司抬头" value="',
                    s = "" + s + i.trim(i.strFilter(i.receiptInfo.title)),
                    s += '"/><div class="new-err collapse errMsgtitle">请输入公司抬头</div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">发票内容</span><div class="order-receipt-outer"><div class="dropdown913 user-receipt-drop" onclick="clearMsg(\'\')"><div class="wrapper-demo"><div class="wrapper-dropdown-2 order-receipt" tabindex="1"><span class="overflow-width receipt-type-sel" >',
                    s += 1 == i.receiptInfo.type ? "技术服务费" : 2 == i.receiptInfo.type ? "信息服务费" : "咨询服务费",
                    s += '</span><i></i><ul class="dropdown" style="z-index: 900;"><li><span onclick="receiptTypeChange(event,\'信息服务费\',\'2\');" >信息服务费</span></li><li><span onclick="receiptTypeChange(event,\'咨询服务费\',\'0\');">咨询服务费</span></li><li><span onclick="receiptTypeChange(event,\'技术服务费\',\'1\');">技术服务费</span></li></ul></div><input type="hidden" class="receiptType" value="',
                    s = "" + s + (i.receiptInfo.type ? i.receiptInfo.type : 0),
                    s += '"></div></div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">发票金额</span><div class="order-receipt-outer"><div class="order-receipt-text ">',
                    s = "" + s + i.receiptInfo.totalOrder / 100,
                    s += '</div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">纳税人识别号</span><div class="order-receipt-outer"><input type="text" class="order-receipt _receipt_taxpayerId" onfocus="clearMsg(\'\')" placeholder="请填写15或18位纳税人识别号" value="',
                    s = "" + s + i.trim(i.strFilter(i.receiptInfo.taxpayerId)),
                    s += '"/><div class="new-err collapse errMsgtaxpayerId">请输入纳税人识别号</div></div></div><div class="vip-head-b2 mb25 mt25">收件详情</div><div class="pb12 clearfix"><span class="order-receipt-title">收件人</span><div class="order-receipt-outer"><input type="text" class="order-receipt _receipt_receiver" onfocus="clearMsg(\'\')" placeholder="请输入收件人姓名" value="',
                    s = "" + s + i.trim(i.strFilter(i.receiptInfo.receiver)),
                    s += '"/><div class="new-err collapse errMsgreceiver">请输入收件人</div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">所在地区</span><div class="order-receipt-outer _receipt_" ><div class=" col-4 pr10 sel-addr-box sel-addr-box-prov"><div class="order-receipt sel-name w100 over-hide ',
                    s += i.renderSel.prov ? "" : "unsel",
                    s += ' point" >',
                    s = "" + s + i.strFilter(i.renderSel.prov, "请选择省份"),
                    s += '</div><i class="tic tic-xia sec-c3" ></i><div class="position-abs province-pop province-pop-prov new-border sec-c3" >',
                    s = "" + s + a("provRepeat", {
                        provarr: provinceList,
                        type: "prov",
                        sel: i.renderSel.prov
                    }),
                    s += '</div></div><div class=" col-4 pr10 sel-addr-box sel-addr-box-city"><div class="order-receipt sel-name w100 ',
                    s += i.renderSel.city ? "" : "unsel",
                    s += ' over-hide point">',
                    s = "" + s + i.strFilter(i.renderSel.city, "请选择城市"),
                    s += '</div><i class="tic tic-xia sec-c3" ></i><div class="position-abs province-pop province-pop-city new-border sec-c3" >',
                    s = "" + s + a("provRepeat", {
                        provarr: i.cityList,
                        type: "city",
                        sel: i.renderSel.city
                    }),
                    s += '</div></div><div class=" col-4 sel-addr-box sel-addr-box-area"><div class="order-receipt sel-name w100 ',
                    s += i.renderSel.area ? "" : "unsel",
                    s += ' over-hide point">',
                    s = "" + s + i.strFilter(i.renderSel.area, "请选择地区"),
                    s += '</div><i class="tic tic-xia sec-c3" style="right: 6px;"></i><div class="position-abs province-pop province-pop-area new-border sec-c3">',
                    s = "" + s + a("provRepeat", {
                        provarr: i.areaList,
                        type: "area",
                        sel: i.renderSel.area
                    }),
                    s += '</div></div><div class="new-err collapse errMsgarea"></div></div></div><div class="pb12 clearfix"><span class="order-receipt-title">手机号</span><div class="order-receipt-outer"><input type="text" class="order-receipt _receipt_telephone" onfocus="clearMsg(\'\')" placeholder="请输入收件人手机号" value="',
                    s = "" + s + i.trim(i.strFilter(i.receiptInfo.telephone)),
                    s += '"/><div class="new-err collapse errMsgtelephone">请输入手机号</div></div></div><div class="pb6 clearfix"><span class="order-receipt-title">详细地址</span><div class="order-receipt-outer"><input type="text" class="order-receipt _receipt_detailedaddr" onfocus="clearMsg(\'\')" placeholder="请填写收件人详细地址"  value="',
                    s = "" + s + i.trim(i.strFilter(i.receiptInfo.detailedAddr)),
                    s += '"/><div class="new-err collapse errMsgdetailedaddr">请输入详细地址</div></div></div><div class="pb40 clearfix"><span class="order-receipt-title"></span><div class="order-receipt-outer sec-c4 pull-right f12">请仔细核对信息，如非我司原因造成损失，我司概不负责</div></div><div></div><div class="text-center pb40"><div class="button-yel-sm in-block w150" onclick="receiptComfirm()">提交</div></div></div></div>',
                    s.trim()
            }
            ,
            a.organizeInfo = a["organizeInfo.ejs"] = function (t) {
                var e = t
                    , s = "";
                return s += '<div class="modal-new-header" ><div class="popupHeader">',
                    e && e.items && e.items.event_list && (s += i(e.items.title)),
                    s += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><thead><tr><th class="text-center" width="6%">序号</th><th class="text-center" width="10%">产品图片</th><th class="text-center" width="12%">产品名</th><th class="text-center" width="10%">融资轮次</th><th class="text-center" width="12%">投资时间</th><th class="text-center" width="12%">投资金额</th><th class="text-center" width="28%">产品介绍</th></tr></thead><tbody class="text-center">',
                    e && e.items && e.items.event_list && e.items.event_list.forEach(function (t, a) {
                        s += "<tr><td>",
                            s += i(a + 1),
                            s += '</td><td><img class="organize-img" src="',
                            s = "" + s + e.imageSelf(t.logo),
                            s += '" alt="',
                            s = "" + s + t.product,
                            s += '" onerror="this.src=\'https://img.tianyancha.com/logo/teamMember/ye_def.png@!fill_200x200\'"></td><td>',
                            t.id ? (s += '<a href="',
                                s = s + (serverDomain + "/brand/") + t.id,
                                s += '" target="_blank">',
                                s += i(t.product),
                                s += "</a>") : s += i(t.product),
                            s += "</td><td>",
                            s += i(t.round),
                            s += "</td><td>",
                            s += i(t.invest_date),
                            s += "</td><td>",
                            s += i(t.money),
                            s += "</td><td>",
                            t.intro && (t.intro.length > 30 ? (s = "" + s + t.intro.substr(0, 30),
                                s += '<span class="js-hide hide">',
                                s = "" + s + t.intro.substr(30),
                                s += '</span><span class="text-click-color point" onclick="showDetail(this)">...详情</span>') : s = "" + s + t.intro),
                            s += "</td></tr>"
                    }),
                    s += "</tbody></table></div>",
                    s.trim()
            }
            ,
            a.outData = a["outData.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup"><div class="close_btn position-abs point" style="right: 15px;top: 10px;" ng-click="cancel()"></div>\x3c!--数据导出--\x3e',
                    1 == e.items.type && (i += '\x3c!--<div>--\x3e\x3c!--<div class="text-center f14 new-c1 pt50">--\x3e\x3c!--成为VIP会员，即可批量导出企业联系方式--\x3e\x3c!--</div>--\x3e\x3c!--<div class="mt20 text-center">--\x3e\x3c!--<span href-new-event event-name="数据导出成为VIP" is-need-state=\'true\'--\x3e\x3c!--onclick="searchOrderLogin();"--\x3e\x3c!--class="vipBG_buttom c-white f16 text-center pt10 point in-block">成为VIP会员</span>--\x3e\x3c!--</div>--\x3e\x3c!--<div class="mt20 mb20 text-center">--\x3e\x3c!--<a href="https://cache.tianyancha.com/credit_report/%E6%9D%8E%C3%97%C3%97-%E4%B8%93%E4%B8%9A%E7%89%88%E6%9C%AC-%E6%A0%B7%E6%9C%AC%E9%A2%84%E8%A7%88.pdf" target="_blank"--\x3e\x3c!--class="in-block point ml20 c9 border-blue-bottom"--\x3e\x3c!--style="">数据预览</a>--\x3e\x3c!--</div>--\x3e\x3c!--</div>--\x3e'),
                    i += "\x3c!--高级筛选--\x3e",
                    2 == e.items.type && (i += '\x3c!--<div ng-if="items.fromSearch==2">--\x3e\x3c!--<div class="text-center f14 new-c1 pt50" style="line-height: 24px;">--\x3e\x3c!--成为VIP会员，即可使用高级筛选条件<br>--\x3e\x3c!--更加精确查看企业结果--\x3e\x3c!--</div>--\x3e\x3c!--<div href-new-event event-name="高级筛选成为VIP" is-need-state=\'true\' class="vipBG_buttom margin-auto mb20 mt20 f16 c-white text-center pt10 point" ng-click="searchToVip();">--\x3e\x3c!--立即成为VIP--\x3e\x3c!--</div>--\x3e\x3c!--</div>--\x3e'),
                    i += "\x3c!--提示登录--\x3e",
                    3 == e.items.type && (i += '<div><div class="text-center f14 new-c1 pt50">登录之后，即可批量导出企业联系方式</div><div class="mt20 text-center"><span tyc-event-click tyc-event-ch="CompanySearch.DaoShuju.Login"\n        is-need-state=\'true\'\n            onclick="searchOrderLogin(\'login\');" class="vipBG_buttom c-white f16 text-center pt10 point in-block">立即登录</span></div><div class="mt20 mb20 text-center clearfix"><a href="/dataWatch" target="_blank"\n         class="in-block point ml20 c9 border-blue-bottom"\n         style="">数据预览</a><a class="float-right line_bottom point in-block new-c9 mr30"\n            onclick="searchOrderLogin(\'register\');">没有账号？立即注册>></a></div></div>'),
                    i += '\x3c!--人名去重登录--\x3e\x3c!--<div ng-if="items.fromHuman==1">--\x3e\x3c!--<div class="text-center pt20 pb13 f18 title" style="letter-spacing:0;">--\x3e\x3c!--<span class="check_icon_human in-block vertival-middle mr10"></span>--\x3e\x3c!--精准人名去重结果--\x3e\x3c!--</div>--\x3e\x3c!--<div class="text-center new-c2 f14 pt35">--\x3e\x3c!--<div class="pb10">登录之后每天可有3次免费查看机会，</div>--\x3e\x3c!--<div>成为VIP会员之后可无限查看！</div>--\x3e\x3c!--<div class="check_btn mt30 point" ng-click="checkByPhone(\'login\');">立即登录</div>--\x3e\x3c!--<div class="over-hide new-c9 pl20 pr20 mt20 pb20">--\x3e\x3c!--<span class="float-left line_bottom point in-block canClick" ng-click="linkToHuman();">查看实际案例</span>--\x3e\x3c!--<span class="float-right line_bottom point in-block canClick" ng-click="checkByPhone(\'register\');">没有账号？立即注册>></span>--\x3e\x3c!--</div>--\x3e\x3c!--</div>--\x3e\x3c!--</div>--\x3e\x3c!--人名去重vip--\x3e\x3c!--<div ng-if="items.fromHuman==2">--\x3e\x3c!--<div class="text-center new-c2 f14 pt60">--\x3e\x3c!--<div style="line-height: 24px;">--\x3e\x3c!--普通会员每天最多有3次查看机会，<br>--\x3e\x3c!--成为VIP会员之后可无限查看。--\x3e\x3c!--</div>--\x3e\x3c!--<div class="check_btn mt20 mb20 point canClick" ng-click="searchToVip();">立即成为VIP</div>--\x3e\x3c!--</div>--\x3e\x3c!--</div>--\x3e</div>',
                    i.trim()
            }
            ,
            a.pagination_click = a["pagination_click.ejs"] = function (t) {
                var e = t
                    , i = ""
                    , s = e.total ? e.total : 0
                    , a = e.perPage ? e.perPage : 10
                    , n = e.currentPage ? parseInt(e.currentPage) : 1
                    , o = Math.ceil(s / a)
                    , r = e.onChange ? e.onChange : "companyPageChange"
                    , c = e.pageclass ? e.pageclass : "company_pager"
                    , l = e.isHideTotal ? e.isHideTotal : null
                    , d = e.changeType ? e.changeType : null
                    , p = e.lineTypeName ? e.lineTypeName : null
                    , u = e.lineTypeVal ? e.lineTypeVal : null
                    , v = e.maxSize ? e.maxSize : 10;
                if (o > 1) {
                    i += '<div class="',
                        i = "" + i + c,
                        i += '"><ul class="pagination-sm pagination" boundary-links="false" rotate="false" style="float: left;"\n      page-total="',
                        i = "" + i + s,
                        i += '" change-type="',
                        i = "" + i + d,
                        i += '" line-type-name="',
                        i = "" + i + p,
                        i += '"\n      line-type-val="',
                        i = "" + i + u,
                        i += '">';
                    var m = 1 == n
                        , h = n == o
                        , f = !(Math.ceil(n / v) > 1)
                        , g = !(Math.ceil(n / v) < Math.ceil(o / v));
                    i += '<li class="pagination-prev  ',
                        m && (i += "disabled"),
                        i += '" style=""><a\n        ',
                        !m && r && (i += 'onclick="',
                            i = i + (r + "(") + (n - 1) + ",this)",
                            i += '"\n        '),
                        i += "\n      >&lt;</a></li>",
                        f || (i += '<li class="pagination-page " style=""><a\n        ',
                            !f && r && (i += 'onclick="',
                                i = i + (r + "(") + (Math.ceil(n / v) - 1) * v + ",this)",
                                i += '"\n        '),
                            i += "\n      >...</a></li>");
                    var b = (Math.ceil(n / v) - 1) * v + 1 + v;
                    b = b < o + 1 ? b : o + 1;
                    for (var y = (Math.ceil(n / v) - 1) * v + 1; y < b; y++)
                        i += '<li class="pagination-page  ',
                            n == y && (i += "active"),
                            i += ' " style=""><a\n        ',
                            n != y && r && (i += 'onclick="',
                                i = i + (r + "(") + y + ",this)",
                                i += '"\n        '),
                            i += "\n      >",
                            i = "" + i + y,
                            i += "</a></li>";
                    g || (i += '<li class="pagination-page " style=""><a\n        ',
                        !g && r && (i += 'onclick="',
                            i = i + (r + "(") + b + ",this)",
                            i += '"\n        '),
                        i += "\n      >...</a></li>"),
                        i += '<li class="pagination-next  ',
                        h && (i += "disabled"),
                        i += '"><a\n        ',
                        !h && r && (i += 'onclick="',
                            i = i + (r + "(") + (n + 1) + ",this)",
                            i += '"\n        '),
                        i += "\n      >&gt;</a></li></ul>",
                        l || (i += '<div class="total"><span>共</span>',
                            i = "" + i + o,
                            i += "<span>页</span></div>"),
                        i += "</div>"
                }
                return i.trim()
            }
            ,
            a.panel = a["panel.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    e.tempArr && e.tempArr.length && (i += '<div ng-show="tempArr&&tempArr.length>0" class="panel-relation pt20 pb15 ml20 mr20 new-border-bottom" ><div onclick="panelShowAll();" ng-show="showTitle" class="in-block point pr25 vertical-top"><label ><input type="radio" name="selPath" checked="checked"><span class="pl10">全部路径</span></label></div>',
                        e.tempArr.forEach(function (t, e) {
                            i += '<div ng-repeat="t in tempArr" class="in-block pr25 vertical-top"><div class="text-left point" onclick="panelClick(\'',
                                i = "" + i + t.id,
                                i += '\');"  ><label ><input type="radio" name="selPath" ><span class="pl10">',
                                i = "" + i + t.title,
                                i += "</span></label></div></div>"
                        }),
                        i += '\x3c!--<div ng-show="close" ng-click="showPanel($event)" ><i class="tic tic-bars fa-2x"></i></div>--\x3e</div>'),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.partEditCompanyInfo = a["partEditCompanyInfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="hidden"><input attrV="imageUrl" type="text" value="',
                    i = "" + i + e.item.imageUrl,
                    i += '" /><input attrV="name" type="text" value="',
                    i = "" + i + e.item.name,
                    i += '" /><input attrV="introduce" type="text" value="',
                    i = "" + i + e.item.introduce,
                    i += '" /><input attrV="type" type="text" value="',
                    i = "" + i + e.item.type,
                    i += '" /></div><div class="sub-patent vertical-top"  style="',
                    i += e.translate ? "transform:translateX(" + e.translate + "px);" : "",
                    i += '"><div class="product-box p10 position-rel mr15 in-block vertical-top text-left"><div class="product-item-info ',
                    i += e.ratio ? "" : "img-not-radio",
                    i += '"><img src="',
                    i = "" + i + e.item.imageUrl,
                    i += '"><div class="font-info" ><p class="font-product-name">',
                    i = "" + i + e.item.name,
                    i += '</p><p class="font-product-intro"><span>',
                    i = "" + i + e.item.introduce,
                    i += "</span></p></div>",
                    !1 !== e.editable && (i += '<div class="product-operate mt8 pt10 text-right"><span class="mr20 point" onclick="addProduct(\'',
                        i = "" + i + e.container,
                        i += "',this,",
                        i = "" + i + e.ratio,
                        i += ');">编辑</span><span class="point" onclick="delectProduct(this);">删除</span></div>'),
                    i += "</div></div></div>",
                    i.trim()
            }
            ,
            a.partnerpagination = a["partnerpagination.ejs"] = function (t) {
                for (var e = t, i = "", s = e.partnerIndex ? e.partnerIndex : 0, a = e.perPage ? e.perPage : 3, n = (e.total && e.total,
                    e.partners && e.partners,
                    e.human ? e.human : null), o = n.partners.length > a + s ? a + s : n.partners.length, r = s; r < o; r++) {
                    var c = n.partners[r];
                    i += '<div class="human-relate in-block pl5 f13 vertical-top" onclick="toHumanDetail(event,',
                        i = i + (c.hid + ",") + c.cid + ",true",
                        i += ')">',
                        c.headUrl ? (i += '<div class="human-image-sm in-block vertical-top" onmouseenter="headShow(this)" onmouseleave="headHide(this)"><div class="imageouter"><img src="',
                            i = "" + i + c.headUrl,
                            i += '" alt="." class="vertical-top" ></div><div class="position-abs imgexpand zIn10 b-c-white expand-lg-p1 collapse"  ><img src="',
                            i = "" + i + c.headUrl,
                            i += '"  class=\'img vertical-top\' alt="."   /></div></div>') : (i += '<div class="human-image-sm in-block vertical-top "  ><div class="letter">',
                                i = "" + i + c.name[0],
                                i += "</div></div>"),
                        i += '<div class=" in-block vertical-top pl5" ><a class="c9 human-relate-intro overflow-width pt2 in-block" target="_blank" href="/human/',
                        i = i + (c.hid + "-c") + c.cid,
                        i += '" onclick="common.stopPropagation(event)" title="',
                        i = "" + i + c.name,
                        i += '">',
                        i = "" + i + c.name,
                        i += '</a><div class="sec-c3 human-relate-intro overflow-width pt4" title="',
                        i = "" + i + c.companyName,
                        i += '">',
                        i = "" + i + c.companyName,
                        i += "</div></div></div>"
                }
                return i.trim()
            }
            ,
            a.patent = a["patent.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div class="popupHeader">国家知识产权信息(专利)</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td style="width: 10%;padding: 0;vertical-align: top;" colspan="2"><table class="table companyInfo-table sec-c2 modal-new-table" style="margin-top:0px;"><tbody><tr><td class="table-left" style="width: 20%;">申请公布号</td><td\n              style="width: 80%; word-break: break-all">',
                    i = "" + i + e.checkData(e.items.applicationPublishNum),
                    i += '</td></tr><tr><td class="table-left" style="width: 20%;">申请号</td><td style="width: 80%; word-break: break-all">',
                    i = "" + i + e.checkData(e.items.patentNum),
                    i += '</td></tr><tr><td class="table-left" style="width: 20%;">分类号</td><td style="width: 80%; word-break: break-all">',
                    i = "" + i + e.checkData(e.items.allCatNum),
                    i += '</td></tr></tbody></table></td><td style="width: 10%;" colspan="2"><img class=\'whundred\' src="',
                    i = "" + i + (e.items.imgUrl ? e.items.imgUrl : "https://static.tianyancha.com/wap/images/patent_def.jpg"),
                    i += '" onerror="this.src=\'https://static.tianyancha.com/wap/images/patent_def.jpg\'"  alt="',
                    i = "" + i + e.items.patentName,
                    i += '"></td></tr><tr><td class="table-left" style="width: 10%;">发明名称</td><td style="width: 40%; word-break: break-all;">',
                    i = "" + i + e.checkData(e.items.patentName),
                    i += '</td><td class="table-left" style="width: 10%;">地址</td><td style="width: 40%; word-break: break-all">',
                    i = "" + i + e.checkData(e.items.address),
                    i += '</td></tr><tr><td class="table-left">发明人</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.inventor),
                    i += '</td><td class="table-left">申请人</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.applicantName),
                    i += '</td></tr><tr><td class="table-left">申请日</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.applicationTime),
                    i += '</td><td class="table-left">申请公布日</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.applicationPublishTime),
                    i += '</td></tr><tr><td class="table-left">代理机构</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.agency),
                    i += '</td><td class="table-left">代理人</td><td style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.agent),
                    i += '</td></tr><tr><td class="table-left">摘要</td><td colspan="3"><div style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.abstracts),
                    i += "</div></td></tr></table></div>",
                    i.trim()
            }
            ,
            a.pdfpage = a["pdfpage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="notice-content pt15 pl20 pr20" style="" id="notice-content">',
                    e.pages ? e.pages.forEach(function (t, s) {
                        i += '<div class="notice-page new-border mb15 pl25 pr25 pt30 pb40 position-rel" id="notice_page_',
                            i = "" + i + (s + 1),
                            i += '"><div class="notice-page-logo position-abs"></div><div>',
                            i = "" + i + t.PageContent,
                            i += '</div><div class="notice-pageNo c-s-gray f12">第',
                            i = "" + i + t.PageNo,
                            i += "页（共",
                            i = "" + i + e.pages.length,
                            i += "页）</div></div>"
                    }) : i += '<div class="notice-page new-border mb15 pl20 pr20 pt60 pb60 position-rel text-center collapse in"><div class="notice-page-logo position-abs"></div>\x3c!--<div class="c-content f18  pt15 pb15">pdf下载提示</div>--\x3e<div class="pt60"><img src="https://static.tianyancha.com/wap/images/notice-redownload.jpg" alt="."/></div><div style="" class="pb30"><div  class="in-block pt40 f16 sec-c1 pb30 lh30" style="width:65%;">已停止下载，请手动关闭整个页面或点击再次下载</div><div class="pb80"><span class="in-block button-blue-lg pl50 pr50" onclick="startDownload()">再次下载</span></div></div></div>',
                    i += "</div>",
                    i.trim()
            }
            ,
            a.phonePop = a["phonePop.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader pt3 pb3">更多联系电话</div></div><div class="modal-body text-center sec-c3"><div class="pb10">',
                    e.items && e.items.forEach(function (t, e) {
                        i += "<div>",
                            i = "" + i + t,
                            i += "</div>"
                    }),
                    i += '</div><div class="button-blue-sm ml30 mr30" onclick="closeModal()">确定</div></div>',
                    i.trim()
            }
            ,
            a.privatetip = a["privatetip.ejs"] = function (t) {
                var e = "";
                return e += '<div class="modal-new-header" ><div class="popupHeader">协会提示</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><div class="private-indent">私募基金管理人规模类、提示类公示信息均来源于中国证券投资基金业协会已登记私募基金管理人提供的信息，基金管理人已书面承诺所有填报信息真实、准确、完整，并承诺承担所有相关法律责任。</div><div class="private-indent">中国证券投资基金业协会对私募基金登记备案信息不做实质性事前审查。公示信息不构成对私募基金管理人投资管理能力、持续合规情况的认可，不作为基金资产安全的保证。</div><div class="private-indent">投资者进行私募基金投资时须谨慎判断和识别风险。</div><div class="private-indent">社会公众若发现私募基金管理人分类公示信息中存在任何虚假或不实内容，请致电协会投诉电话：<a>010-66578241</a>，请将相关实名举报或投诉情况发送至邮箱：<a>pf@amac.org.cn</a>，或发送至传真<a>010-66578256</a>，或邮寄至中国证券投资基金业协会（地址：北京市西城区金融大街20号交通银行大厦B座9层，邮编100033）。</div><div class="private-indent">列入分类公示的私募基金管理人如对分类公示有异议，请发函至邮箱：<a>pf@amac.org.cn</a>。</div></div>',
                    e.trim()
            }
            ,
            a.product = a["product.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">产品信息</div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="28%">产品名称：</td><td>',
                    i = "" + i + e.checkData(e.items.name),
                    i += '</td></tr><tr><td class="table-left">产品简称：</td><td>',
                    i = "" + i + e.checkData(e.items.filterName),
                    i += '</td></tr><tr><td class="table-left">产品分类：</td><td>',
                    i = "" + i + e.checkData(e.items.type),
                    i += '</td></tr><tr><td class="table-left">领域：</td><td>',
                    i = "" + i + e.checkData(e.items.classes),
                    i += '</td></tr><tr><td class="table-left">描述：</td><td>',
                    i = "" + i + e.checkData(e.items.brief),
                    i += "</td></tr></table></div>",
                    i.trim()
            }
            ,
            a.productInfo = a["productInfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" ><div class="popupHeader">私募基金公示信息</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><table class="table companyInfo-table sec-c2 modal-new-table"><tbody><tr><td class="table-left">基金名称：</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.manager_name),
                    i += '</td></tr><tr><td class="table-left">基金编号：</td><td>',
                    i = "" + i + e.checkData(e.items.fund_no),
                    i += '</td><td class="table-left">成立时间：</td><td>',
                    i = "" + i + e.checkData(e.items.est_date),
                    i += '</td></tr><tr><td class="table-left">备案时间：</td><td>',
                    i = "" + i + e.checkData(e.items.filing_date),
                    i += '</td><td class="table-left">基金备案阶段：</td><td>',
                    i = "" + i + e.checkData(e.items.filing_stage),
                    i += '</td></tr><tr><td class="table-left">基金类型：</td><td>',
                    i = "" + i + e.checkData(e.items.fund_type),
                    i += '</td><td class="table-left">币种：</td><td>',
                    i = "" + i + e.checkData(e.items.money_type),
                    i += '</td></tr><tr><td class="table-left">基金管理人名称：</td><td>',
                    i = "" + i + e.checkData(e.items.fund_name),
                    i += '</td><td class="table-left">管理类型：</td><td>',
                    i = "" + i + e.checkData(e.items.manager_type),
                    i += '</td></tr><tr><td class="table-left">托管人名称</td><td>',
                    i = "" + i + e.checkData(e.items.manager_name),
                    i += '</td><td class="table-left">运作状态：</td><td>',
                    i = "" + i + e.checkData(e.items.operation_status),
                    i += '</td></tr></tbody></table><h5 class="text-center">信息披露情况</h5><table class="table companyInfo-table sec-c2 modal-new-table"><tbody><tr><td class="table-left">月报：</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.monthly_report),
                    i += '</td></tr><tr><td class="table-left">半年报：</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.half_year_report),
                    i += '</td></tr><tr><td class="table-left">年报：</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.year_report),
                    i += '</td></tr><tr><td class="table-left">季报：</td><td colspan="3" style="word-break:break-all;">',
                    i = "" + i + e.checkData(e.items.quarterly_report),
                    i += "</td></tr></tbody></table></div>",
                    i.trim()
            }
            ,
            a.project = a["project.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">捐赠详情</div></div><div class="modal-body"><div class="sec-c3" style="line-height: 30px"><div>基金会名称：<span class="sec-c2">',
                    i = "" + i + e.checkData(e.items.name),
                    i += '</span></div><div>执行年度：<span class="sec-c2">',
                    i = "" + i + e.checkData(e.items.year),
                    i += '</span></div><div>资金用途：<span class="sec-c2">',
                    i = "" + i + e.checkData(e.items.fundUse),
                    i += '</span></div><div>收益群体：<span class="sec-c2">',
                    i = "" + i + e.checkData(e.items.groups),
                    i += "</span></div>",
                    e.items.projectBrief && (i += '<div class="mt40">项目简介：<span class="sec-c2">',
                        i = "" + i + e.checkData(e.items.projectBrief),
                        i += "</span></div>"),
                    e.items.largePaymentObject && (i += '<div class="mt40">大额支付对象：</div><table class="table companyInfo-table f14"><thead><tr><th>机构名称</th><th>机构类型</th><th>支付金额（万元）</th></tr></thead><tbody>',
                        e.items.largePaymentObject.forEach(function (t, e) {
                            i += "<tr><td>",
                                i = "" + i + t.name,
                                i += "</td><td>",
                                i = "" + i + t.type,
                                i += "</td><td>",
                                i = "" + i + t.amount,
                                i += "</td></tr>"
                        }),
                        i += "</tbody></table></div>"),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.provRepeat = a["provRepeat.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    e.provarr && e.provarr.forEach(function (t, s) {
                        i += '<span class="prov-item in-block point ',
                            i += e.sel == t.name ? "active" : "",
                            i += '" onclick="selProv(',
                            i = "" + i + s,
                            i += ",'",
                            i = "" + i + e.type,
                            i += "',this)\">",
                            i = "" + i + t.name,
                            i += "</span>"
                    }),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.punishCreditchinaPopup = a["punishCreditchinaPopup.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">行政处罚</div></div><div class="modal-body new-c2" style="line-height: 30px;"><img src="',
                    i = "" + i + e.items.url,
                    i += '" alt="" width="100%"></div>',
                    i.trim()
            }
            ,
            a.punishPopup = a["punishPopup.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div><div class="popupHeader">行政处罚</div></div><div class="modal-body " ><table class="table companyInfo-table sec-c2 modal-new-table"><tr><td class="table-left" width="28%">决定书文号：</td><td>',
                    i = "" + i + e.strFilter(e.items.punishNumber, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >类型：</td><td>',
                    i = "" + i + e.strFilter(e.items.type, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >处罚内容：</td><td>',
                    i = "" + i + e.strFilter(e.items.content, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >决定日期：</td><td>',
                    i = "" + i + e.dateFormat(e.items.decisionDate, "未公示", "int"),
                    i += '</td></tr><tr><td class="table-left" >决定机关：</td><td>',
                    i = "" + i + e.strFilter(e.items.departmentName, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >法人：</td><td>',
                    i = "" + i + e.strFilter(e.items.legalPersonName, "未公示"),
                    i += '</td></tr><tr><td class="table-left" >备注：</td><td>所报材料真实合法，一切责任由当事人自负。</td></tr></table></div>',
                    i.trim()
            }
            ,
            a.receiptApp = a["receiptApp.ejs"] = function (t) {
                var e = "";
                return e += '<div class="receiptPopup"><div class="close_btn_popup position-abs point" style="right: 15px;top: 10px;" ng-click="cancel()"></div><div class="in-block vertical-top group_add" style="" ><div class="text-center pt28 pb20 f22 user-bottom-border"><span class="c9 pr15">扫码下载APP</span><span>获取开发票服务</span></div><div class="img-box b-c-gray">\x3c!--receipt_app--\x3e<img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/fapiao3.png"  alt="" class="w100"></div></div></div>',
                    e.trim()
            }
            ,
            a.report = a["report.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="text-center pb30 b-c-gray"><div class="report514_title text-center c-white f18 mb30">企业信用报告</div><span class="modal-close-btn" ng-click="cancel()" style="z-index: 2000;color: #fff"><i class="tic tic-close"></i></span><div><div class="report_left_box text-center in-block b-c-white new-border p20 mr30" style="width: 340px;height: 588px;"><a target="_blank" href="',
                    i = "" + i + e.items.reportUrl.basicReportPreurl,
                    i += '"\n         class="f14 float-right vipColor">样例></a><div class="font-bold f24 sec-c2 mt25 mb35">基础版</div><div class="new-red" style="font-size: 28px;line-height: 28px;"><span class="f14 pr5 vertical-top in-block">¥</span><span class="in-block vertical-top font-bold">0</span></div>',
                    e.items.reportUserStatus && (i += '<div class="sec-c4 mb35 mt13">当日还可免费下载<span class="new-red">',
                        i = "" + i + e.items.reportUserStatus.newTimeAlert,
                        i += "</span>次</div>"),
                    1 == e.items.reportUserType ? (i += '<div class="button-yel-lg" style="width: 130px;" onclick="report.payReportLast(0,0,\'',
                        i = "" + i + e.items.reportUrl.basicOverPlus,
                        i += '\')" tyc-event-click tyc-event-ch="CompangyDetail.Report.Login.base">登录购买</div>') : (i += '<div class="button-yel-lg" style="width: 130px;" onclick="report.payReportLast(0,0,\'',
                            i = "" + i + e.items.reportUrl.basicOverPlus,
                            i += '\')" tyc-event-click tyc-event-ch="CompangyDetail.Report.Buy.base">立即购买</div>'),
                    i += '<div class="sec-c3 f14 pt30"><ul class="in-block text-left pl0" style="line-height: 30px;"><li>基本工商信息</li><li>股东信息</li><li>司法风险信息</li><li>知识产权信息</li><li>经营异常信息</li><li>企业年报</li></ul></div></div><div class="report_right_box text-center in-block b-c-white new-border p20 vertical-top" style="width: 340px;height: 588px;"><a target="_blank" href="',
                    i = "" + i + e.items.reportUrl.profeReportPreurl,
                    i += '"\n         class="f14 float-right vipColor">样例></a><div class="font-bold f24 sec-c2 mt25 ',
                    i += (e.items.reportNew.overPlus,
                        "mb35"),
                    i += '">专业版</div>',
                    2 == e.items.reportUserType ? i += '<div class="new-red" style="font-size: 28px;line-height: 28px;"><span class="f14 pr5 vertical-top in-block">¥</span><span class="in-block vertical-top font-bold">20</span></div><div class="mb35 mt13"><a class="c9" target="_blank" href="/vipintro">VIP会员0元购 ></a></div>' : (i += '<div class="new-red" style="font-size: 28px;line-height: 28px;"><span class="f14 pr5 vertical-top in-block">¥</span><span class="in-block vertical-top font-bold">10</span></div>',
                        e.items.reportNew && e.items.reportNew.overPlus && (i += '<div class="sec-c4 pt13">当日还可免费下载<span class="new-red">',
                            i = "" + i + e.items.reportNew.overPlus,
                            i += "</span>次</div>"),
                        i += '<div class="sec-c4 ',
                        i += e.items.reportNew.overPlus ? "mb10 mt5" : "mb35 mt13",
                        i += '"><span>券后价：',
                        i = "" + i + e.items.reportNew.discoverAmount,
                        i += '</span><span class="pl10">可用券数量：',
                        i = "" + i + e.items.reportNew.coupanNum,
                        i += "</span></div>"),
                    1 == e.items.reportUserType ? i += '<div class="button-yel-lg" style="width: 130px;" onclick="report.payReport(2,0);" tyc-event-click tyc-event-ch="CompangyDetail.Report.Login.zhuanye">登录购买</div>' : i += '<div class="button-yel-lg" style="width: 130px;" onclick="report.payReport(2,0);" tyc-event-click tyc-event-ch="CompangyDetail.Report.Buy.zhuanye">立即购买</div>',
                    i += '<div class="sec-c3 f14 pt30"><ul class="in-block text-left pl0" style="line-height: 30px;"><li>基本工商信息</li><li>股东信息</li><li>司法风险信息</li><li>知识产权信息</li><li>经营异常信息</li><li>企业年报</li><li>主要人员详细信息</li><li>企业联系方式</li><li>注册资本组成成分</li></ul></div></div></div></div>',
                    i.trim()
            }
            ,
            a.riskdetect = a["riskdetect.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="b-c-white"><div class="risk-box risk-box-left position-abs "><div class="vipcontentHeader vipBgColor"><div style=" width: 100%; text-align: center;;" class="text-center f16 c-white"><div class="risk_logo"></div><span class="risk-popup-title">天眼风险 ——',
                    i = "" + i + (e.name ? e.name : "风险评测结果"),
                    i += '</span><div class=\'c-white f12 point position-abs\' style="right: 22px;top:12px;" onclick="footer.complain.cancel()"><i class="tic tic-close"></i></div></div></div><div class="vipcontentBody riskboxbody b-c-white"><div class="risk-hidebox hide"></div></div><div class="risk-bottom new-border-top"></div></div><div class="risk-box risk-box-right position-abs "><div class="vipcontentHeader vipBgColor"><div style=" width: 100%; text-align: center;;" class="text-center f16 c-white"><div class="position-abs c-white riskreturnbtn point f16" onclick="risk.returnleft()"><i class="tic tic-angle-left" aria-hidden="true"></i></div><div class="risk_logo"></div><span class="risk-popup-title">天眼风险 ——',
                    i = "" + i + (e.name ? e.name : "风险评测结果"),
                    i += '</span><div class=\'c-white f12 point position-abs\' style="right: 22px;top:12px;" onclick="footer.complain.cancel()"><i class="tic tic-close"></i></div></div></div><div class="vipcontentBody riskboxouter pt30 pb20 pl40 pr40 b-c-white"><div class="risk-modal-content "></div></div><div class="risk-bottom new-border-top"></div></div></div>',
                    i.trim()
            }
            ,
            a.risklimit = a["risklimit.ejs"] = function (e) {
                var i = e
                    , s = "";
                return s += '<div class="b-c-white"><div class="risk-box"><div class="vipcontentHeader vipBgColor"><div style=" width: 100%; text-align: center;;" class="text-center f16 c-white"><div class="risk_logo"></div><span class="risk-popup-title">',
                    s = "" + s + (i.vipMessage ? i.vipMessage : "普通用户每天在电脑端可使用1次，<em>VIP会员每天可使用10次</em>"),
                    s += '</span><div class=\'c-white f12 point position-abs\' style="right: 22px;top:12px;" onclick="footer.complain.cancel()"><i class="tic tic-close"></i></div></div></div><div class="riskMaskBox vipcontentBody riskboxouter b-c-white">',
                    s = "" + s + function (e, i) {
                        return t(e, i)
                    }("vipContent", {
                        viptype: 2,
                        title: i.vipMessage ? i.vipMessage : "普通用户每天在电脑端可使用1次，<em>VIP会员每天可使用10次</em>",
                        tyceventname: i.tyceventname,
                        showVipBottomBtn: !0,
                        isHideTitle: !0,
                        isShowAPP: !0
                    }),
                    s += '</div><div class="risk-bottom new-border-top"></div></div></div>',
                    s.trim()
            }
            ,
            a.riskpopup = a["riskpopup.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    "dishonest" == e.popuptype && (i += '<div><div class=""><div class="risk-head risk-head-vip">失信人详情</div></div><div class=""><table class="table companyInfo-table"><tr ><td class="table-left" width="28%">名称</td><td>',
                        i = "" + i + e.strFilter(e.items.iname),
                        i += '</td></tr><tr ng-if="locals.items.businessentity"><td class="table-left">法定代表人</td><td>',
                        i = "" + i + e.strFilter(e.items.businessentity),
                        i += '</td></tr><tr ><td class="table-left">身份证号／组织机构代码</td><td>',
                        i = "" + i + e.strFilter(e.items.cardnum),
                        i += '</td></tr><tr ><td class="table-left">执行依据文号</td><td>',
                        i = "" + i + e.strFilter(e.items.gistid),
                        i += '</td></tr><tr ><td class="table-left">案号</td><td>',
                        i = "" + i + e.strFilter(e.items.casecode),
                        i += '</td></tr><tr ><td class="table-left">做出执行依据单位</td><td>',
                        i = "" + i + e.strFilter(e.items.gistunit),
                        i += '</td></tr><tr ><td class="table-left">法律生效文书确定的义务</td><td>',
                        i = "" + i + e.strFilter(e.items.duty),
                        i += '</td></tr><tr ><td class="table-left">被执行人的履行情况</td><td>',
                        i = "" + i + e.strFilter(e.items.performance),
                        i += '</td></tr><tr ><td class="table-left">执行法院</td><td>',
                        i = "" + i + e.strFilter(e.items.courtname),
                        i += '</td></tr><tr ><td class="table-left">省份</td><td>',
                        i = "" + i + e.strFilter(e.items.areaname),
                        i += '</td></tr><tr ><td class="table-left">立案时间</td><td>',
                        i = "" + i + e.dateFormat(e.items.regdate, "", "int"),
                        i += '</td></tr><tr ><td class="table-left">发布时间</td><td>',
                        i = "" + i + e.dateFormat(e.items.publishdate, "", "int"),
                        i += "</td></tr></table></div></div>"),
                    "equity" == e.popuptype && (i += '<div><div class="pt30"><div class="risk-head risk-head-vip">股权出质详情</div></div><div class="new-border-top new-border-bottom"><div class="new-c2 pt5" style="line-height: 30px"><div>登记日：<span class="new-c3">',
                        i = "" + i + e.dateFormat(e.items.regDate, "", "int"),
                        i += '</span></div><div>登记编号：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.regNumber),
                        i += '</span></div><div>状态：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.state),
                        i += '</span></div><div>出质股权数额：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.equityAmount),
                        i += '</span></div><div >出质人：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.pledgor),
                        i += '</span></div><div >出质人证件号码：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.certifNumber, "未公示"),
                        i += '</span></div><div >质权人：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.pledgee),
                        i += '</span></div><div >质权人号码：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.certifNumberR, "未公示"),
                        i += '</span></div><div class="f12 new-info pb5">备注：<span class="">所报材料真实合法，一切责任由当事人自负。</span></div></div></div></div>'),
                    "mortgage" == e.popuptype && (i += '<div><div class=""><div class="risk-head risk-head-vip">动产抵押详情</div></div><div class="modal-body new-c2" style="line-height: 30px;"><div class="mt10"><div>登记编号：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.regNum, "未公示"),
                        i += '</span></div><div>登记机关：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.regDepartment, "未公示"),
                        i += '</span></div><div>登记日期：<span   class="new-c1">',
                        i = "" + i + e.dateFormat(e.items.baseInfo.regDate, "未公示", "int"),
                        i += '</span></div><div>状态：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.status, "未公示"),
                        i += '</span></div><div>被担保债权类型：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.type, "未公示"),
                        i += '</span></div><div>被担保债权数额：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.amount, "未公示"),
                        i += '</span></div><div>债务人履行债务期限：<span class="new-c1">',
                        e.strFilter(e.items.baseInfo.overviewTerm, "未公示"),
                        i += '</span></div><div>担保范围：<span class="new-c1">',
                        i = "" + i + e.strFilter(e.items.baseInfo.scope, "未公示"),
                        i += '</span></div><div>备注：<span class="new-info">所报材料真实合法，一切责任由当事人自负。</span></div></div>',
                        e.items.peopleInfo && e.items.peopleInfo.forEach(function (t) {
                            i += '<div ><div>抵押权人名称：<span class="new-c1">',
                                i = "" + i + e.strFilter(t.peopleName),
                                i += '</span></div><div>抵押权人证照／证件类型：<span class="new-c1">',
                                i = "" + i + e.strFilter(t.liceseType),
                                i += '</span></div><div>证件／证照号码：<span class="new-c1">',
                                e.strFilter(t.licenseNum),
                                i += "</span></div></div>"
                        }),
                        e.items.pawnInfoList && e.items.pawnInfoList.forEach(function (t) {
                            i += '<div class="mt10" ><div><div>名称：<span class="new-c1">',
                                i = "" + i + e.strFilter(t.pawnName),
                                i += '</span></div><div>所有权归属：<span class="new-c1">',
                                i = "" + i + e.strFilter(t.ownership),
                                i += '</span></div><div>数量、质量、状况、所在地等情况：<span class="new-c1">',
                                i = "" + i + e.strFilter(t.detail),
                                i += '</span></div></div><div>备注：<span class="new-info">',
                                i = "" + i + e.strFilter(t.remark, "--"),
                                i += "</span></div></div>"
                        }),
                        e.items.changeInfoList && e.items.changeInfoList.forEach(function (t) {
                            i += '<div class="mt10" ><div class="block-status status-chg">变更</div><div class="status-content"><div>时间:<span class="new-c1">',
                                i = "" + i + e.strFilter(t.changeDate),
                                i += '</span></div><div>原因:<span class="new-c1">',
                                i = "" + i + e.strFilter(t.changeContent),
                                i += "</span></div></div></div>"
                        }),
                        e.items.baseInfo.cancelDate && (i += '<div class="info-status" ><div class="block-status status-dis">注销</div><div class="status-content"><div>时间:<span>',
                            i = "" + i + e.strFilter(e.items.baseInfo.cancelDate),
                            i += "</span></div><div>原因:<span>",
                            i = "" + i + e.strFilter(e.items.baseInfo.cancelReason),
                            i += "</span></div></div></div>"),
                        i += "</div></div>"),
                    "punish" == e.popuptype && (i += '<div><div class=""><div class="risk-head risk-head-vip">行政处罚详情</div></div><div class="modal-body new-c2" style="line-height: 30px;"><div>决定书文号：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.punishNumber, "未公示"),
                        i += '</span></div><div>类型：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.type, "未公示"),
                        i += '</span></div><div>处罚内容：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.content, "未公示"),
                        i += '</span></div><div>决定日期：<span class="new-c3">',
                        e.dateFormat(e.items.decisionDate, "未公示", "int"),
                        i += '</span></div><div >决定机关：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.departmentName, "未公示"),
                        i += '</span></div><div>法人：<span class="new-c3">',
                        i = "" + i + e.strFilter(e.items.legalPersonName, "未公示"),
                        i += '</span></div><div>备注：<span class="new-info">所报材料真实合法，一切责任由当事人自负。</span></div></div></div>'),
                    i += "</div>",
                    i.trim()
            }
            ,
            a["ruby-order-succ"] = a["ruby-order-succ.ejs"] = function (t) {
                var e = "";
                return e += '<div class=""><div class="modal-new-header" ><div class=\'popupHeader\'>上市公告/政策法规专项查询</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n        class="tic tic-close"></i></div></div><div class="modal-body pl50 pr50 text-center pt20 pb40"><div><i class="tic tic-xuanzhong-o vipColor f45"></i></div><div class="f18 sec-c1 pt5">您已支付成功</div><div><a href="/usercenter/myorder">我的订单</a></div></div></div>',
                    e.trim()
            }
            ,
            a.searchVipPop = a["searchVipPop.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup"><div class="close_btn position-abs point" style="right: 15px;top: 10px;" ng-click="cancel()"></div>',
                    1 == e.items.fromSearch && (i += '\x3c!--数据导出--\x3e<div ng-if="items.fromSearch==1"><div class="text-center f14 new-c1 pt50">成为VIP会员，即可批量导出企业联系方式</div><div class="mt20 text-center"><span href-new-event event-name="数据导出成为VIP" is-need-state=\'true\' ng-click="searchToVip();" class="vipBG_buttom c-white f16 text-center pt10 point in-block">成为VIP会员</span></div><div class="mt20 mb20 text-center"><span ng-click="dataWatch()" class="in-block point ml20  c9 border-blue-bottom" style="">数据预览</span></div></div>'),
                    2 == e.items.fromSearch && (i += '\x3c!--高级筛选--\x3e<div ng-if="items.fromSearch==2"><div class="text-center f14 new-c1 pt50" style="line-height: 24px;">成为VIP会员，即可使用高级筛选条件<br>更加精确查看企业结果</div><div href-new-event event-name="高级筛选成为VIP" is-need-state=\'true\' class="vipBG_buttom margin-auto mb20 mt20 f16 c-white text-center pt10 point" onclick="searchToVip();">立即成为VIP</div></div>'),
                    3 == e.items.fromSearch && (i += '\x3c!--提示登录--\x3e<div ng-if="items.fromSearch==3"><div class="text-center f14 new-c1 pt50">登录之后，即可批量导出企业联系方式</div><div class="mt20 text-center"><span href-new-event event-name="搜索结果-数据导出-登录" is-need-state=\'true\'  ng-click="searchLogin();" class="vipBG_buttom c-white f16 text-center pt10 point in-block">立即登录</span></div><div class="mt20 mb20 text-center clearfix"><span ng-click="dataWatch()" class="float-left in-block point ml30 c9 border-blue-bottom" style="">数据预览</span><span class="float-right line_bottom point in-block new-c9 mr30" ng-click="checkByPhone(\'register\');;">没有账号？立即注册>></span></div></div>'),
                    2 == e.items.fromHuman && (i += '\x3c!--人名去重vip--\x3e<div ng-if="items.fromHuman==2"><div class="text-center new-c2 f14 pt60"><div style="line-height: 24px;">普通会员每天最多有3次查看机会，<br>成为VIP会员之后可无限查看。</div><div class="check_btn mt20 mb20 point canClick" ng-click="searchToVip();">立即成为VIP</div></div></div>'),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.selectBusLabels = a["selectBusLabels.ejs"] = function (t) {
                var e = t
                    , i = "";
                if (i += '<div class="modal-fix-placeholder"><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">常用业务标签</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl20 pr0 sec-c1 "><div class="select-busLabels-area">',
                    e.items)
                    for (var s in e.items)
                        i += '<div class="select-item-container" ><p>',
                            i = "" + i + e.items[s].catename,
                            i += "</p>",
                            e.items[s][s + "_list"] && e.items[s][s + "_list"].forEach(function (t, s) {
                                i += '<span onclick="selectBusLabelItem(this);" class="f14 pl10 pr10 pt5 pb5 select-item mr20  position-rel float-left ',
                                    i += e.selectedNames && e.selectedNames[t] ? "action" : "",
                                    i += '">',
                                    i = "" + i + t,
                                    i += '<span class="position-abs tic tic-tijiao select-item-action"></span></span>'
                            }),
                            i += "</div>";
                return i += '</div><div class="add-product-save-container mt30"><div ng-click="cancel()">取消</div><div onclick="saveSelectedBusLables();"   class="save-btn">保存</div></div><div class="mt20 text-center new-err collapse errMsgaddpopup in"><span style="margin-left:-30px;"></span></div></div></div>',
                    i.trim()
            }
            ,
            a.sendemail = a["sendemail.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    "email" == e.items.popuptype && (i += '<div class="pl22 pr22 pb22" ng-if="items.popuptype==\'email\'"><div class="close_btn_popup position-abs point" style="right: 15px;top: 10px;" ng-click="cancel()"></div><div class="text-center f18 pt35 pb18 user-bottom-border"><span class="blueborder">请填入接收邮箱</span></div><div class="pb16 mt40 clearfix"><div class="order-email-outer w100"><input type="text" class="order-email w100 sendemailname" onfocus="common.mouseHideBySelElem(\'.sendemailerrMsg\')" ng-model=\'items.email\'\n               placeholder="请输入电子邮箱"/><i class="tic tic-envelope" aria-hidden="true"></i></div></div><div class="new-err sendemailerrMsg collapse"></div><div class="check_btn_popup margin-auto text-center f18 point mt16 mb30" onclick=\'sendEmail(this,"',
                        i = "" + i + e.items.orderId,
                        i += '","',
                        i = "" + i + e.items.typeDirType,
                        i += '"',
                        i += e.items.human ? ',"' + e.items.human.job + '"' : "",
                        i += e.items.human ? ',"' + e.items.human.humanName + '"' : "",
                        i += ")'>发&nbsp;&nbsp;&nbsp;&nbsp;送</div></div>"),
                    "selType" == e.items.popuptype && (i += '<div class="pl22 pr22 pb22" ng-if="items.popuptype==\'selType\'"><div class="close_btn_popup position-abs point" style="right: 15px;top: 10px;" ng-click="cancel()"></div><div class="text-center f18 pt35 pb18 user-bottom-border"><span class="blueborder">选择格式</span></div><div class="pb16 mt40 clearfix text-center"><div class="in-block popupIconBox vertical-top ml6 _selCheckbtn active"\n           ng-class="{\'active\':items.selCheck==\'pdf\'}" onclick="selCheck(this,\'pdf\',\'',
                        i = "" + i + e.items.url,
                        i += '\')" style=""><div class="popupIconPdf margin-auto mb15 mt40"></div><div class="mb15 "><span class="popupIconCircle"><i></i></span></div></div>',
                        "2" == e.items.docType && (i += "<div ng-hide=\"items.docType != '2'\" class=\"in-block popupIconBox _selCheckbtn vertical-top ml6\" ng-class=\"{'active':items.selCheck=='word'}\"\n           onclick=\"selCheck(this,'word','",
                            i = "" + i + e.items.url,
                            i += '\')" style=""><div class="popupIconWord margin-auto mb15 mt40"></div><div class="mb15 "><span class="popupIconCircle"><i></i></span></div></div>'),
                        i += '</div><div class="new-err selTypeerrMsg" ></div><div class="text-center"><a target="_blank"  href="',
                        i = i + "/report/downloadReport.json?type=" + ("word" == e.items.selCheck ? "2" : "1") + "&fileName=" + e.items.url,
                        i += '" class="check_btn_popup margin-auto in-block text-center f18 point mt16 mb30 _order_downloadurl c-white-hover">确&nbsp;&nbsp;&nbsp;&nbsp;定</a></div></div>'),
                    i += "</div>",
                    i.trim()
            }
            ,
            a.seniorPeople = a["seniorPeople.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader">高管信息</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body"><div class="new-border over-hide mb30 f14"><div class="float-left in-block b-c-subgray pt25 pl15 pr15 pb25 new-border-right" style="width: 220px;"><div class="f24 new-c9 mb20">',
                    i = "" + i + e.strFilter(e.items.name),
                    i += '</div><div class="new-c3 mb20">',
                    i = "" + i + e.strFilter(e.items.position),
                    i += '</div><div class="new-c3 mb20"><span>',
                    i = "" + i + e.strFilter(e.items.sex),
                    i += "</span><span>",
                    i = "" + i + e.strFilter(e.items.age),
                    i += "</span><span>",
                    i = "" + i + e.strFilter(e.items.education),
                    i += '</span></div><div class="mb20"><span class="new-c2">薪酬：</span><span>',
                    i = "" + i + e.strFilter(e.items.salary),
                    i += '</span></div><div class="mb20"><span class="new-c2">持股数：</span><span>',
                    i = "" + i + e.strFilter(e.items.numberOfShares),
                    i += '</span></div><div class="mb20"><span class="new-c2">公告日期：</span><span>',
                    i = "" + i + e.strFilter(e.items.reportDate),
                    i += '</span></div><div><span class="new-c2">本届任期：</span><span>',
                    i = "" + i + e.strFilter(e.items.term),
                    i += '</span></div></div><div class="float-right in-block new-c3 pl20 pr20 pt25" style="width:635px; line-height: 30px;"><div >',
                    i = "" + i + e.strFilter(e.items.resume),
                    i += "</div></div></div></div>",
                    i.trim()
            }
            ,
            a.sortProductInfo = a["sortProductInfo.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="modal-fix-placeholder"><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">拖拽排序</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl20 pr20 sec-c1 "><div id="sort-multi">',
                    i.items && i.items.length > 0 && i.items.forEach(function (t, e) {
                        s += '<div class="test-title inline-block">',
                            s = "" + s + a("partEditCompanyInfo.ejs", {
                                item: t,
                                editable: !1,
                                ratio: i.ratio
                            }),
                            s += "</div>"
                    }),
                    s += '</div><div class="add-product-save-container mt30"><div ng-click="cancel()">取消</div><div onclick="saveSortProductItems(',
                    s = "" + s + i.ratio,
                    s += ');"   class="save-btn">保存</div></div><div class="mt20 text-center new-err collapse errMsgaddpopup in"><span style="margin-left:-30px;"></span></div></div></div>',
                    s.trim()
            }
            ,
            a.successmessage = a["successmessage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup pt15 pb15" style="color: #fff;"><div class="text-center"><div class="f16"><i class="tic tic-check-circle mr10"></i>',
                    i = "" + i + e.items.msg,
                    i += "</div></div></div>",
                    i.trim()
            }
            ,
            a.test = a["test.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header"><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div><div class="popupHeader">股权出质</div></div><div class="modal-body mortgage-info-modal"><div class="new-c2" style="line-height: 30px"><div>登记日：<span class="new-c3">',
                    i = "" + i + e.items.regDate,
                    i += '</span></div><div>登记编号：<span class="new-c3">',
                    i = "" + i + e.items.regNumber,
                    i += '</span></div><div>状态：<span class="new-c3">',
                    i = "" + i + e.items.state,
                    i += '</span></div><div>出质股权数额：<span class="new-c3">',
                    i = "" + i + e.items.equityAmount,
                    i += '</span></div><div >出质人：<span class="new-c3">',
                    i = "" + i + e.items.pledgor,
                    i += '</span></div><div >出质人证件号码：<span class="new-c3">',
                    i = "" + i + (e.items.certifNumber || "未公示"),
                    i += '</span></div><div >质权人：<span class="new-c3">',
                    i = "" + i + e.items.pledgee,
                    i += '</span></div><div >质权人号码：<span class="new-c3">',
                    i = "" + i + (e.items.certifNumberR || "未公示"),
                    i += '</span></div><div >备注：<span class="new-info">所报材料真实合法，一切责任由当事人自负。</span></div></div></div>',
                    i.trim()
            }
            ,
            a.userinfo = a["userinfo.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div><table class="table companyInfo-table"><thead><tr class="doctor-thead"><th colspan="2">以下是用户信息</th></tr></thead><tbody><tr class="doctor-tcontent"><td width="15%">用户登录状态</td><td >',
                    i += e.items ? "已登录" : "未登录",
                    i += "</td></tr>",
                    e.items ? (i += '<tr class="doctor-tcontent"><td width="15%">用户账户名</td><td >',
                        i = "" + i + e.items.mobile,
                        i += '</td></tr><tr class="doctor-tcontent"><td width="15%">抵扣券数量</td><td >',
                        i = "" + i + e.items.vnum,
                        i += "</td></tr>",
                        e.userObj && (i += '<tr class="doctor-tcontent"><td width="15%">用户类别</td><td >',
                            i = "" + i + e.userObj.usertypename,
                            i += "</td></tr>",
                            "VIP会员" == e.userObj.usertypename && (i += '<tr class="doctor-tcontent"><td width="15%">会员剩余天数</td><td id=\'\'>',
                                i = "" + i + e.items.surday,
                                i += "</td></tr>"),
                            e.userObj.permissionObj && (i += '<tr class="doctor-tcontent"><td width="15%">是否可查询天眼风险</td><td id=\'riskpermission_info\'>',
                                i += e.userObj.permissionObj.riskNum > 0 ? "是" : "否",
                                i += '</td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询老板信息</td><td id=\'humanpermission_info\'>',
                                i += e.userObj.permissionObj.humanNum > 0 ? "是" : "否",
                                i += '</td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询股权结构</td><td id=\'equitypermission_info\'>',
                                i += e.userObj.permissionObj.equityNum > 0 ? "是" : "否",
                                i += "</td></tr>")),
                        i += "\x3c!--",
                        i += '--\x3e\x3c!--<tr class="doctor-tcontent">--\x3e\x3c!--<td width="15%">用户错误状态</td>--\x3e\x3c!--<td id=\'riskpermission_info\'>',
                        i += "</td>--\x3e\x3c!--</tr>--\x3e\x3c!--",
                        i += '--\x3e\x3c!--<tr class="doctor-tcontent">--\x3e\x3c!--<td width="15%">token</td>--\x3e\x3c!--<td id=\'\' style="word-break: break-all;">',
                        i = "" + i + e.items.token,
                        i += "</td>--\x3e\x3c!--</tr>--\x3e") : i += '<tr class="doctor-tcontent"><td width="15%">是否可查询天眼风险</td><td id=\'riskpermission_info\'>否</td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询老板信息</td><td id=\'humanpermission_info\'>否</td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询股权结构</td><td id=\'equitypermission_info\'>否</td></tr>',
                    i += '<tr class="doctor-tcontent"><td width="15%">是否可查询分页(对外投资)</td><td id=\'pageidpermission_info\'></td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询分页(投资事件)</td><td id=\'pagenamepermission_info\'></td></tr><tr class="doctor-tcontent"><td width="15%">是否可查询分页(代理客户)</td><td id=\'pageuuidpermission_info\'></td></tr></tbody></table></div>',
                    i.trim()
            }
            ,
            a.verifyPhone = a["verifyPhone.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-fix-placeholder"><div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class="text-center f16 sec-c1 pb10">验证联系电话</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl30 pr30 sec-c1 "><div class="verify-phone-input-group"><div class="input-title">联系电话</div><div class="input-value"><input readonly  style="    cursor: not-allowed;" id="verifyPhoneReadOnly" type="text" value="',
                    i = "" + i + e.phone,
                    i += '" ></div></div><div class="verify-phone-input-group mt30"><div class="input-title">验证码</div><div class="input-value input-valid-code"><input onfocus="hideErrorInfo(\'errMsgsmsCode\');" id="smsCode" type="text"><div class="float-right text-center pt8 c-white f14 scode point scodebtn " id="smsCodeBtn" onclick="getSMSCode(2,\'SMS\',1)">获取验证码</div><div class="position-abs new-err collapse errMsgsmsCode in" style="top: 42px;"></div></div></div><div style="width:100%;" class="f14 pt5 text-right  voice-validata-container"><span onclick="changeCheckType(1,2);" class="point new-c9 voicescodebtn">无法接收手机短信？使用语音验证</span></div>\x3c!--<div class="pt5 dun-validata-container"></div>--\x3e\x3c!--<div class="base-info-input-group">--\x3e\x3c!--<div class="input-title">名称</div>--\x3e\x3c!--<div class="input-value"><input onfocus="hideErrorInfo(\'errMsgaddpopup\');" id="addProductItemName" type="text" ></div>--\x3e\x3c!--</div>--\x3e\x3c!--<div class="base-info-input-group">--\x3e\x3c!--<div class="input-title vertical-top">介绍</div>--\x3e\x3c!--<div class="input-value"><textarea onfocus="hideErrorInfo(\'errMsgaddpopup\');" id="addProductItemIntro"></textarea></div>--\x3e\x3c!--</div>--\x3e<div class="verify-btn-container mt20"><div onclick="verifyPhoneSms()">验证</div></div><div class="mt15 text-center new-err collapse errMsgVerifyPhone in"><span style="margin-left:-30px;"></span></div></div></div>',
                    i.trim()
            }
            ,
            a.vipBusiness = a["vipBusiness.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header" style="border-bottom: none;padding-bottom: 0;"><div class=\'text-center f16 sec-c1 pb10\'>VIP企业套餐</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body new-border-top pl50 pr50"><div class=" mt10 f18 sec-c1"><span>购买账号:</span><span>',
                    i = "" + i + e.sub,
                    i += '</span></div><div class="vip-head-b1 mt25 mb16">VIP会员套餐</div><div><div class="pt10 pb10"><span class="vip-order-left in-block new-border-right">套餐账户数</span><span class="vip-order-right">',
                    i = "" + i + e.index,
                    i += '</span></div><div class="pt10 pb10"><span class="vip-order-left in-block new-border-right">套餐时长</span><span class="vip-order-right">1年</span></div><div class="pt10 pb10"><span class="vip-order-left in-block new-border-right">到期时间</span><span class="vip-order-right">',
                    i = "" + i + e.dateFormat(e.expireTime, "", "int"),
                    i += '</span></div><div class=""><div class="in-block vertical-middle pr20"><span class="vip-order-left in-block new-border-right">实际支付</span><span class="vip-order-right"><s>&nbsp;¥',
                    i = "" + i + e.orignalprice * e.index,
                    i += '&nbsp;</s></span></div><span class="f30 new-red in-block vertical-middle">¥',
                    i = "" + i + e.index * e.price,
                    i += '</span></div></div><div class="vip-head-b1 mt20 mb16 ">支付方式<span class="pl15 new-red">支付完成后，可开发票</span></div><div class="mt20 margin-auto" ><div class="paymentType pb60 show-current-page-2"><div class="item point payment-type order-popup payBoxActive"><div class="wxpay margin-auto"></div><div class="rightTopTg position-abs rightTopTgAc"></div><i class="tic tic-check position-abs icon"></i></div><div class="item point payment-type order-popup payBoxNor" onclick="startAliPay(\'',
                    i = "" + i + e.orderId,
                    i += '\')"><div class="zfbpay margin-auto"></div><div class="rightTopTg position-abs rightTopTgAc"></div><i class="tic tic-check position-abs icon"></i></div><div class="mt25 margin-auto" style="width: 400px;"><div class=" in-block vertical-top wx_pay_box"><div text="qrtext" id="wxPayQrCode" class="wx_pay_scode"><canvas width="200" height="200"></canvas></div><div class="f14 new-c1"><i class="tic tic-saoyisao f40 pr5"></i><div class="in-block">打开手机端微信<br>扫一扫继续付款</div></div></div><div class="wx_pay_jc in-block vertical-top mt30"></div></div></div></div></div>',
                    i.trim()
            }
            ,
            a.vipBusinessIntro = a["vipBusinessIntro.ejs"] = function (t) {
                var e = t
                    , i = ""
                    , s = e.type || "common"
                    , a = e.tleft || "32px"
                    , n = e.cleft || "";
                return "common" === s ? (i += '<span class="discribeBox block text-left" style="font-weight:100;cursor:default;"><div class="triangle-with-shadow" style="left: ',
                    i = "" + i + a,
                    i += ';top:17px;"></div><div class="describeVipContent block f12" style="',
                    i += n ? "left:" + n : "",
                    i += '"><div class="">1.298元/1年/1个账号</div><div>2.主从账号方便管理</div><div>3.集中开发票，方便报销</div></div></span>') : (i += '<span class="discribeBox block text-left" style="font-weight:100;cursor:default;"><div class="triangle-with-shadow home-ui" style="left: ',
                        i = "" + i + a,
                        i += ';top:16px;"></div><div class="describeVipContent home-ui block f12 sec-c2" style=""><div class="">1.298元/1年/1个账号</div><div>2.主从账号方便管理</div><div>3.集中开发票，方便报销</div></div></span>'),
                    i.trim()
            }
            ,
            a.vipContent = a["vipContent.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="vipcontentBody ',
                    s = "" + s + (i.bodyClass ? i.bodyClass : "vippopup"),
                    s += '" style="width:',
                    s += i.width ? "780px" : "100%",
                    s += '">',
                    i.isHideTitle || (s += '<div class="vipcontentHeader vipBgColor" ><div style=" width: 100%; text-align: center;;" class="text-center f16 c-white"><span class="">',
                        s = "" + s + (i.title ? i.title : "成为VIP会员，每天免费导出5万家企业联系电话"),
                        s += '</span></div><div class=\'modal-new-close c-white\' style="" ng-click="cancel()"><i\n        class="tic tic-close"></i></div></div>'),
                    s += '<div class="b-c-white pb1"><div class="vip_intro_box_body sec-c2 text-center b-c-gray position-rel"><div class="mb25"><div class="f16 sec-c3 pb10 pt10 mb30 b-c-gray new-border-bottom">VIP会员&nbsp;——&nbsp;一眼看清别人不知道的商业信息<span class="describeIcon sec-c3 pl5 mr30 vip-businss-pop-right"><a class="button-yel-white-sm " href="/vipbusiness" target="_blank">企业套餐</a>',
                    s = "" + s + a("vipBusinessIntro", {
                        type: "common",
                        cleft: "-66px"
                    }),
                    s += "</span></div>",
                    s = "" + s + a("vipSel", {
                        vipList: i.vipList
                    }),
                    s += '</div><div class="position-rel mb20 in-block"><span href-new-event event-name="立即充值" is-need-state=\'true\' ignore-vip="true"\n              class="vip_check_btn vip_vip_btn in-block f14 point" onclick="vipcontent.changeTab(this,\'',
                    s = "" + s + i.loginUrl,
                    s += "')\"\n              ",
                    i.tyceventname && (s += 'tyc-event-click tyc-event-ch="',
                        s = "" + s + i.tyceventname,
                        s += '"\n          '),
                    s += '\n        >立即开通</span><div><div class="in-block invoice-bg f12 mt5" style="">支付后可开发票</div></div>',
                    i.isLogin || i.isShowAPP ? i.demoUrl && (s += '<div class="point hover_underline position-abs f12 lh-1em" style="right: -48px;bottom: 32px;"><a class="company_vip_color vipColor hover_yellow" style="" href="',
                        s = "" + s + i.demoUrl,
                        s += '" target="_blank">查看样例</a></div>') : (s += '<div class="point vipColor  position-abs f12 lh-1em" style="right: ',
                            s += i.demoUrl ? "-175px" : "-115px",
                            s += ";bottom: 32px;\"><span class='hover_underline' onclick=\"vipcontent.changeTab(this,'",
                            s = "" + s + i.loginUrl,
                            s += '\',true)"\n                tyc-event-click tyc-event-ch="DaoHang.Login">已是VIP，直接登录</span>',
                            i.demoUrl && (s += '<a class="hover_underline new-border-left in-block pl10 ml10 company_vip_color vipColor hover_yellow" target="_blank" style="border-color:#9e9e9e;" href="',
                                s = "" + s + i.demoUrl,
                                s += '">查看样例</a>'),
                            s += "</div>"),
                    s += "</div>",
                    i.isHideVip || 8 == i.viptype && !i.isShowVip || (s += '<div class="position-abs point" style="right: 50px;bottom: 25px;" onclick="vipcontent.changeVipTab();"><img style="width: 200px;" src="https://static.tianyancha.com/web-require-js/themes/18blue/images/downloadVip0920.png" alt="img"></div>'),
                    s += '</div><div style="display: none" class="vip_intro_box_body_tab2 b-c-gray "><div class="text-center  pt50 pb50 position-rel vipApp-outer"><img style="width: 155px;" src="https://static.tianyancha.com/wap/images/app_download919.png" alt="img"><div class="mt20">扫码下载APP 获取更多免费查看次数</div><a href="/vipintro?useraction=70" class="position-abs vipColor hover_yellow" target="_blank" style="top: 120px;right: 20px;">立即成为VIP></a></div></div>\x3c!--\n      viptype==1    ---  数据导出\n      viptype==2    ---  查老板 查关系\n      viptype==3    ---  报告\n      viptype==8    ---  搜索页\n      --\x3e',
                    s = "" + s + a("viptype" + (i.viptype ? i.viptype : "1"), {}),
                    s += "</div></div>",
                    s.trim()
            }
            ,
            a.vipContentNotitle = a["vipContentNotitle.ejs"] = function (e) {
                var i = e
                    , s = "";
                return s += '<div class="vipcontentBody vipNoMask vippopup"><div><div class="vip_intro_box_body new-c2 text-center b-c-gray position-rel"><div class="mb35"><div style=" width: 100%; text-align: center;" class="text-center pt28 pb5 b-c-white b-c-gray sec-c2 f16"><span class="">',
                    s = "" + s + (i.title ? i.title : ""),
                    s += '</span></div><div class="f14 sec-c3 pb10 mb20 b-c-gray c-s-title">VIP会员——掌握信息主动权的商务精英</div>',
                    i.vipList && i.vipList.forEach(function (t, e) {
                        s += '<div class="vip_check_box point ',
                            s += t.checked ? "vip_check_active" : "",
                            s += " ",
                            s += t.discount ? "pt15" : "pt20",
                            s += " ",
                            s += e != i.vipList.length - 1 ? "mr6" : "",
                            s += '" onclick="vipcontent.changeActiveVipCheck(this)">',
                            2 == e && (s += '<div class="position-abs xsyhStyle2" style="top: 0;">推荐</div>'),
                            s += '<div class="rightBottom position-abs iconhide right collapse ',
                            s += t.checked ? "in" : "",
                            s += '"></div><i class="tic tic-duihao position-abs iconhide iconBottom f14 collapse ',
                            s += t.checked ? "in" : "",
                            s += '"></i><div class="changeColor"><span class="f14">',
                            s += t.time / 12 + "年",
                            s += '</span><b class="sec-c2"><span class="f30">',
                            s = "" + s + t.vipPrice,
                            s += '</b><span class="f14">元</span></span></div><s class="f12 new-c1">',
                            s = s + "原价：" + t.discount + "元",
                            s += '</s><input type="hidden" value="',
                            s = "" + s + t.state,
                            s += '" class="collapse vipstate"><div class="position-abs invoice-bg f12">购买后可开发票</div></div>'
                    }),
                    s += '</div><div class="position-rel mb10 mt10"><span href-new-event event-name="立即充值" is-need-state=\'true\' ignore-vip="true" class="vip_check_btn vip_vip_btn in-block f14 point" onclick="vipcontent.changeTab(this)" ',
                    i.tyceventname && (s += 'tyc-event-click tyc-event-ch="',
                        s = "" + s + i.tyceventname,
                        s += '"'),
                    s += '>立即成为VIP</span><div class="text-center  pt6 c-s-gray f12">50万商务精英的选择</div></div>',
                    8 != i.viptype && (s += '<div class="position-abs point" style="right: 50px;bottom: 38px;" onclick="vipcontent.changeVipTab();"><img style="width: 200px;" src="https://static.tianyancha.com/web-require-js/themes/18blue/images/downloadVip0920.png" alt="img"></div>'),
                    s += '</div><div style="display: none" class="vip_intro_box_body_tab2"><div class="text-center b-c-gray pt60 pb60 position-rel" style="padding-top:68px;padding-bottom: 69px;"><img style="width: 155px;" src="https://static.tianyancha.com/wap/images/app_download919.png" alt="img"><div class="mt20">扫码下载APP 获取更多免费查看次数</div><a href="/vipintro" class="position-abs vipColor hover_yellow" target="_blank" style="top: 155px;right: 65px;">立即成为VIP></a></div></div>\x3c!--\n      viptype==1    ---  数据导出\n      viptype==2    ---  查老板 查关系\n      viptype==3    ---  报告\n      --\x3e',
                    s = "" + s + function (e, i) {
                        return t(e, i)
                    }("viptype" + (i.viptype ? i.viptype : "1"), {}),
                    s += "</div></div>",
                    s.trim()
            }
            ,
            a.vipSel = a["vipSel.ejs"] = function (t) {
                var e = t
                    , i = "";
                return e.vipList && e.vipList.forEach(function (t, s) {
                    i += '<div\n  class="vip_check_box point ',
                        i += t.discount ? "pt15" : "pt20",
                        i += " ",
                        i += s != e.vipList.length - 1 ? "mr6" : "vip_check_active",
                        i += '"\n  onclick="vipcontent.changeActiveVipCheck(this)">',
                        2 == s && (i += '<div class="position-abs xsyhStyle2" style="top: 0;">推荐</div>'),
                        i += '<div class="rightBottom position-abs iconhide right collapse  ',
                        i += s != e.vipList.length - 1 ? "" : "in",
                        i += '"></div><i class="tic tic-duihao position-abs iconhide iconBottom f14 collapse ',
                        i += s != e.vipList.length - 1 ? "" : "in",
                        i += '"></i><div class="changeColor"><span class="f14">',
                        i += t.time / 12 + "年",
                        i += '</span><b class="sec-c2"><span class="f30">',
                        i = "" + i + t.vipPrice,
                        i += '</b><span class="f14">元</span></span></div>\x3c!--<s class="f12 new-c1">',
                        i = i + "原价：" + t.discount + "元",
                        i += '</s>--\x3e<input type="hidden" value="',
                        i = "" + i + t.state,
                        i += '" class="collapse vipstate">\x3c!--<div class="position-abs invoice-bg f12">开通后可开发票</div>--\x3e</div>'
                }),
                    i.trim()
            }
            ,
            a.vipequitymask = a["vipequitymask.ejs"] = function (e) {
                var i = e
                    , s = "";
                return s += '<div class="vipcontentBody vippopup vipequity" style="width:',
                    s += i.width ? "780px" : "100%",
                    s += '"><div style=" width: 100%; text-align: center;" class="text-center pt8 pb8 b-c-white f16"><span class="">',
                    s = "" + s + (i.title ? i.title : ""),
                    s += '</span></div><div class="b-c-white"><div class="vip_intro_box_body new-c2 text-center b-c-gray position-rel" ',
                    s += "4" == i.viptype ? 'style="padding-bottom:0px"' : "",
                    s += ' ><div class="f14 pb10 pt10 b-c-gray  c-s-title">VIP会员——掌握信息主动权的商务精英</div><div class="mb30">',
                    i.vipList && i.vipList.forEach(function (t, e) {
                        s += '<div class="vip_check_box point ',
                            s += t.checked ? "vip_check_active" : "",
                            s += " ",
                            s += t.discount ? "pt15" : "pt20",
                            s += " ",
                            s += e != i.vipList.length - 1 ? "mr20" : "",
                            s += '" style=\'height:90px;\' onclick="vipcontent.changeActiveVipCheck(this)">',
                            2 == e && (s += '<div class="position-abs xsyhStyle2" style="top: 0;">推荐</div>'),
                            s += '<div class="rightBottom position-abs iconhide right collapse ',
                            s += t.checked ? "in" : "",
                            s += '"></div><i class="tic tic-duihao position-abs iconhide iconBottom f14 collapse ',
                            s += t.checked ? "in" : "",
                            s += '"></i><div class="changeColor"><span class="f14">',
                            s += t.time / 12 + "年",
                            s += '</span><b class="sec-c2"><span class="f30">',
                            s = "" + s + t.vipPrice,
                            s += '</b><span class="f14">元</span></span></div><s class="f12 new-c1">',
                            s += t.discount + "元",
                            s += '</s><input type="hidden" value="',
                            s = "" + s + t.state,
                            s += '" class="collapse vipstate"><div class="position-abs invoice-bg f12">购买后可开发票</div></div>'
                    }),
                    s += '</div><div class="position-rel"><span href-new-event event-name="立即充值" is-need-state=\'true\' ignore-vip="true" class="vip_check_btn vip_vip_btn in-block f14 point" onclick="vipcontent.changeTab(this)" ',
                    i.tyceventname && (s += 'tyc-event-click tyc-event-ch="',
                        s = "" + s + i.tyceventname,
                        s += '"'),
                    s += '>立即成为VIP</span><div class="text-center pt6 c-s-gray f12">50万商务精英的选择</div></div>',
                    8 != i.viptype && (s += '<div class="position-abs point" style="right: 50px;bottom: 25px;" onclick="vipcontent.changeVipTab();"><img style="width: 200px;" src="https://static.tianyancha.com/web-require-js/themes/18blue/images/downloadVip0920.png" alt="img"></div>'),
                    s += '</div><div style="display: none" class="vip_intro_box_body_tab2"><div class="text-center b-c-gray pt60 pb60 position-rel"><img style="width: 155px;" src="https://static.tianyancha.com/wap/images/app_download919.png" alt="img"><div class="mt20">扫码下载APP 获取更多免费查看次数</div><a href="/vipintro" class="position-abs vipColor hover_yellow" target="_blank" style="top: 120px;right: 20px;">立即成为VIP></a></div></div>\x3c!--\n      viptype==1    ---  数据导出\n      viptype==2    ---  查老板 查关系\n      viptype==3    ---  报告\n      viptype==4    ---  人员页\n      viptype==8    ---  数据导出 高级筛选 搜索第8页\n      --\x3e',
                    s = "" + s + function (e, i) {
                        return t(e, i)
                    }("viptype" + (i.viptype ? i.viptype : "1"), {}),
                    ("4" == i.viptype || i.showVipBottomBtn) && (s += '<div class="pb50 text-center"><span href-new-event event-name="立即充值" is-need-state=\'true\' ignore-vip="true" class="vip_check_btn vip_vip_btn in-block f14 point text-center" onclick="vipcontent.toVipBtn(this)" ',
                        i.tyceventname && (s += 'tyc-event-click tyc-event-ch="',
                            s = "" + s + i.tyceventname,
                            s += '"'),
                        s += ">立即成为VIP</span></div>"),
                    s += "</div></div>",
                    s.trim()
            }
            ,
            a.viph5 = a["viph5.ejs"] = function (t) {
                var e = "";
                return e += '<div class="c1"><div class="modal-header" style=""><div style=" width: 100%; text-align: center;">\x3c!--<img src="https://static.tianyancha.com/wap/images/court_title_pic.png"  alt="公告详情"/>--\x3e      获取更多金钱奖励</div></div><div class="modal-body"><div>天眼查普通用户</div><div>1.通过分享链接邀请好友成为天眼查VIP会员后，邀请者获得<span class="bluec">18</span>元（受邀者购买1年VIP）或者<span class="bluec">36</span>元（受邀者购买2或3年VIP）现金奖励；</div><div>2.受邀者凭借此分享链接的邀请码可享受购买VIP价格<span class="bluec">10</span>元减免优惠；</div><br><div><img src="https://static.tianyancha.com/wap/images/invitecrown.png" alt="" class="crownicon"><div class="in-block vertival-top">成为天眼查VIP用户后</div></div><div>1.通过分享链接邀请好友成为天眼查VIP会员后，邀请者获得<span class="bluec">25.2</span>元（受邀者购买1年VIP）或者<span class="bluec">50.4</span>元（受邀者购买2或3年VIP）现金奖励；</div><div>2.受邀者凭借此分享链接的邀请码可享受购买VIP价格<span class="bluec">15</span>元减免优惠；</div></div><a class="modal-footer bluec" style="text-align: center;font-size: 16px;display: block" href="https://www.tianyancha.com/tovip">立即成为VIP</a></div>',
                    e.trim()
            }
            ,
            a.vipmask = a["vipmask.ejs"] = function (e) {
                var i = e
                    , s = "";
                return s = "" + s + function (e, i) {
                    return t(e, i)
                }("vipContent", {
                    viptype: i.viptype,
                    title: i.title,
                    width: i.width,
                    isNeedLogin: !0,
                    tyceventname: i.tyceventname,
                    isLogin: i.isLogin,
                    bodyClass: i.bodyClass,
                    isShowAPP: i.isShowAPP
                }),
                    s.trim()
            }
            ,
            a.vipmessage = a["vipmessage.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="checkPopup pt25 pb20" style=""><img src="https://static.tianyancha.com/wap/images/vip_toast_top.png" class="vip_toast position-abs"/><div  class="text-center pl20 pr20">',
                    e.items.alertmsg && (i += '<div class="f16 human-alert-em sec-c1 " ng-if="items.alertmsg"><span>',
                        i = "" + i + e.items.alertmsg,
                        i += "</span></div>"),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a.viptype1 = a["viptype1.ejs"] = function (t) {
                var e = "";
                return e += '<div class="vipright-outer"><div class="vip-intro-head vipColor pb12"><b class="f16 pr10">VIP权益</b><span class="vipColor">每天免费导出5万家企业联系电话</span><span class="pull-right vipColor f12 point" onclick="vipcontent.toVip()">全部VIP权益&gt;</span></div><div class="vip-table margin-auto text-center vip-width"><table class="table table-striped"><tbody><tr class="new-border vip-table-thead"><td class="sec-c2"  height="40px"  width="45%"><span class="pl8">功能</span></td><td class="sec-c2" width="27.5%">普通用户</td><td class="vipColor" width="27.5%">VIP会员</td></tr><tr><td class="sec-c1"><div>查公司的搜索结果</div><div>展示条数</div></td><td class="sec-c1">100条</td><td class="vipColor">5000条</td></tr><tr><td class="sec-c1">查公司结果高级筛选<br><div class="sec-c3 f12">按有无电话、商标、专利、失信记录筛选</div></td><td class="sec-c1">—</td><td class="vipColor"><i class="tic tic-check f24"></i></td></tr><tr><td class="sec-c1">数据导出<div class="sec-c3 f12">批量导出企业联系方式/基本信息</div></td><td class="sec-c1">—</td><td class="vipColor"><div class="vipColor">每天免费导出<div>10次</div></div><div class="f12">(最多50000条数据)</div></td></tr></tbody></table></div></div>',
                    e.trim()
            }
            ,
            a.viptype2 = a["viptype2.ejs"] = function (t) {
                var e = "";
                return e += '<div class="vipright-outer"><div class="vip-intro-head vipColor pb12"><b class="f16 pr10">VIP权益</b><span class="vipColor">查老板、看历史信息、看股权结构，不限次，看天眼风险（10次/天）</span><span class="pull-right vipColor f12 point" onclick="vipcontent.toVip()">全部VIP权益&gt;</span></div><div class="vip-table margin-auto text-center vip-width"><table class="table table-striped"><tbody><tr class="new-border vip-table-thead"><td class="sec-c2" height="40px" width="45%"><span class="pl8">功能</span></td><td class="sec-c2" width="27.5%">普通用户</td><td class="vipColor" width="27.5%">VIP会员</td></tr><tr><td class="sec-c1">查老板<div class="sec-c3 f12 pt5 vip-sub-title">一眼看清他的所有公司和商业合作伙伴</div></td><td class="sec-c1">3次/天<div class="sec-c3 f12 pt5 vip-sub-title">(网页1次，APP2次)</div></td><td class="vipColor">不限</td></tr>\x3c!--<tr>--\x3e\x3c!--<td class="sec-c1">查关系--\x3e\x3c!--<div class="sec-c3 f12 pt5 vip-sub-title">一眼看清两个公司/人之间的所有商业关联</div>--\x3e\x3c!--</td>--\x3e\x3c!--<td class="sec-c1">3次/天--\x3e\x3c!--<div class="sec-c3 f12 pt5 vip-sub-title">(网页1次，APP2次)</div>--\x3e\x3c!--</td>--\x3e\x3c!--<td class="vipColor">不限</td>--\x3e\x3c!--</tr>--\x3e<tr><td class="sec-c1">历史信息<div class="sec-c3 f12 pt5 vip-sub-title">一眼看清公司/老板的历史相关信息</div></td><td class="sec-c1">—</td><td class="vipColor">不限</td></tr><tr><td class="sec-c1">查看公司的股权结构图<div class="sec-c3 f12 pt5 vip-sub-title">一眼看清公司的股权路径和实际控制人</div></td><td class="sec-c1">3次/天<div class="sec-c3 f12 pt5 vip-sub-title">(网页1次，APP2次)</div></td><td class="vipColor">不限</td></tr><tr><td class="sec-c1">天眼风险<div class="sec-c3 f12 pt5 vip-sub-title">一眼看清公司/老板存在和隐蔽的风险</div></td><td class="sec-c1">3次/天<div class="sec-c3 f12 pt5 vip-sub-title">(网页1次，APP2次)</div></td><td class="vipColor">10次/天</td></tr></tbody></table></div></div>',
                    e.trim()
            }
            ,
            a.viptype3 = a["viptype3.ejs"] = function (t) {
                var e = "";
                return e += '<div class="vipright-outer"><div class="vip-intro-head vipColor pb12"><b class="f16 pr10">VIP权益</b><span class="vipColor">500元付费报告抵扣券</span><span class="pull-right table-striped f12 point" onclick="vipcontent.toVip()">全部VIP权益&gt;</span></div><div class="vip-table margin-auto text-center vip-width"><table class="table table-striped"><tbody><tr class="new-border vip-table-thead"><td class="sec-c2"  height="40px"  width="45%">功能</td><td class="sec-c2" width="27.5%">普通用户</td><td class="vipColor" width="27.5%">VIP会员</td></tr><tr><td class="sec-c1">付费抵扣券</td><td class="sec-c1">—</td><td class="vipColor"><div class="pb10 pt5">赠送200元(1年VIP会员)</div><div class="pb10">赠送350元(2年VIP会员)</div><div class="pb5">赠送500元(3年VIP会员)</div></td></tr><tr><td class="sec-c1">企业信用报告-基础班</td><td class="sec-c1">免费获取10份/天</td><td class="vipColor">免费获取50份/天</td></tr><tr><td class="sec-c1">企业信用报告-专业版</td><td class="sec-c1">20元/份</td><td class="vipColor">20元/份</td></tr><tr><td class="sec-c1">个人投资任职报告-专业版</td><td class="sec-c1">40元/份</td><td class="vipColor">40元/份</td></tr></tbody></table></div></div>',
                    e.trim()
            }
            ,
            a.viptype4 = a["viptype4.ejs"] = function (e) {
                var i = "";
                return i = "" + i + function (e, i) {
                    return t(e, i)
                }("viptype2", {}),
                    i.trim()
            }
            ,
            a.viptype5 = a["viptype5.ejs"] = function (e) {
                var i = ""
                    , s = function (e, i) {
                        return t(e, i)
                    };
                return i += "\x3c!--2,3--\x3e",
                    i = "" + i + s("viptype2", {}),
                    i = "" + i + s("viptype3", {}),
                    i.trim()
            }
            ,
            a.viptype8 = a["viptype8.ejs"] = function (t) {
                var e = "";
                return e += '<div class="vipright-outer"><div class="vip-intro-head vipColor pb12"><b class="f16 pr10">VIP权益</b><span class="vipColor">每天免费导出5万家企业联系电话</span><span class="pull-right vipColor f12 point" onclick="vipcontent.toVip()">全部VIP权益&gt;</span></div><div class="vip-table margin-auto text-center vip-width"><table class="table table-striped"><tbody><tr class="new-border vip-table-thead"><td class="sec-c2"  height="40px"  width="45%"><span class="pl8">功能</span></td><td class="sec-c2" width="27.5%">普通用户</td><td class="vipColor" width="27.5%">VIP会员</td></tr><tr><td class="sec-c1"><div>查公司的搜索结果</div><div>展示条数</div></td><td class="sec-c1">100条</td><td class="vipColor">5000条</td></tr><tr><td class="sec-c1">查公司结果高级筛选<br><div class="sec-c3 f12">按有无电话、商标、专利、失信记录筛选</div></td><td class="sec-c1">—</td><td class="vipColor"><i class="tic tic-check f24"></i></td></tr><tr><td class="sec-c1">数据导出<div class="sec-c3 f12">批量导出企业联系方式/基本信息</div></td><td class="sec-c1">—</td><td class="vipColor"><div class="vipColor">每天免费导出<div>10次</div></div><div class="f12">(最多50000条数据)</div></td></tr></tbody></table></div></div>',
                    e.trim()
            }
            ,
            a.volatility = a["volatility.ejs"] = function (t) {
                var e = t
                    , s = "";
                s += '<div><table class="table companyInfo-table f14"><thead>';
                var a = e.volatility;
                return s += '<tr><th colspan="6" class="lh49 vertival-middle"><span>',
                    s = "" + s + a.stockname,
                    s += '</span><span class="mr10">(',
                    s = "" + s + a.stockcode,
                    s += ")</span>",
                    a.quote_header,
                    s += '<div class="in-block num-block ',
                    s += i(a.hexm_float_price < 0 ? "new-green" : "new-err"),
                    s += '">',
                    a.quote_header || (s += '<span class="float-left lh30 f28">',
                        s = "" + s + a.hexm_curPrice,
                        s += '<i\n              class="tic ml5 mr20 ',
                        s += i(a.hexm_float_price < 0 ? "tic-stock-down new-green" : "tic-stock-up new-err"),
                        s += '"\n            ></i></span><span class="float-left f12"><span class="block f12">',
                        s = "" + s + a.hexm_float_price,
                        s += '</span><span class="block f12 mt5">',
                        s = "" + s + a.hexm_float_rate,
                        s += "</span></span>"),
                    s += '</div><span class="float-right new-c1">更新时间：',
                    s = "" + s + a.timeshow,
                    s += '</span></th></tr></thead><tbody><tr><td width="15%" class="table-left">今开：</td><td width="17%">',
                    s = "" + s + a.topenprice,
                    s += '</td><td class="table-left">最高：</td><td><span class="new-err">',
                    s = "" + s + a.thighprice,
                    s += '</span></td><td class="table-left" width="15%">涨停：</td><td width="16%"><span class="new-err">',
                    s = "" + s + a.tmaxprice,
                    s += '</span></td></tr><tr><td class="table-left">昨收：</td><td>',
                    s = "" + s + a.pprice,
                    s += '</td><td class="table-left ">最低：</td><td><span class="new-green">',
                    s = "" + s + a.tlowprice,
                    s += '</span></td><td width="15%" class="table-left">跌停：</td><td width="16%"><span class="new-green">',
                    s = "" + s + a.tminprice,
                    s += '</span></td></tr><tr><td class="table-left">总市值：</td><td>',
                    s = "" + s + a.tvalue,
                    s += '</td><td class="table-left">流通市值：</td><td>',
                    s = "" + s + a.flowvalue,
                    s += '</td><td class="table-left">成交量：</td><td>',
                    s = "" + s + a.tamount,
                    s += '</td></tr><tr><td class="table-left">成交额：</td><td>',
                    s = "" + s + a.tamounttotal,
                    s += '</td><td class="table-left">市净率：</td><td>',
                    s = "" + s + a.tvaluep,
                    s += '</td><td class="table-left">市盈率（动）：</td><td>',
                    s = "" + s + a.fvaluep,
                    s += '</td></tr><tr><td class="table-left">振幅：</td><td>',
                    s = "" + s + a.trange,
                    s += '</td><td class="table-left">换手：</td><td>',
                    s = "" + s + a.tchange,
                    s += '</td><td class="table-left"></td><td></td></tr></tbody></table></div>',
                    s.trim()
            }
            ,
            a.wechat = a["wechat.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-header" style="border-bottom: none;padding-bottom: 0;height: 40px;"><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="modal-body"><div class="wechat over-hide"><div class="mb10 margin-auto pl40"><div class="in-block vertical-top wechatImg"><img alt="" src="',
                    i = "" + i + e.items.titleImgURL,
                    i += '"\n             onerror="this.src=\'https://img.tianyancha.com/logo/teamMember/ye_def.png@!fill_200x200\'"></div><div class="in-block vertical-top popupRight"><div class="mb5">',
                    i = "" + i + e.items.title,
                    i += '</div><div class="mb5"><span class="new-c2">微信号:</span><span>',
                    i = "" + i + e.items.publicNum,
                    i += '</span></div><div><span class="in-block vertical-top new-c2">功能介绍:</span><span>',
                    i = "" + i + e.items.recommend,
                    i += '</span></div></div><div class="in-block vertical-top new-border" style="width:100px;"><img style="width: 100%;" src="',
                    i = "" + i + e.items.codeImg,
                    i += '" alt=""></div></div></div></div>',
                    i.trim()
            }
            ,
            a.weixinQRcode = a["weixinQRcode.ejs"] = function (t) {
                var e = "";
                return e += '<div><div class="modal-header over-hide"><div class="float-left">分享至微信朋友圈</div><div style="position: absolute;right: 15px;top: 10px; cursor: pointer;" ng-click="cancel()"><i class="tic tic-close"></i></div></div><div class="qr_box" style="position:relative;" ><div qr-directive text="items.weixinID" id="_container_qrcode"></div></div><div class="mt15 pb15 pl15 pr15">打开微信，点击底部的“发现”， 使用“扫一扫”即可将网页分享至朋友</div></div>',
                    e.trim()
            }
            ,
            a["contact/company_contact_list"] = a["contact/company_contact_list.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="modal-new-header"><div class="popupHeader pr30">',
                    s = "" + s + i.title,
                    s += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 break-all" style="line-height: 24px;"><div class="contact-tabs"><div class="tab-header clearfix"><div class="cursor-pointer" onclick="contact.companyContactPage(\'',
                    s = "" + s + i.companyId,
                    s += "',10)\">合作(",
                    s = "" + s + i.countInfo.type_10.num,
                    s += ")",
                    i.countInfo.type_10.unreadNum && (s += "<span>",
                        s = "" + s + i.num99_plus(i.countInfo.type_10.unreadNum),
                        s += "</span>"),
                    s += '</div><div class="cursor-pointer" onclick="contact.companyContactPage(\'',
                    s = "" + s + i.companyId,
                    s += "',20)\">投资(",
                    s = "" + s + i.countInfo.type_20.num,
                    s += ")",
                    i.countInfo.type_20.unreadNum && (s += "<span>",
                        s = "" + s + i.num99_plus(i.countInfo.type_20.unreadNum),
                        s += "</span>"),
                    s += '</div>\x3c!--<div class="cursor-pointer" onclick="contact.companyContactPage(\'',
                    s = "" + s + i.companyId,
                    s += "',30)\">--\x3e\x3c!--咨询(",
                    s = "" + s + i.countInfo.type_30.num,
                    s += ")--\x3e\x3c!--",
                    i.countInfo.type_30.unreadNum && (s += "--\x3e\x3c!--<span>",
                        s = "" + s + i.num99_plus(i.countInfo.type_30.unreadNum),
                        s += "</span>--\x3e\x3c!--"),
                    s += '--\x3e\x3c!--</div>--\x3e<div class="cursor-pointer" onclick="contact.companyContactPage(\'',
                    s = "" + s + i.companyId,
                    s += "',40)\">投诉(",
                    s = "" + s + i.countInfo.type_40.num,
                    s += ")",
                    i.countInfo.type_40.unreadNum && (s += "<span>",
                        s = "" + s + i.num99_plus(i.countInfo.type_40.unreadNum),
                        s += "</span>"),
                    s += '</div></div><div class="text-right pt10 pr10"><div class="btn btn-all mr10" onclick="contact.contactCheckAll(\'',
                    s = "" + s + i.companyId,
                    s += '\')">全选</div><div class="btn btn-mark-read"  onclick="contact.markReadMulti(\'',
                    s = "" + s + i.companyId,
                    s += '\')" >标记为已读</div></div><div class="tab-body">',
                    [10, 20, 30, 40].forEach(function (t) {
                        s = "" + s + a("contact/contact_item", {
                            type: t,
                            list: i["list_" + t],
                            pn: i["list_pn_" + t],
                            total: i["list_total_" + t],
                            companyId: i.companyId,
                            noMessage: i.noMessage[t]
                        })
                    }),
                    s += "</div></div></div>",
                    s.trim()
            }
            ,
            a["contact/company_contact_list_demo"] = a["contact/company_contact_list_demo.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="modal-new-header"><div class="popupHeader pr30">',
                    s = "" + s + i.title,
                    s += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 break-all" style="line-height: 24px;"><div class="contact-tabs"><div class="tab-header clearfix"><div class="cursor-pointer" onclick="contact.companyContactPageDemo(\'',
                    s = "" + s + i.companyId,
                    s += "',10)\">合作(",
                    s = "" + s + i.countInfo.type_10.num,
                    s += ")",
                    i.countInfo.type_10.unreadNum && (s += "<span>",
                        s = "" + s + i.countInfo.type_10.unreadNum,
                        s += "</span>"),
                    s += '</div><div class="cursor-pointer" onclick="contact.companyContactPageDemo(\'',
                    s = "" + s + i.companyId,
                    s += "',20)\">投资(",
                    s = "" + s + i.countInfo.type_20.num,
                    s += ")",
                    i.countInfo.type_20.unreadNum && (s += "<span>",
                        s = "" + s + i.countInfo.type_20.unreadNum,
                        s += "</span>"),
                    s += '</div><div class="cursor-pointer" onclick="contact.companyContactPageDemo(\'',
                    s = "" + s + i.companyId,
                    s += "',30)\">咨询(",
                    s = "" + s + i.countInfo.type_30.num,
                    s += ")",
                    i.countInfo.type_30.unreadNum && (s += "<span>",
                        s = "" + s + i.countInfo.type_30.unreadNum,
                        s += "</span>"),
                    s += '</div><div class="cursor-pointer" onclick="contact.companyContactPageDemo(\'',
                    s = "" + s + i.companyId,
                    s += "',40)\">其他(",
                    s = "" + s + i.countInfo.type_40.num,
                    s += ")",
                    i.countInfo.type_40.unreadNum && (s += "<span>",
                        s = "" + s + i.countInfo.type_40.unreadNum,
                        s += "</span>"),
                    s += '</div></div><div class="text-right pt10 pr10"><div class="btn btn-all" onclick="contact.contactCheckAll(\'',
                    s = "" + s + i.companyId,
                    s += '\')">全选</div><div class="btn btn-mark-read ml10" >标记为已读</div></div><div class="tab-body">',
                    [10, 20, 30, 40].forEach(function (t) {
                        s = "" + s + a("contact/contact_item", {
                            type: t,
                            list: i["list_" + t],
                            pn: i["list_pn_" + t],
                            total: i["list_total_" + t],
                            companyId: i.companyId
                        })
                    }),
                    s += "</div></div></div>",
                    s.trim()
            }
            ,
            a["contact/contact_input"] = a["contact/contact_input.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" style="border:none;"><div class="popupHeader pr30">我要',
                    i = "" + i + e.title,
                    i += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div>\x3c!--<div class="modal-vip-tips text-center sec-c1 p8 text-center b-c-alert">--\x3e\x3c!--<i class="tic tic-exclamation-circle new-err mr10"></i>',
                    i = "" + i + e.prompt,
                    i += "--\x3e\x3c!--",
                    e.isVip || (i += '--\x3e\x3c!--<span class="c9 cursor-pointer" onclick="contact.buyVip()">立即开通></span>--\x3e\x3c!--'),
                    i += '--\x3e\x3c!--</div>--\x3e<div class="modal-body p10 break-all b-c-gray reset-placeholder-color" style="line-height: 24px;"><div class="b-c-white sec-c2 pl30 pr30 pt30 pb30"><div class="">尊敬的<span class="c9 pl5">',
                    i = "" + i + e.companyName,
                    i += '</span></div><form class="form-horizontal" id="contact-card" onsubmit="return false"><div class="pt30">你好！我是<div class="inline-block w270 ml10 mr8"><input type="text" class="concat-input concat-form w100" placeholder="请输入你的公司名称（必填）" id="suggestCompanyName"\n                 name="companyName" ',
                    i += e.uInfo.companyName ? 'value="' + e.strFilter(e.uInfo.companyName, "") + '"' : "",
                    i += '></div>的<input type="text" class="concat-input concat-form w200 ml8 mr10" placeholder="请输入你的姓名（必填）" id="realName"\n                name="realName" ',
                    i += e.uInfo.realName ? ' value="' + e.strFilter(e.uInfo.realName, "") + '"' : "",
                    i += ">",
                    10 == e.type ? i += "希望与贵公司进行合作" : 40 != e.type ? i += "希望与贵公司就投资进行意向沟通" : i += "我对贵公司有投诉意见",
                    i += '</div><div class="pt25 pb5">我的',
                    i = "" + i + e.title,
                    i += "投诉" === e.title ? "意见" : "意向",
                    i += '是</div><div><textarea class="concat-textarea concat-form w100" id="intention" name="intention"\n                  placeholder="请输入你的',
                    i = "" + i + e.title,
                    i += "投诉" === e.title ? "意见" : "意向",
                    i += '（必填）"></textarea></div><div class="pt30">请与我联系！我的联系方式是<input type="text" class="concat-input concat-form w270 ml10" placeholder="请输入你的联系方式（必填）" id="contactNumber"\n               name="contactNumber" ',
                    i += e.uInfo.contactNumber ? 'value="' + e.strFilter(e.uInfo.contactNumber, "") + '"' : "",
                    i += '></div></form><div class="pt30">谢谢',
                    40 != e.type && (i += "<br>顺颂商祺"),
                    i += '<span class="pull-right">',
                    i = "" + i + e.dateFormat(e.currentTime, "", "int"),
                    i += '</span></div></div><div class="text-center mt20 mb10"><div class="button-blue-lg in-block w140" onclick="contact.sendCard(',
                    i = "" + i + e.type,
                    i += ')">立即发送</div></div><div class="success-info none-dispaly text-center b-c-white pt50"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/contact-succ.png" alt=""><div class="pt20">发送成功</div>',
                    e.isVip || (i += '<div class="mt30">开通VIP每日可发送300封私信，<span class="c9 cursor-pointer" onclick="contact.buyVip()">立即开通></span></div>'),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a["contact/contact_item"] = a["contact/contact_item.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = i.type;
                return s += '<div class="item item_',
                    s = "" + s + a,
                    s += '">',
                    i.list && i.list.length ? (i.list.forEach(function (t) {
                        s += '<div class="item-body clearfix unread-',
                            s = "" + s + t.isRead,
                            s += '"\n       onclick="contact.markRead(\'',
                            s = "" + s + i.companyId,
                            s += "','",
                            s = "" + s + t.id,
                            s += '\',this)"><i class="tic tic-weixuanzhong c9 cursor-pointer" onclick="contact.toggleXuanzhong(event,this)" data-id="',
                            s = "" + s + t.id,
                            s += '"></i><img src="',
                            s = "" + s + t.logoUrl,
                            s += '" alt="logo"\n         onerror="this.src=\'https://static.tianyancha.com/wap/images/searchLogo918.png\'"\n    ><div class="inline-block"><span>',
                            s = "" + s + t.realName,
                            s += "</span>|<span>",
                            s = "" + s + t.contactNumber,
                            s += '</span>|<span class="company-name">',
                            s = "" + s + t.companyName,
                            s += "</span>|<span>",
                            s = "" + s + t.post,
                            s += '</span><span class="float-right bd-time">',
                            s = "" + s + i.moment(t.createTime).format("YYYY-MM-DD"),
                            s += "</span><div>",
                            s = "" + s + t.intention,
                            s += "</div></div></div>"
                    }),
                        s += '<input type="hidden" id="_contact_list_pn_',
                        s = "" + s + a,
                        s += '" value="',
                        s = "" + s + i.pn,
                        s += '"><input type="hidden" id="_contact_list_tatal_',
                        s = "" + s + a,
                        s += '" value="',
                        s = "" + s + i.total,
                        s += '">',
                        s = "" + s + function (e, i) {
                            return t(e, i)
                        }("pagination_click", {
                            currentPage: i.pn,
                            maxSize: 10,
                            total: i.total,
                            perPage: 10,
                            lineTypeVal: i.companyId,
                            lineTypeName: a,
                            onChange: "contact.companyContactPageEvent"
                        })) : (s += '<div class="no-data text-center pt100"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/nodata-contact.png" alt="no data">',
                            i.noMessage && (s += '<div class="mt30">',
                                s = "" + s + i.noMessage,
                                s += "</div>"),
                            s += "</div>"),
                    s += "</div>",
                    s.trim()
            }
            ,
            a["contact/multi_contact_input"] = a["contact/multi_contact_input.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header" style="border: none;"><div class="popupHeader pr30">',
                    i = "" + i + e.title,
                    i += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div>\x3c!--<div class="modal-vip-tips text-center sec-c1 p8 text-center b-c-alert">--\x3e\x3c!--<i class="tic tic-exclamation-circle new-err mr10"></i>',
                    i = "" + i + e.prompt,
                    i += "--\x3e\x3c!--",
                    e.isVip || (i += '--\x3e\x3c!--<span class="c9 cursor-pointer" onclick="contact.buyVip()">立即开通></span>--\x3e\x3c!--'),
                    i += '--\x3e\x3c!--</div>--\x3e<div class="modal-body p10 break-all b-c-gray reset-placeholder-color" style="line-height: 24px;"><form class="form-horizontal" id="contact-card" onsubmit="return false"><div class="clearfix"><div class="concat-tab col-6 active point js-contact-type" data-type="10">我要合作</div><div class="concat-tab col-6 point js-contact-type" data-type="20">我要投资</div>\x3c!--<div class="concat-tab js-contact-type" data-type="30">--\x3e\x3c!--我要咨询--\x3e\x3c!--</div>--\x3e\x3c!--<div class="concat-tab js-contact-type" data-type="40">--\x3e\x3c!--其他--\x3e\x3c!--</div>--\x3e</div><div class="b-c-white sec-c2 pl30 pr30 pt30 pb30"><div class="pt6">你好！我是<div class="inline-block w270 ml10 mr8"><input type="text" class="concat-input concat-form w100"\n                 placeholder="请输入你的公司名称（必填）" id="suggestCompanyName"\n                 name="companyName"\n            ',
                    i += e.uInfo.companyName ? 'value="' + e.strFilter(e.uInfo.companyName, "") + '"' : "",
                    i += '></div>的<input type="text" class="concat-input concat-form w200 ml8 mr10" placeholder="请输入你的姓名（必填）" id="realName"\n                name="realName"\n          ',
                    i += e.uInfo.realName ? 'value="' + e.strFilter(e.uInfo.realName, "") + '"' : "",
                    i += '><span class="type_10 js-contact-type-hide">希望与贵公司进行合作</span><span class="hidden type_20 js-contact-type-hide">希望与贵公司就投资进行意向沟通</span></div><div class="pt25 pb5">我的<span class="type_10 js-contact-type-hide">合作</span><span\n          class="hidden type_20 js-contact-type-hide">投资</span>意向是</div><div><textarea class="concat-textarea concat-form w100" id="intention" name="intention"\n                  placeholder="请输入你的合作意向（必填）"></textarea></div><div class="pt30">请与我联系！我的联系方式是<input type="text" class="concat-input concat-form w270 ml10" placeholder="请输入你的联系方式（必填）" id="contactNumber"\n               name="contactNumber"\n          ',
                    i += e.uInfo.contactNumber ? 'value="' + e.strFilter(e.uInfo.contactNumber, "") + '"' : "",
                    i += '\n        ></div><div class="pt30">谢谢',
                    40 != e.type && (i += "<br>顺颂商祺"),
                    i += '<span class="pull-right">',
                    i = "" + i + e.dateFormat(e.currentTime, "", "int"),
                    i += '</span></div></div></form><div class="text-center  mt20 mb10"><div class="button-blue-lg in-block w140" onclick="contact.sendMultiCard()">立即发送</div></div><div class="success-info none-dispaly text-center b-c-white pt50"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/contact-succ.png" alt=""><div class="pt20">发送成功</div>',
                    e.isVip || (i += '<div class="mt30">开通VIP每日可发送300封私信，<span class="c9 cursor-pointer" onclick="contact.buyVip()">立即开通></span></div>'),
                    i += "</div></div>",
                    i.trim()
            }
            ,
            a["contact/open_claim"] = a["contact/open_claim.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader">我要查看</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 pl30 pr30 pt30 pb20 break-all" style="line-height: 24px;"><div class="f18">',
                    "unclaim" == e.type ? i += "认证该家企业之后，可查看所有的信息！" : i += "该企业已被认证，去认证自己的企业",
                    i += '</div><div class="text-center mt30 "><a class="button-claim-lg in-block w200" href="/claim/apply',
                    i += "unclaim" == e.type ? "/" + e.companyId : "",
                    i += '">立即认证</a><div class=" pt5" ><a href="/claim/apply/" class="c19">认证的好处</a></div></div></div>',
                    i.trim()
            }
            ,
            a["contact/user_center_demo"] = a["contact/user_center_demo.ejs"] = function (t) {
                var e = "";
                return e += '<div class="modal-new-header"><div class="popupHeader pr30">样例</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class=" f14 sec-c2 pl30 pr30 pt30 pb40 break-all text-center" style="line-height: 24px;"><div><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/user_contact_demo.png" alt=""></div></div>',
                    e.trim()
            }
            ,
            a["discuss/approval_list"] = a["discuss/approval_list.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    e.data && e.data.items && e.data.items.length ? (e.data.items.forEach(function (t) {
                        i += '<span class="appr_item">',
                            i = "" + i + t.nickname,
                            i += "</span>"
                    }),
                        i += '<span class="info">赞过</span>') : i += '<div class="no-data text-center pt100"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/nodata-contact.png" alt="no data"><div>暂无点赞</div></div>',
                    i += "</div>",
                    i.trim()
            }
            ,
            a["discuss/comment_list"] = a["discuss/comment_list.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div><div class="modal-discuss-tools text-center mb20"><div class="button-white-sm mr7" onclick="discuss.comment_filter(\'2\',this)">企业（',
                    i = "" + i + (e.listType ? e.listType.type_30 : "0"),
                    i += '）</div><div class="button-white-sm mr7" onclick="discuss.comment_filter(\'1\',this)">VIP用户（',
                    i = "" + i + (e.listType ? e.listType.type_20 : "0"),
                    i += '）</div><div class="button-white-sm" onclick="discuss.comment_filter(\'0\',this)">普通用户（',
                    i = "" + i + (e.listType ? e.listType.type_10 : "0"),
                    i += "）</div></div>",
                    e.data && e.data.items && e.data.items.length ? e.data.items.forEach(function (t) {
                        i += '<div class="comment-dis" data-type="',
                            i = "" + i + t.state,
                            i += '"><img src="',
                            i = "" + i + t.logo,
                            i += '" alt="',
                            i = "" + i + t.nickname,
                            i += '"\n         onerror="this.src=\'https://static.tianyancha.com/wap/images/searchLogo918.png\'"\n    ><div class="clearfix">',
                            2 == t.state && t.id ? (i += '<a class="nick-name nick-type-',
                                i = "" + i + t.state,
                                i += '" target="_blank" href="',
                                e.serverDomain,
                                i += "/company/",
                                i = "" + i + t.id,
                                i += '">',
                                i = "" + i + t.nickname,
                                i += "</a>") : (i += '<span class="nick-name nick-type-',
                                    i = "" + i + t.state,
                                    i += '">',
                                    i = "" + i + t.nickname,
                                    i += "</span>"),
                            2 == t.state && (i += '<span class="good">企业主</span>'),
                            i += '<span class="float-right">',
                            i = "" + i + e.moment(t.commentTime).format("YYYY-MM-DD"),
                            i += "</span></div><div>",
                            i = "" + i + t.content,
                            i += "</div></div>"
                    }) : i += '<div class="no-data text-center pt100"><img src="https://static.tianyancha.com/web-require-js/themes/18blue/images/nodata-contact.png" alt="no data"><div>暂无评价</div></div>',
                    i += "</div>",
                    i.trim()
            }
            ,
            a["discuss/company_coment_list"] = a["discuss/company_coment_list.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += "<div>",
                    e.data && e.data.items && e.data.items.length && e.data.items.forEach(function (t) {
                        i += '<div class="comment-dis"><div class="claim_home_icon"><img src="',
                            i = "" + i + t.logo,
                            i += '" alt="',
                            i = "" + i + t.nickname,
                            i += '"\n           onerror="this.src=\'https://static.tianyancha.com/wap/images/searchLogo918.png\'"\n      ></div><div class="comment-dis-item clearfix">',
                            2 == t.state && t.id ? (i += '<a class="nick-name nick-type-',
                                i = "" + i + t.state,
                                i += '" target="_blank" href="',
                                e.serverDomain,
                                i += "/company/",
                                i = "" + i + t.id,
                                i += '">',
                                i = "" + i + t.nickname,
                                i += "</a>") : (i += '<span class="nick-name nick-type-',
                                    i = "" + i + t.state,
                                    i += '">',
                                    i = "" + i + t.nickname,
                                    i += "</span>"),
                            2 == t.state ? i += '<span class="good">企业主</span>' : 1 == t.state && (i += '<span class="yel">VIP</span>'),
                            i += '</div><div class="clearfix mt10 f12 break-word">',
                            i = "" + i + t.content,
                            i += '<span class="float-right bd-time">',
                            i = "" + i + e.moment(t.commentTime).format("YYYY-MM-DD"),
                            i += "</span></div></div>"
                    }),
                    i += "</div>",
                    i.trim()
            }
            ,
            a["discuss/company_discuss"] = a["discuss/company_discuss.ejs"] = function (e) {
                var i = e
                    , s = ""
                    , a = function (e, i) {
                        return t(e, i)
                    };
                return s += '<div class="modal-new-header"><div class="popupHeader pr30">',
                    s = "" + s + i.title,
                    s += '</div><div class=\'modal-new-close\' style="" ng-click="cancel()"><i\n      class="tic tic-close"></i></div></div><div class="modal-body f14 sec-c2 break-all" style="line-height: 24px;"><div class="contact-tabs"><div class="tab-header clearfix"><div class="cursor-pointer" onclick="discuss.companyDiscussPage(\'',
                    s = "" + s + i.companyId,
                    s += "')\">评论",
                    i.commentNum && (s += "(",
                        s = "" + s + i.commentNum,
                        s += ")"),
                    s += '</div><div class="cursor-pointer" onclick="discuss.companyApprovalPage(\'',
                    s = "" + s + i.companyId,
                    s += "')\">赞",
                    i.approvalNum && (s += "(",
                        s = "" + s + i.approvalNum,
                        s += ")"),
                    s += '</div></div><div class="tab-body pl30 pr30 pt30 pb40 "><div class="tab-comment">',
                    s = "" + s + a("discuss/comment_list", {
                        data: i.comment_list,
                        listType: i.comment_type
                    }),
                    s += '</div><div class="tab-approval">',
                    s = "" + s + a("discuss/approval_list", {
                        data: i.approval_list,
                        listType: i.approval_type
                    }),
                    s += "</div></div></div></div>",
                    s.trim()
            }
            ,
            a["user/user_nick"] = a["user/user_nick.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader pr30">',
                    i = "" + i + e.title,
                    i += '</div><div class=\'modal-new-close\' style="" onclick="discuss.userNickSubmit(true)"><i\n      class="tic tic-close"></i></div></div><div class="nick-tips text-center">首次点赞需填写完整信息</div><div class="modal-body f14 sec-c2 pl30 pr30 pt30 pb40 break-all" style="line-height: 24px;"><form class="form-horizontal" id="user-nick-form" onsubmit="return false"><div class="form-group"><label for="nickName" class="col-sm-2 control-label"><span class="cred">*</span>昵称</label><div class="col-sm-10"><input type="text" class="form-control" id="nickName" name="nickName" placeholder="请输入你的昵称（必填）"></div></div></form><div class="text-center"><div class="btn btn-modal-primary" onclick="discuss.userNickSubmit()">保存</div></div></div>',
                    i.trim()
            }
            ,
            a["user/user_real"] = a["user/user_real.ejs"] = function (t) {
                var e = t
                    , i = "";
                return i += '<div class="modal-new-header"><div class="popupHeader pr30">',
                    i = "" + i + e.title,
                    i += '</div><div class=\'modal-new-close\' style="" onclick="contact.userNickSubmit(true)"><i\n      class="tic tic-close"></i></div></div><div class="nick-tips text-center">首次发送需填写完整信息，有助于推动企业快速联系你</div><div class="modal-body f14 sec-c2 pl30 pr30 pt30 pb40 break-all" style="line-height: 24px;"><form class="form-horizontal" id="user-nick-form" onsubmit="return false"><div class="form-group"><label for="realName" class="col-sm-2 control-label"><span class="cred">*</span>姓名</label><div class="col-sm-10"><input type="text" class="form-control" id="realName" name="realName" placeholder="请输入你的真实姓名（必填）"></div></div><div class="form-group"><label for="org" class="col-sm-2 control-label"><span class="cred">*</span>公司</label><div class="col-sm-10"><input id="suggestCompanyName" name="org" style="position:relative;" type="text"\n               placeholder="请输入你所在的公司（必填）"\n               class="input_nor contactword form-control"\n               value="" autocomplete="off">\x3c!--<input type="text" class="form-control" id="org" name="org" placeholder="请输入你所在的公司（必填）">--\x3e</div></div><div class="form-group"><label for="title" class="col-sm-2 control-label">职务</label><div class="col-sm-10"><input type="text" class="form-control" id="title" name="title" placeholder="请输入你的职务（非必填）"></div></div><div class="form-group"><label for="contactNumber" class="col-sm-2 control-label"><span class="cred">*</span>联系电话</label><div class="col-sm-10"><input type="text" class="form-control" id="contactNumber" name="contactNumber" placeholder=""></div></div></form><div class="text-center"><div class="btn btn-modal-primary" onclick="contact.userNickSubmit()">保存</div></div></div>',
                    i.trim()
            }
            ;
        var n = {
            locals: {},
            get: e,
            render: t
        };
        return n
    }),
    function (t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define("moment", e) : t.moment = e()
    }(this, function () {
        "use strict";
        function t() {
            return gs.apply(null, arguments)
        }
        function e(t) {
            return t instanceof Array || "[object Array]" === Object.prototype.toString.call(t)
        }
        function i(t) {
            return null != t && "[object Object]" === Object.prototype.toString.call(t)
        }
        function s(t) {
            var e;
            for (e in t)
                return !1;
            return !0
        }
        function a(t) {
            return void 0 === t
        }
        function n(t) {
            return "number" == typeof t || "[object Number]" === Object.prototype.toString.call(t)
        }
        function o(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }
        function r(t, e) {
            var i, s = [];
            for (i = 0; i < t.length; ++i)
                s.push(e(t[i], i));
            return s
        }
        function c(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        function l(t, e) {
            for (var i in e)
                c(e, i) && (t[i] = e[i]);
            return c(e, "toString") && (t.toString = e.toString),
                c(e, "valueOf") && (t.valueOf = e.valueOf),
                t
        }
        function d(t, e, i, s) {
            return ge(t, e, i, s, !0).utc()
        }
        function p() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1,
                parsedDateParts: [],
                meridiem: null,
                rfc2822: !1,
                weekdayMismatch: !1
            }
        }
        function u(t) {
            return null == t._pf && (t._pf = p()),
                t._pf
        }
        function v(t) {
            if (null == t._isValid) {
                var e = u(t)
                    , i = ys.call(e.parsedDateParts, function (t) {
                        return null != t
                    })
                    , s = !isNaN(t._d.getTime()) && e.overflow < 0 && !e.empty && !e.invalidMonth && !e.invalidWeekday && !e.nullInput && !e.invalidFormat && !e.userInvalidated && (!e.meridiem || e.meridiem && i);
                if (t._strict && (s = s && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour),
                    null != Object.isFrozen && Object.isFrozen(t))
                    return s;
                t._isValid = s
            }
            return t._isValid
        }
        function m(t) {
            var e = d(NaN);
            return null != t ? l(u(e), t) : u(e).userInvalidated = !0,
                e
        }
        function h(t, e) {
            var i, s, n;
            if (a(e._isAMomentObject) || (t._isAMomentObject = e._isAMomentObject),
                a(e._i) || (t._i = e._i),
                a(e._f) || (t._f = e._f),
                a(e._l) || (t._l = e._l),
                a(e._strict) || (t._strict = e._strict),
                a(e._tzm) || (t._tzm = e._tzm),
                a(e._isUTC) || (t._isUTC = e._isUTC),
                a(e._offset) || (t._offset = e._offset),
                a(e._pf) || (t._pf = u(e)),
                a(e._locale) || (t._locale = e._locale),
                ws.length > 0)
                for (i = 0; i < ws.length; i++)
                    s = ws[i],
                        n = e[s],
                        a(n) || (t[s] = n);
            return t
        }
        function f(e) {
            h(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                this.isValid() || (this._d = new Date(NaN)),
                !1 === _s && (_s = !0,
                    t.updateOffset(this),
                    _s = !1)
        }
        function g(t) {
            return t instanceof f || null != t && null != t._isAMomentObject
        }
        function b(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
        }
        function y(t) {
            var e = +t
                , i = 0;
            return 0 !== e && isFinite(e) && (i = b(e)),
                i
        }
        function w(t, e, i) {
            var s, a = Math.min(t.length, e.length), n = Math.abs(t.length - e.length), o = 0;
            for (s = 0; s < a; s++)
                (i && t[s] !== e[s] || !i && y(t[s]) !== y(e[s])) && o++;
            return o + n
        }
        function _(e) {
            !1 === t.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }
        function k(e, i) {
            var s = !0;
            return l(function () {
                if (null != t.deprecationHandler && t.deprecationHandler(null, e),
                    s) {
                    for (var a, n = [], o = 0; o < arguments.length; o++) {
                        if (a = "",
                            "object" == typeof arguments[o]) {
                            a += "\n[" + o + "] ";
                            for (var r in arguments[0])
                                a += r + ": " + arguments[0][r] + ", ";
                            a = a.slice(0, -2)
                        } else
                            a = arguments[o];
                        n.push(a)
                    }
                    _(e + "\nArguments: " + Array.prototype.slice.call(n).join("") + "\n" + Error().stack),
                        s = !1
                }
                return i.apply(this, arguments)
            }, i)
        }
        function x(e, i) {
            null != t.deprecationHandler && t.deprecationHandler(e, i),
                ks[e] || (_(i),
                    ks[e] = !0)
        }
        function C(t) {
            return t instanceof Function || "[object Function]" === Object.prototype.toString.call(t)
        }
        function I(t) {
            var e, i;
            for (i in t)
                e = t[i],
                    C(e) ? this[i] = e : this["_" + i] = e;
            this._config = t,
                this._dayOfMonthOrdinalParseLenient = RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
        }
        function M(t, e) {
            var s, a = l({}, t);
            for (s in e)
                c(e, s) && (i(t[s]) && i(e[s]) ? (a[s] = {},
                    l(a[s], t[s]),
                    l(a[s], e[s])) : null != e[s] ? a[s] = e[s] : delete a[s]);
            for (s in t)
                c(t, s) && !c(e, s) && i(t[s]) && (a[s] = l({}, a[s]));
            return a
        }
        function S(t) {
            null != t && this.set(t)
        }
        function P(t, e, i) {
            var s = this._calendar[t] || this._calendar.sameElse;
            return C(s) ? s.call(e, i) : s
        }
        function D(t) {
            var e = this._longDateFormat[t]
                , i = this._longDateFormat[t.toUpperCase()];
            return e || !i ? e : (this._longDateFormat[t] = i.replace(/MMMM|MM|DD|dddd/g, function (t) {
                return t.slice(1)
            }),
                this._longDateFormat[t])
        }
        function T() {
            return this._invalidDate
        }
        function j(t) {
            return this._ordinal.replace("%d", t)
        }
        function R(t, e, i, s) {
            var a = this._relativeTime[i];
            return C(a) ? a(t, e, i, s) : a.replace(/%d/i, t)
        }
        function N(t, e) {
            var i = this._relativeTime[t > 0 ? "future" : "past"];
            return C(i) ? i(e) : i.replace(/%s/i, e)
        }
        function E(t, e) {
            var i = t.toLowerCase();
            Ts[i] = Ts[i + "s"] = Ts[e] = t
        }
        function L(t) {
            return "string" == typeof t ? Ts[t] || Ts[t.toLowerCase()] : void 0
        }
        function O(t) {
            var e, i, s = {};
            for (i in t)
                c(t, i) && (e = L(i)) && (s[e] = t[i]);
            return s
        }
        function F(t, e) {
            js[t] = e
        }
        function B(t) {
            var e = [];
            for (var i in t)
                e.push({
                    unit: i,
                    priority: js[i]
                });
            return e.sort(function (t, e) {
                return t.priority - e.priority
            }),
                e
        }
        function U(e, i) {
            return function (s) {
                return null != s ? (Y(this, e, s),
                    t.updateOffset(this, i),
                    this) : A(this, e)
            }
        }
        function A(t, e) {
            return t.isValid() ? t._d["get" + (t._isUTC ? "UTC" : "") + e]() : NaN
        }
        function Y(t, e, i) {
            t.isValid() && t._d["set" + (t._isUTC ? "UTC" : "") + e](i)
        }
        function V(t) {
            return t = L(t),
                C(this[t]) ? this[t]() : this
        }
        function H(t, e) {
            if ("object" == typeof t) {
                t = O(t);
                for (var i = B(t), s = 0; s < i.length; s++)
                    this[i[s].unit](t[i[s].unit])
            } else if (t = L(t),
                C(this[t]))
                return this[t](e);
            return this
        }
        function G(t, e, i) {
            var s = "" + Math.abs(t)
                , a = e - s.length;
            return (t >= 0 ? i ? "+" : "" : "-") + ("" + Math.pow(10, Math.max(0, a))).substr(1) + s
        }
        function W(t, e, i, s) {
            var a = s;
            "string" == typeof s && (a = function () {
                return this[s]()
            }
            ),
                t && (Ls[t] = a),
                e && (Ls[e[0]] = function () {
                    return G(a.apply(this, arguments), e[1], e[2])
                }
                ),
                i && (Ls[i] = function () {
                    return this.localeData().ordinal(a.apply(this, arguments), t)
                }
                )
        }
        function q(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }
        function Q(t) {
            var e, i, s = t.match(Rs);
            for (e = 0,
                i = s.length; e < i; e++)
                Ls[s[e]] ? s[e] = Ls[s[e]] : s[e] = q(s[e]);
            return function (e) {
                var a, n = "";
                for (a = 0; a < i; a++)
                    n += C(s[a]) ? s[a].call(e, t) : s[a];
                return n
            }
        }
        function z(t, e) {
            return t.isValid() ? (e = $(e, t.localeData()),
                Es[e] = Es[e] || Q(e),
                Es[e](t)) : t.localeData().invalidDate()
        }
        function $(t, e) {
            function i(t) {
                return e.longDateFormat(t) || t
            }
            var s = 5;
            for (Ns.lastIndex = 0; s >= 0 && Ns.test(t);)
                t = t.replace(Ns, i),
                    Ns.lastIndex = 0,
                    s -= 1;
            return t
        }
        function X(t, e, i) {
            Ks[t] = C(e) ? e : function (t, s) {
                return t && i ? i : e
            }
        }
        function J(t, e) {
            return c(Ks, t) ? Ks[t](e._strict, e._locale) : RegExp(Z(t))
        }
        function Z(t) {
            return K(t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (t, e, i, s, a) {
                return e || i || s || a
            }))
        }
        function K(t) {
            return t.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function tt(t, e) {
            var i, s = e;
            for ("string" == typeof t && (t = [t]),
                n(e) && (s = function (t, i) {
                    i[e] = y(t)
                }
                ),
                i = 0; i < t.length; i++)
                ta[t[i]] = s
        }
        function et(t, e) {
            tt(t, function (t, i, s, a) {
                s._w = s._w || {},
                    e(t, s._w, s, a)
            })
        }
        function it(t, e, i) {
            null != e && c(ta, t) && ta[t](e, i._a, i, t)
        }
        function st(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }
        function at(t, i) {
            return t ? e(this._months) ? this._months[t.month()] : this._months[(this._months.isFormat || pa).test(i) ? "format" : "standalone"][t.month()] : e(this._months) ? this._months : this._months.standalone
        }
        function nt(t, i) {
            return t ? e(this._monthsShort) ? this._monthsShort[t.month()] : this._monthsShort[pa.test(i) ? "format" : "standalone"][t.month()] : e(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
        }
        function ot(t, e, i) {
            var s, a, n, o = t.toLocaleLowerCase();
            if (!this._monthsParse)
                for (this._monthsParse = [],
                    this._longMonthsParse = [],
                    this._shortMonthsParse = [],
                    s = 0; s < 12; ++s)
                    n = d([2e3, s]),
                        this._shortMonthsParse[s] = this.monthsShort(n, "").toLocaleLowerCase(),
                        this._longMonthsParse[s] = this.months(n, "").toLocaleLowerCase();
            return i ? "MMM" === e ? (a = da.call(this._shortMonthsParse, o),
                -1 !== a ? a : null) : (a = da.call(this._longMonthsParse, o),
                    -1 !== a ? a : null) : "MMM" === e ? -1 !== (a = da.call(this._shortMonthsParse, o)) ? a : (a = da.call(this._longMonthsParse, o),
                        -1 !== a ? a : null) : -1 !== (a = da.call(this._longMonthsParse, o)) ? a : (a = da.call(this._shortMonthsParse, o),
                            -1 !== a ? a : null)
        }
        function rt(t, e, i) {
            var s, a, n;
            if (this._monthsParseExact)
                return ot.call(this, t, e, i);
            for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                s = 0; s < 12; s++) {
                if (a = d([2e3, s]),
                    i && !this._longMonthsParse[s] && (this._longMonthsParse[s] = RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"),
                        this._shortMonthsParse[s] = RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")),
                    i || this._monthsParse[s] || (n = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""),
                        this._monthsParse[s] = RegExp(n.replace(".", ""), "i")),
                    i && "MMMM" === e && this._longMonthsParse[s].test(t))
                    return s;
                if (i && "MMM" === e && this._shortMonthsParse[s].test(t))
                    return s;
                if (!i && this._monthsParse[s].test(t))
                    return s
            }
        }
        function ct(t, e) {
            var i;
            if (!t.isValid())
                return t;
            if ("string" == typeof e)
                if (/^\d+$/.test(e))
                    e = y(e);
                else if (e = t.localeData().monthsParse(e),
                    !n(e))
                    return t;
            return i = Math.min(t.date(), st(t.year(), e)),
                t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, i),
                t
        }
        function lt(e) {
            return null != e ? (ct(this, e),
                t.updateOffset(this, !0),
                this) : A(this, "Month")
        }
        function dt() {
            return st(this.year(), this.month())
        }
        function pt(t) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || vt.call(this),
                t ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = ma),
                    this._monthsShortStrictRegex && t ? this._monthsShortStrictRegex : this._monthsShortRegex)
        }
        function ut(t) {
            return this._monthsParseExact ? (c(this, "_monthsRegex") || vt.call(this),
                t ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = ha),
                    this._monthsStrictRegex && t ? this._monthsStrictRegex : this._monthsRegex)
        }
        function vt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, s = [], a = [], n = [];
            for (e = 0; e < 12; e++)
                i = d([2e3, e]),
                    s.push(this.monthsShort(i, "")),
                    a.push(this.months(i, "")),
                    n.push(this.months(i, "")),
                    n.push(this.monthsShort(i, ""));
            for (s.sort(t),
                a.sort(t),
                n.sort(t),
                e = 0; e < 12; e++)
                s[e] = K(s[e]),
                    a[e] = K(a[e]);
            for (e = 0; e < 24; e++)
                n[e] = K(n[e]);
            this._monthsRegex = RegExp("^(" + n.join("|") + ")", "i"),
                this._monthsShortRegex = this._monthsRegex,
                this._monthsStrictRegex = RegExp("^(" + a.join("|") + ")", "i"),
                this._monthsShortStrictRegex = RegExp("^(" + s.join("|") + ")", "i")
        }
        function mt(t) {
            return ht(t) ? 366 : 365
        }
        function ht(t) {
            return t % 4 == 0 && t % 100 != 0 || t % 400 == 0
        }
        function ft() {
            return ht(this.year())
        }
        function gt(t, e, i, s, a, n, o) {
            var r = new Date(t, e, i, s, a, n, o);
            return t < 100 && t >= 0 && isFinite(r.getFullYear()) && r.setFullYear(t),
                r
        }
        function bt(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return t < 100 && t >= 0 && isFinite(e.getUTCFullYear()) && e.setUTCFullYear(t),
                e
        }
        function yt(t, e, i) {
            var s = 7 + e - i;
            return -(7 + bt(t, 0, s).getUTCDay() - e) % 7 + s - 1
        }
        function wt(t, e, i, s, a) {
            var n, o, r = (7 + i - s) % 7, c = yt(t, s, a), l = 1 + 7 * (e - 1) + r + c;
            return l <= 0 ? (n = t - 1,
                o = mt(n) + l) : l > mt(t) ? (n = t + 1,
                    o = l - mt(t)) : (n = t,
                        o = l),
                {
                    year: n,
                    dayOfYear: o
                }
        }
        function _t(t, e, i) {
            var s, a, n = yt(t.year(), e, i), o = Math.floor((t.dayOfYear() - n - 1) / 7) + 1;
            return o < 1 ? (a = t.year() - 1,
                s = o + kt(a, e, i)) : o > kt(t.year(), e, i) ? (s = o - kt(t.year(), e, i),
                    a = t.year() + 1) : (a = t.year(),
                        s = o),
                {
                    week: s,
                    year: a
                }
        }
        function kt(t, e, i) {
            var s = yt(t, e, i)
                , a = yt(t + 1, e, i);
            return (mt(t) - s + a) / 7
        }
        function xt(t) {
            return _t(t, this._week.dow, this._week.doy).week
        }
        function Ct() {
            return this._week.dow
        }
        function It() {
            return this._week.doy
        }
        function Mt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }
        function St(t) {
            var e = _t(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }
        function Pt(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t),
                "number" == typeof t ? t : null) : parseInt(t, 10)
        }
        function Dt(t, e) {
            return "string" == typeof t ? e.weekdaysParse(t) % 7 || 7 : isNaN(t) ? null : t
        }
        function Tt(t, i) {
            return t ? e(this._weekdays) ? this._weekdays[t.day()] : this._weekdays[this._weekdays.isFormat.test(i) ? "format" : "standalone"][t.day()] : e(this._weekdays) ? this._weekdays : this._weekdays.standalone
        }
        function jt(t) {
            return t ? this._weekdaysShort[t.day()] : this._weekdaysShort
        }
        function Rt(t) {
            return t ? this._weekdaysMin[t.day()] : this._weekdaysMin
        }
        function Nt(t, e, i) {
            var s, a, n, o = t.toLocaleLowerCase();
            if (!this._weekdaysParse)
                for (this._weekdaysParse = [],
                    this._shortWeekdaysParse = [],
                    this._minWeekdaysParse = [],
                    s = 0; s < 7; ++s)
                    n = d([2e3, 1]).day(s),
                        this._minWeekdaysParse[s] = this.weekdaysMin(n, "").toLocaleLowerCase(),
                        this._shortWeekdaysParse[s] = this.weekdaysShort(n, "").toLocaleLowerCase(),
                        this._weekdaysParse[s] = this.weekdays(n, "").toLocaleLowerCase();
            return i ? "dddd" === e ? (a = da.call(this._weekdaysParse, o),
                -1 !== a ? a : null) : "ddd" === e ? (a = da.call(this._shortWeekdaysParse, o),
                    -1 !== a ? a : null) : (a = da.call(this._minWeekdaysParse, o),
                        -1 !== a ? a : null) : "dddd" === e ? -1 !== (a = da.call(this._weekdaysParse, o)) ? a : -1 !== (a = da.call(this._shortWeekdaysParse, o)) ? a : (a = da.call(this._minWeekdaysParse, o),
                            -1 !== a ? a : null) : "ddd" === e ? -1 !== (a = da.call(this._shortWeekdaysParse, o)) ? a : -1 !== (a = da.call(this._weekdaysParse, o)) ? a : (a = da.call(this._minWeekdaysParse, o),
                                -1 !== a ? a : null) : -1 !== (a = da.call(this._minWeekdaysParse, o)) ? a : -1 !== (a = da.call(this._weekdaysParse, o)) ? a : (a = da.call(this._shortWeekdaysParse, o),
                                    -1 !== a ? a : null)
        }
        function Et(t, e, i) {
            var s, a, n;
            if (this._weekdaysParseExact)
                return Nt.call(this, t, e, i);
            for (this._weekdaysParse || (this._weekdaysParse = [],
                this._minWeekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._fullWeekdaysParse = []),
                s = 0; s < 7; s++) {
                if (a = d([2e3, 1]).day(s),
                    i && !this._fullWeekdaysParse[s] && (this._fullWeekdaysParse[s] = RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$", "i"),
                        this._shortWeekdaysParse[s] = RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$", "i"),
                        this._minWeekdaysParse[s] = RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$", "i")),
                    this._weekdaysParse[s] || (n = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""),
                        this._weekdaysParse[s] = RegExp(n.replace(".", ""), "i")),
                    i && "dddd" === e && this._fullWeekdaysParse[s].test(t))
                    return s;
                if (i && "ddd" === e && this._shortWeekdaysParse[s].test(t))
                    return s;
                if (i && "dd" === e && this._minWeekdaysParse[s].test(t))
                    return s;
                if (!i && this._weekdaysParse[s].test(t))
                    return s
            }
        }
        function Lt(t) {
            if (!this.isValid())
                return null != t ? this : NaN;
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = Pt(t, this.localeData()),
                this.add(t - e, "d")) : e
        }
        function Ot(t) {
            if (!this.isValid())
                return null != t ? this : NaN;
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }
        function Ft(t) {
            if (!this.isValid())
                return null != t ? this : NaN;
            if (null != t) {
                var e = Dt(t, this.localeData());
                return this.day(this.day() % 7 ? e : e - 7)
            }
            return this.day() || 7
        }
        function Bt(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yt.call(this),
                t ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = _a),
                    this._weekdaysStrictRegex && t ? this._weekdaysStrictRegex : this._weekdaysRegex)
        }
        function Ut(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yt.call(this),
                t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ka),
                    this._weekdaysShortStrictRegex && t ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        }
        function At(t) {
            return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Yt.call(this),
                t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xa),
                    this._weekdaysMinStrictRegex && t ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        }
        function Yt() {
            function t(t, e) {
                return e.length - t.length
            }
            var e, i, s, a, n, o = [], r = [], c = [], l = [];
            for (e = 0; e < 7; e++)
                i = d([2e3, 1]).day(e),
                    s = this.weekdaysMin(i, ""),
                    a = this.weekdaysShort(i, ""),
                    n = this.weekdays(i, ""),
                    o.push(s),
                    r.push(a),
                    c.push(n),
                    l.push(s),
                    l.push(a),
                    l.push(n);
            for (o.sort(t),
                r.sort(t),
                c.sort(t),
                l.sort(t),
                e = 0; e < 7; e++)
                r[e] = K(r[e]),
                    c[e] = K(c[e]),
                    l[e] = K(l[e]);
            this._weekdaysRegex = RegExp("^(" + l.join("|") + ")", "i"),
                this._weekdaysShortRegex = this._weekdaysRegex,
                this._weekdaysMinRegex = this._weekdaysRegex,
                this._weekdaysStrictRegex = RegExp("^(" + c.join("|") + ")", "i"),
                this._weekdaysShortStrictRegex = RegExp("^(" + r.join("|") + ")", "i"),
                this._weekdaysMinStrictRegex = RegExp("^(" + o.join("|") + ")", "i")
        }
        function Vt() {
            return this.hours() % 12 || 12
        }
        function Ht() {
            return this.hours() || 24
        }
        function Gt(t, e) {
            W(t, 0, 0, function () {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }
        function Wt(t, e) {
            return e._meridiemParse
        }
        function qt(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }
        function Qt(t, e, i) {
            return t > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
        }
        function zt(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }
        function $t(t) {
            for (var e, i, s, a, n = 0; n < t.length;) {
                for (a = zt(t[n]).split("-"),
                    e = a.length,
                    i = zt(t[n + 1]),
                    i = i ? i.split("-") : null; e > 0;) {
                    if (s = Xt(a.slice(0, e).join("-")))
                        return s;
                    if (i && i.length >= e && w(a, i, !0) >= e - 1)
                        break;
                    e--
                }
                n++
            }
            return null
        }
        function Xt(t) {
            var e = null;
            if (!Pa[t] && "undefined" != typeof module && module && module.exports)
                try {
                    e = Ca._abbr,
                        require("./locale/" + t),
                        Jt(e)
                } catch (t) { }
            return Pa[t]
        }
        function Jt(t, e) {
            var i;
            return t && (i = a(e) ? te(t) : Zt(t, e)) && (Ca = i),
                Ca._abbr
        }
        function Zt(t, e) {
            if (null !== e) {
                var i = Sa;
                if (e.abbr = t,
                    null != Pa[t])
                    x("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                        i = Pa[t]._config;
                else if (null != e.parentLocale) {
                    if (null == Pa[e.parentLocale])
                        return Da[e.parentLocale] || (Da[e.parentLocale] = []),
                            Da[e.parentLocale].push({
                                name: t,
                                config: e
                            }),
                            null;
                    i = Pa[e.parentLocale]._config
                }
                return Pa[t] = new S(M(i, e)),
                    Da[t] && Da[t].forEach(function (t) {
                        Zt(t.name, t.config)
                    }),
                    Jt(t),
                    Pa[t]
            }
            return delete Pa[t],
                null
        }
        function Kt(t, e) {
            if (null != e) {
                var i, s = Sa;
                null != Pa[t] && (s = Pa[t]._config),
                    e = M(s, e),
                    i = new S(e),
                    i.parentLocale = Pa[t],
                    Pa[t] = i,
                    Jt(t)
            } else
                null != Pa[t] && (null != Pa[t].parentLocale ? Pa[t] = Pa[t].parentLocale : null != Pa[t] && delete Pa[t]);
            return Pa[t]
        }
        function te(t) {
            var i;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
                !t)
                return Ca;
            if (!e(t)) {
                if (i = Xt(t))
                    return i;
                t = [t]
            }
            return $t(t)
        }
        function ee() {
            return Is(Pa)
        }
        function ie(t) {
            var e, i = t._a;
            return i && -2 === u(t).overflow && (e = i[ia] < 0 || i[ia] > 11 ? ia : i[sa] < 1 || i[sa] > st(i[ea], i[ia]) ? sa : i[aa] < 0 || i[aa] > 24 || 24 === i[aa] && (0 !== i[na] || 0 !== i[oa] || 0 !== i[ra]) ? aa : i[na] < 0 || i[na] > 59 ? na : i[oa] < 0 || i[oa] > 59 ? oa : i[ra] < 0 || i[ra] > 999 ? ra : -1,
                u(t)._overflowDayOfYear && (e < ea || e > sa) && (e = sa),
                u(t)._overflowWeeks && -1 === e && (e = ca),
                u(t)._overflowWeekday && -1 === e && (e = la),
                u(t).overflow = e),
                t
        }
        function se(t) {
            var e, i, s, a, n, o, r = t._i, c = Ta.exec(r) || ja.exec(r);
            if (c) {
                for (u(t).iso = !0,
                    e = 0,
                    i = Na.length; e < i; e++)
                    if (Na[e][1].exec(c[1])) {
                        a = Na[e][0],
                            s = !1 !== Na[e][2];
                        break
                    }
                if (null == a)
                    return void (t._isValid = !1);
                if (c[3]) {
                    for (e = 0,
                        i = Ea.length; e < i; e++)
                        if (Ea[e][1].exec(c[3])) {
                            n = (c[2] || " ") + Ea[e][0];
                            break
                        }
                    if (null == n)
                        return void (t._isValid = !1)
                }
                if (!s && null != n)
                    return void (t._isValid = !1);
                if (c[4]) {
                    if (!Ra.exec(c[4]))
                        return void (t._isValid = !1);
                    o = "Z"
                }
                t._f = a + (n || "") + (o || ""),
                    de(t)
            } else
                t._isValid = !1
        }
        function ae(t) {
            var e, i, s, a, n, o, r, c, l = {
                " GMT": " +0000",
                " EDT": " -0400",
                " EST": " -0500",
                " CDT": " -0500",
                " CST": " -0600",
                " MDT": " -0600",
                " MST": " -0700",
                " PDT": " -0700",
                " PST": " -0800"
            }, d = "YXWVUTSRQPONZABCDEFGHIKLM";
            if (e = t._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""),
                i = Oa.exec(e)) {
                if (s = i[1] ? "ddd" + (5 === i[1].length ? ", " : " ") : "",
                    a = "D MMM " + (i[2].length > 10 ? "YYYY " : "YY "),
                    n = "HH:mm" + (i[4] ? ":ss" : ""),
                    i[1]) {
                    var p = new Date(i[2])
                        , v = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][p.getDay()];
                    if (i[1].substr(0, 3) !== v)
                        return u(t).weekdayMismatch = !0,
                            void (t._isValid = !1)
                }
                switch (i[5].length) {
                    case 2:
                        0 === c ? r = " +0000" : (c = d.indexOf(i[5][1].toUpperCase()) - 12,
                            r = (c < 0 ? " -" : " +") + ("" + c).replace(/^-?/, "0").match(/..$/)[0] + "00");
                        break;
                    case 4:
                        r = l[i[5]];
                        break;
                    default:
                        r = " +0000"
                }
                i[5] = r,
                    t._i = i.splice(1).join(""),
                    o = " ZZ",
                    t._f = s + a + n + o,
                    de(t),
                    u(t).rfc2822 = !0
            } else
                t._isValid = !1
        }
        function ne(e) {
            var i = La.exec(e._i);
            if (null !== i)
                return void (e._d = new Date(+i[1]));
            se(e),
                !1 === e._isValid && (delete e._isValid,
                    ae(e),
                    !1 === e._isValid && (delete e._isValid,
                        t.createFromInputFallback(e)))
        }
        function oe(t, e, i) {
            return null != t ? t : null != e ? e : i
        }
        function re(e) {
            var i = new Date(t.now());
            return e._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
        }
        function ce(t) {
            var e, i, s, a, n = [];
            if (!t._d) {
                for (s = re(t),
                    t._w && null == t._a[sa] && null == t._a[ia] && le(t),
                    null != t._dayOfYear && (a = oe(t._a[ea], s[ea]),
                        (t._dayOfYear > mt(a) || 0 === t._dayOfYear) && (u(t)._overflowDayOfYear = !0),
                        i = bt(a, 0, t._dayOfYear),
                        t._a[ia] = i.getUTCMonth(),
                        t._a[sa] = i.getUTCDate()),
                    e = 0; e < 3 && null == t._a[e]; ++e)
                    t._a[e] = n[e] = s[e];
                for (; e < 7; e++)
                    t._a[e] = n[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[aa] && 0 === t._a[na] && 0 === t._a[oa] && 0 === t._a[ra] && (t._nextDay = !0,
                    t._a[aa] = 0),
                    t._d = (t._useUTC ? bt : gt).apply(null, n),
                    null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                    t._nextDay && (t._a[aa] = 24)
            }
        }
        function le(t) {
            var e, i, s, a, n, o, r, c;
            if (e = t._w,
                null != e.GG || null != e.W || null != e.E)
                n = 1,
                    o = 4,
                    i = oe(e.GG, t._a[ea], _t(be(), 1, 4).year),
                    s = oe(e.W, 1),
                    ((a = oe(e.E, 1)) < 1 || a > 7) && (c = !0);
            else {
                n = t._locale._week.dow,
                    o = t._locale._week.doy;
                var l = _t(be(), n, o);
                i = oe(e.gg, t._a[ea], l.year),
                    s = oe(e.w, l.week),
                    null != e.d ? ((a = e.d) < 0 || a > 6) && (c = !0) : null != e.e ? (a = e.e + n,
                        (e.e < 0 || e.e > 6) && (c = !0)) : a = n
            }
            s < 1 || s > kt(i, n, o) ? u(t)._overflowWeeks = !0 : null != c ? u(t)._overflowWeekday = !0 : (r = wt(i, s, a, n, o),
                t._a[ea] = r.year,
                t._dayOfYear = r.dayOfYear)
        }
        function de(e) {
            if (e._f === t.ISO_8601)
                return void se(e);
            if (e._f === t.RFC_2822)
                return void ae(e);
            e._a = [],
                u(e).empty = !0;
            var i, s, a, n, o, r = "" + e._i, c = r.length, l = 0;
            for (a = $(e._f, e._locale).match(Rs) || [],
                i = 0; i < a.length; i++)
                n = a[i],
                    s = (r.match(J(n, e)) || [])[0],
                    s && (o = r.substr(0, r.indexOf(s)),
                        o.length > 0 && u(e).unusedInput.push(o),
                        r = r.slice(r.indexOf(s) + s.length),
                        l += s.length),
                    Ls[n] ? (s ? u(e).empty = !1 : u(e).unusedTokens.push(n),
                        it(n, s, e)) : e._strict && !s && u(e).unusedTokens.push(n);
            u(e).charsLeftOver = c - l,
                r.length > 0 && u(e).unusedInput.push(r),
                e._a[aa] <= 12 && !0 === u(e).bigHour && e._a[aa] > 0 && (u(e).bigHour = void 0),
                u(e).parsedDateParts = e._a.slice(0),
                u(e).meridiem = e._meridiem,
                e._a[aa] = pe(e._locale, e._a[aa], e._meridiem),
                ce(e),
                ie(e)
        }
        function pe(t, e, i) {
            var s;
            return null == i ? e : null != t.meridiemHour ? t.meridiemHour(e, i) : null != t.isPM ? (s = t.isPM(i),
                s && e < 12 && (e += 12),
                s || 12 !== e || (e = 0),
                e) : e
        }
        function ue(t) {
            var e, i, s, a, n;
            if (0 === t._f.length)
                return u(t).invalidFormat = !0,
                    void (t._d = new Date(NaN));
            for (a = 0; a < t._f.length; a++)
                n = 0,
                    e = h({}, t),
                    null != t._useUTC && (e._useUTC = t._useUTC),
                    e._f = t._f[a],
                    de(e),
                    v(e) && (n += u(e).charsLeftOver,
                        n += 10 * u(e).unusedTokens.length,
                        u(e).score = n,
                        (null == s || n < s) && (s = n,
                            i = e));
            l(t, i || e)
        }
        function ve(t) {
            if (!t._d) {
                var e = O(t._i);
                t._a = r([e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond], function (t) {
                    return t && parseInt(t, 10)
                }),
                    ce(t)
            }
        }
        function me(t) {
            var e = new f(ie(he(t)));
            return e._nextDay && (e.add(1, "d"),
                e._nextDay = void 0),
                e
        }
        function he(t) {
            var i = t._i
                , s = t._f;
            return t._locale = t._locale || te(t._l),
                null === i || void 0 === s && "" === i ? m({
                    nullInput: !0
                }) : ("string" == typeof i && (t._i = i = t._locale.preparse(i)),
                    g(i) ? new f(ie(i)) : (o(i) ? t._d = i : e(s) ? ue(t) : s ? de(t) : fe(t),
                        v(t) || (t._d = null),
                        t))
        }
        function fe(s) {
            var c = s._i;
            a(c) ? s._d = new Date(t.now()) : o(c) ? s._d = new Date(c.valueOf()) : "string" == typeof c ? ne(s) : e(c) ? (s._a = r(c.slice(0), function (t) {
                return parseInt(t, 10)
            }),
                ce(s)) : i(c) ? ve(s) : n(c) ? s._d = new Date(c) : t.createFromInputFallback(s)
        }
        function ge(t, a, n, o, r) {
            var c = {};
            return !0 !== n && !1 !== n || (o = n,
                n = void 0),
                (i(t) && s(t) || e(t) && 0 === t.length) && (t = void 0),
                c._isAMomentObject = !0,
                c._useUTC = c._isUTC = r,
                c._l = n,
                c._i = t,
                c._f = a,
                c._strict = o,
                me(c)
        }
        function be(t, e, i, s) {
            return ge(t, e, i, s, !1)
        }
        function ye(t, i) {
            var s, a;
            if (1 === i.length && e(i[0]) && (i = i[0]),
                !i.length)
                return be();
            for (s = i[0],
                a = 1; a < i.length; ++a)
                i[a].isValid() && !i[a][t](s) || (s = i[a]);
            return s
        }
        function we() {
            return ye("isBefore", [].slice.call(arguments, 0))
        }
        function _e() {
            return ye("isAfter", [].slice.call(arguments, 0))
        }
        function ke(t) {
            for (var e in t)
                if (-1 === Aa.indexOf(e) || null != t[e] && isNaN(t[e]))
                    return !1;
            for (var i = !1, s = 0; s < Aa.length; ++s)
                if (t[Aa[s]]) {
                    if (i)
                        return !1;
                    parseFloat(t[Aa[s]]) !== y(t[Aa[s]]) && (i = !0)
                }
            return !0
        }
        function xe() {
            return this._isValid
        }
        function Ce() {
            return He(NaN)
        }
        function Ie(t) {
            var e = O(t)
                , i = e.year || 0
                , s = e.quarter || 0
                , a = e.month || 0
                , n = e.week || 0
                , o = e.day || 0
                , r = e.hour || 0
                , c = e.minute || 0
                , l = e.second || 0
                , d = e.millisecond || 0;
            this._isValid = ke(e),
                this._milliseconds = +d + 1e3 * l + 6e4 * c + 1e3 * r * 60 * 60,
                this._days = +o + 7 * n,
                this._months = +a + 3 * s + 12 * i,
                this._data = {},
                this._locale = te(),
                this._bubble()
        }
        function Me(t) {
            return t instanceof Ie
        }
        function Se(t) {
            return t < 0 ? -1 * Math.round(-1 * t) : Math.round(t)
        }
        function Pe(t, e) {
            W(t, 0, 0, function () {
                var t = this.utcOffset()
                    , i = "+";
                return t < 0 && (t = -t,
                    i = "-"),
                    i + G(~~(t / 60), 2) + e + G(~~t % 60, 2)
            })
        }
        function De(t, e) {
            var i = (e || "").match(t);
            if (null === i)
                return null;
            var s = i[i.length - 1] || []
                , a = (s + "").match(Ya) || ["-", 0, 0]
                , n = 60 * a[1] + y(a[2]);
            return 0 === n ? 0 : "+" === a[0] ? n : -n
        }
        function Te(e, i) {
            var s, a;
            return i._isUTC ? (s = i.clone(),
                a = (g(e) || o(e) ? e.valueOf() : be(e).valueOf()) - s.valueOf(),
                s._d.setTime(s._d.valueOf() + a),
                t.updateOffset(s, !1),
                s) : be(e).local()
        }
        function je(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }
        function Re(e, i, s) {
            var a, n = this._offset || 0;
            if (!this.isValid())
                return null != e ? this : NaN;
            if (null != e) {
                if ("string" == typeof e) {
                    if (null === (e = De(Xs, e)))
                        return this
                } else
                    Math.abs(e) < 16 && !s && (e *= 60);
                return !this._isUTC && i && (a = je(this)),
                    this._offset = e,
                    this._isUTC = !0,
                    null != a && this.add(a, "m"),
                    n !== e && (!i || this._changeInProgress ? ze(this, He(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                        t.updateOffset(this, !0),
                        this._changeInProgress = null)),
                    this
            }
            return this._isUTC ? n : je(this)
        }
        function Ne(t, e) {
            return null != t ? ("string" != typeof t && (t = -t),
                this.utcOffset(t, e),
                this) : -this.utcOffset()
        }
        function Ee(t) {
            return this.utcOffset(0, t)
        }
        function Le(t) {
            return this._isUTC && (this.utcOffset(0, t),
                this._isUTC = !1,
                t && this.subtract(je(this), "m")),
                this
        }
        function Oe() {
            if (null != this._tzm)
                this.utcOffset(this._tzm, !1, !0);
            else if ("string" == typeof this._i) {
                var t = De($s, this._i);
                null != t ? this.utcOffset(t) : this.utcOffset(0, !0)
            }
            return this
        }
        function Fe(t) {
            return !!this.isValid() && (t = t ? be(t).utcOffset() : 0,
                (this.utcOffset() - t) % 60 == 0)
        }
        function Be() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }
        function Ue() {
            if (!a(this._isDSTShifted))
                return this._isDSTShifted;
            var t = {};
            if (h(t, this),
                t = he(t),
                t._a) {
                var e = t._isUTC ? d(t._a) : be(t._a);
                this._isDSTShifted = this.isValid() && w(t._a, e.toArray()) > 0
            } else
                this._isDSTShifted = !1;
            return this._isDSTShifted
        }
        function Ae() {
            return !!this.isValid() && !this._isUTC
        }
        function Ye() {
            return !!this.isValid() && this._isUTC
        }
        function Ve() {
            return !!this.isValid() && (this._isUTC && 0 === this._offset)
        }
        function He(t, e) {
            var i, s, a, o = t, r = null;
            return Me(t) ? o = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : n(t) ? (o = {},
                e ? o[e] = t : o.milliseconds = t) : (r = Va.exec(t)) ? (i = "-" === r[1] ? -1 : 1,
                    o = {
                        y: 0,
                        d: y(r[sa]) * i,
                        h: y(r[aa]) * i,
                        m: y(r[na]) * i,
                        s: y(r[oa]) * i,
                        ms: y(Se(1e3 * r[ra])) * i
                    }) : (r = Ha.exec(t)) ? (i = "-" === r[1] ? -1 : 1,
                        o = {
                            y: Ge(r[2], i),
                            M: Ge(r[3], i),
                            w: Ge(r[4], i),
                            d: Ge(r[5], i),
                            h: Ge(r[6], i),
                            m: Ge(r[7], i),
                            s: Ge(r[8], i)
                        }) : null == o ? o = {} : "object" == typeof o && ("from" in o || "to" in o) && (a = qe(be(o.from), be(o.to)),
                            o = {},
                            o.ms = a.milliseconds,
                            o.M = a.months),
                s = new Ie(o),
                Me(t) && c(t, "_locale") && (s._locale = t._locale),
                s
        }
        function Ge(t, e) {
            var i = t && parseFloat(t.replace(",", "."));
            return (isNaN(i) ? 0 : i) * e
        }
        function We(t, e) {
            var i = {
                milliseconds: 0,
                months: 0
            };
            return i.months = e.month() - t.month() + 12 * (e.year() - t.year()),
                t.clone().add(i.months, "M").isAfter(e) && --i.months,
                i.milliseconds = +e - +t.clone().add(i.months, "M"),
                i
        }
        function qe(t, e) {
            var i;
            return t.isValid() && e.isValid() ? (e = Te(e, t),
                t.isBefore(e) ? i = We(t, e) : (i = We(e, t),
                    i.milliseconds = -i.milliseconds,
                    i.months = -i.months),
                i) : {
                    milliseconds: 0,
                    months: 0
                }
        }
        function Qe(t, e) {
            return function (i, s) {
                var a, n;
                return null === s || isNaN(+s) || (x(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                    n = i,
                    i = s,
                    s = n),
                    i = "string" == typeof i ? +i : i,
                    a = He(i, s),
                    ze(this, a, t),
                    this
            }
        }
        function ze(e, i, s, a) {
            var n = i._milliseconds
                , o = Se(i._days)
                , r = Se(i._months);
            e.isValid() && (a = null == a || a,
                n && e._d.setTime(e._d.valueOf() + n * s),
                o && Y(e, "Date", A(e, "Date") + o * s),
                r && ct(e, A(e, "Month") + r * s),
                a && t.updateOffset(e, o || r))
        }
        function $e(t, e) {
            var i = t.diff(e, "days", !0);
            return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
        }
        function Xe(e, i) {
            var s = e || be()
                , a = Te(s, this).startOf("day")
                , n = t.calendarFormat(this, a) || "sameElse"
                , o = i && (C(i[n]) ? i[n].call(this, s) : i[n]);
            return this.format(o || this.localeData().calendar(n, this, be(s)))
        }
        function Je() {
            return new f(this)
        }
        function Ze(t, e) {
            var i = g(t) ? t : be(t);
            return !(!this.isValid() || !i.isValid()) && (e = L(a(e) ? "millisecond" : e),
                "millisecond" === e ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(e).valueOf())
        }
        function Ke(t, e) {
            var i = g(t) ? t : be(t);
            return !(!this.isValid() || !i.isValid()) && (e = L(a(e) ? "millisecond" : e),
                "millisecond" === e ? this.valueOf() < i.valueOf() : this.clone().endOf(e).valueOf() < i.valueOf())
        }
        function ti(t, e, i, s) {
            return s = s || "()",
                ("(" === s[0] ? this.isAfter(t, i) : !this.isBefore(t, i)) && (")" === s[1] ? this.isBefore(e, i) : !this.isAfter(e, i))
        }
        function ei(t, e) {
            var i, s = g(t) ? t : be(t);
            return !(!this.isValid() || !s.isValid()) && (e = L(e || "millisecond"),
                "millisecond" === e ? this.valueOf() === s.valueOf() : (i = s.valueOf(),
                    this.clone().startOf(e).valueOf() <= i && i <= this.clone().endOf(e).valueOf()))
        }
        function ii(t, e) {
            return this.isSame(t, e) || this.isAfter(t, e)
        }
        function si(t, e) {
            return this.isSame(t, e) || this.isBefore(t, e)
        }
        function ai(t, e, i) {
            var s, a, n, o;
            return this.isValid() ? (s = Te(t, this),
                s.isValid() ? (a = 6e4 * (s.utcOffset() - this.utcOffset()),
                    e = L(e),
                    "year" === e || "month" === e || "quarter" === e ? (o = ni(this, s),
                        "quarter" === e ? o /= 3 : "year" === e && (o /= 12)) : (n = this - s,
                            o = "second" === e ? n / 1e3 : "minute" === e ? n / 6e4 : "hour" === e ? n / 36e5 : "day" === e ? (n - a) / 864e5 : "week" === e ? (n - a) / 6048e5 : n),
                    i ? o : b(o)) : NaN) : NaN
        }
        function ni(t, e) {
            var i, s, a = 12 * (e.year() - t.year()) + (e.month() - t.month()), n = t.clone().add(a, "months");
            return e - n < 0 ? (i = t.clone().add(a - 1, "months"),
                s = (e - n) / (n - i)) : (i = t.clone().add(a + 1, "months"),
                    s = (e - n) / (i - n)),
                -(a + s) || 0
        }
        function oi() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        function ri() {
            if (!this.isValid())
                return null;
            var t = this.clone().utc();
            return t.year() < 0 || t.year() > 9999 ? z(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : C(Date.prototype.toISOString) ? this.toDate().toISOString() : z(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }
        function ci() {
            if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
            var t = "moment"
                , e = "";
            this.isLocal() || (t = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                e = "Z");
            var i = "[" + t + '("]'
                , s = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                , a = e + '[")]';
            return this.format(i + s + "-MM-DD[T]HH:mm:ss.SSS" + a)
        }
        function li(e) {
            e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
            var i = z(this, e);
            return this.localeData().postformat(i)
        }
        function di(t, e) {
            return this.isValid() && (g(t) && t.isValid() || be(t).isValid()) ? He({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }
        function pi(t) {
            return this.from(be(), t)
        }
        function ui(t, e) {
            return this.isValid() && (g(t) && t.isValid() || be(t).isValid()) ? He({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }
        function vi(t) {
            return this.to(be(), t)
        }
        function mi(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = te(t),
                null != e && (this._locale = e),
                this)
        }
        function hi() {
            return this._locale
        }
        function fi(t) {
            switch (t = L(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                case "date":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0),
                "isoWeek" === t && this.isoWeekday(1),
                "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
                this
        }
        function gi(t) {
            return void 0 === (t = L(t)) || "millisecond" === t ? this : ("date" === t && (t = "day"),
                this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms"))
        }
        function bi() {
            return this._d.valueOf() - 6e4 * (this._offset || 0)
        }
        function yi() {
            return Math.floor(this.valueOf() / 1e3)
        }
        function wi() {
            return new Date(this.valueOf())
        }
        function _i() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }
        function ki() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }
        function xi() {
            return this.isValid() ? this.toISOString() : null
        }
        function Ci() {
            return v(this)
        }
        function Ii() {
            return l({}, u(this))
        }
        function Mi() {
            return u(this).overflow
        }
        function Si() {
            return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict
            }
        }
        function Pi(t, e) {
            W(0, [t, t.length], 0, e)
        }
        function Di(t) {
            return Ni.call(this, t, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
        }
        function Ti(t) {
            return Ni.call(this, t, this.isoWeek(), this.isoWeekday(), 1, 4)
        }
        function ji() {
            return kt(this.year(), 1, 4)
        }
        function Ri() {
            var t = this.localeData()._week;
            return kt(this.year(), t.dow, t.doy)
        }
        function Ni(t, e, i, s, a) {
            var n;
            return null == t ? _t(this, s, a).year : (n = kt(t, s, a),
                e > n && (e = n),
                Ei.call(this, t, e, i, s, a))
        }
        function Ei(t, e, i, s, a) {
            var n = wt(t, e, i, s, a)
                , o = bt(n.year, 0, n.dayOfYear);
            return this.year(o.getUTCFullYear()),
                this.month(o.getUTCMonth()),
                this.date(o.getUTCDate()),
                this
        }
        function Li(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }
        function Oi(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }
        function Fi(t, e) {
            e[ra] = y(1e3 * ("0." + t))
        }
        function Bi() {
            return this._isUTC ? "UTC" : ""
        }
        function Ui() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        function Ai(t) {
            return be(1e3 * t)
        }
        function Yi() {
            return be.apply(null, arguments).parseZone()
        }
        function Vi(t) {
            return t
        }
        function Hi(t, e, i, s) {
            var a = te()
                , n = d().set(s, e);
            return a[i](n, t)
        }
        function Gi(t, e, i) {
            if (n(t) && (e = t,
                t = void 0),
                t = t || "",
                null != e)
                return Hi(t, e, i, "month");
            var s, a = [];
            for (s = 0; s < 12; s++)
                a[s] = Hi(t, s, i, "month");
            return a
        }
        function Wi(t, e, i, s) {
            "boolean" == typeof t ? (n(e) && (i = e,
                e = void 0),
                e = e || "") : (e = t,
                    i = e,
                    t = !1,
                    n(e) && (i = e,
                        e = void 0),
                    e = e || "");
            var a = te()
                , o = t ? a._week.dow : 0;
            if (null != i)
                return Hi(e, (i + o) % 7, s, "day");
            var r, c = [];
            for (r = 0; r < 7; r++)
                c[r] = Hi(e, (r + o) % 7, s, "day");
            return c
        }
        function qi(t, e) {
            return Gi(t, e, "months")
        }
        function Qi(t, e) {
            return Gi(t, e, "monthsShort")
        }
        function zi(t, e, i) {
            return Wi(t, e, i, "weekdays")
        }
        function $i(t, e, i) {
            return Wi(t, e, i, "weekdaysShort")
        }
        function Xi(t, e, i) {
            return Wi(t, e, i, "weekdaysMin")
        }
        function Ji() {
            var t = this._data;
            return this._milliseconds = tn(this._milliseconds),
                this._days = tn(this._days),
                this._months = tn(this._months),
                t.milliseconds = tn(t.milliseconds),
                t.seconds = tn(t.seconds),
                t.minutes = tn(t.minutes),
                t.hours = tn(t.hours),
                t.months = tn(t.months),
                t.years = tn(t.years),
                this
        }
        function Zi(t, e, i, s) {
            var a = He(e, i);
            return t._milliseconds += s * a._milliseconds,
                t._days += s * a._days,
                t._months += s * a._months,
                t._bubble()
        }
        function Ki(t, e) {
            return Zi(this, t, e, 1)
        }
        function ts(t, e) {
            return Zi(this, t, e, -1)
        }
        function es(t) {
            return t < 0 ? Math.floor(t) : Math.ceil(t)
        }
        function is() {
            var t, e, i, s, a, n = this._milliseconds, o = this._days, r = this._months, c = this._data;
            return n >= 0 && o >= 0 && r >= 0 || n <= 0 && o <= 0 && r <= 0 || (n += 864e5 * es(as(r) + o),
                o = 0,
                r = 0),
                c.milliseconds = n % 1e3,
                t = b(n / 1e3),
                c.seconds = t % 60,
                e = b(t / 60),
                c.minutes = e % 60,
                i = b(e / 60),
                c.hours = i % 24,
                o += b(i / 24),
                a = b(ss(o)),
                r += a,
                o -= es(as(a)),
                s = b(r / 12),
                r %= 12,
                c.days = o,
                c.months = r,
                c.years = s,
                this
        }
        function ss(t) {
            return 4800 * t / 146097
        }
        function as(t) {
            return 146097 * t / 4800
        }
        function ns(t) {
            if (!this.isValid())
                return NaN;
            var e, i, s = this._milliseconds;
            if ("month" === (t = L(t)) || "year" === t)
                return e = this._days + s / 864e5,
                    i = this._months + ss(e),
                    "month" === t ? i : i / 12;
            switch (e = this._days + Math.round(as(this._months)),
            t) {
                case "week":
                    return e / 7 + s / 6048e5;
                case "day":
                    return e + s / 864e5;
                case "hour":
                    return 24 * e + s / 36e5;
                case "minute":
                    return 1440 * e + s / 6e4;
                case "second":
                    return 86400 * e + s / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + s;
                default:
                    throw Error("Unknown unit " + t)
            }
        }
        function os() {
            return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12) : NaN
        }
        function rs(t) {
            return function () {
                return this.as(t)
            }
        }
        function cs(t) {
            return t = L(t),
                this.isValid() ? this[t + "s"]() : NaN
        }
        function ls(t) {
            return function () {
                return this.isValid() ? this._data[t] : NaN
            }
        }
        function ds() {
            return b(this.days() / 7)
        }
        function ps(t, e, i, s, a) {
            return a.relativeTime(e || 1, !!i, t, s)
        }
        function us(t, e, i) {
            var s = He(t).abs()
                , a = gn(s.as("s"))
                , n = gn(s.as("m"))
                , o = gn(s.as("h"))
                , r = gn(s.as("d"))
                , c = gn(s.as("M"))
                , l = gn(s.as("y"))
                , d = a <= bn.ss && ["s", a] || a < bn.s && ["ss", a] || n <= 1 && ["m"] || n < bn.m && ["mm", n] || o <= 1 && ["h"] || o < bn.h && ["hh", o] || r <= 1 && ["d"] || r < bn.d && ["dd", r] || c <= 1 && ["M"] || c < bn.M && ["MM", c] || l <= 1 && ["y"] || ["yy", l];
            return d[2] = e,
                d[3] = +t > 0,
                d[4] = i,
                ps.apply(null, d)
        }
        function vs(t) {
            return void 0 === t ? gn : "function" == typeof t && (gn = t,
                !0)
        }
        function ms(t, e) {
            return void 0 !== bn[t] && (void 0 === e ? bn[t] : (bn[t] = e,
                "s" === t && (bn.ss = e - 1),
                !0))
        }
        function hs(t) {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var e = this.localeData()
                , i = us(this, !t, e);
            return t && (i = e.pastFuture(+this, i)),
                e.postformat(i)
        }
        function fs() {
            if (!this.isValid())
                return this.localeData().invalidDate();
            var t, e, i, s = yn(this._milliseconds) / 1e3, a = yn(this._days), n = yn(this._months);
            t = b(s / 60),
                e = b(t / 60),
                s %= 60,
                t %= 60,
                i = b(n / 12),
                n %= 12;
            var o = i
                , r = n
                , c = a
                , l = e
                , d = t
                , p = s
                , u = this.asSeconds();
            return u ? (u < 0 ? "-" : "") + "P" + (o ? o + "Y" : "") + (r ? r + "M" : "") + (c ? c + "D" : "") + (l || d || p ? "T" : "") + (l ? l + "H" : "") + (d ? d + "M" : "") + (p ? p + "S" : "") : "P0D"
        }
        var gs, bs;
        bs = Array.prototype.some ? Array.prototype.some : function (t) {
            for (var e = Object(this), i = e.length >>> 0, s = 0; s < i; s++)
                if (s in e && t.call(this, e[s], s, e))
                    return !0;
            return !1
        }
            ;
        var ys = bs
            , ws = t.momentProperties = []
            , _s = !1
            , ks = {};
        t.suppressDeprecationWarnings = !1,
            t.deprecationHandler = null;
        var xs;
        xs = Object.keys ? Object.keys : function (t) {
            var e, i = [];
            for (e in t)
                c(t, e) && i.push(e);
            return i
        }
            ;
        var Cs, Is = xs, Ms = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        }, Ss = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }, Ps = /\d{1,2}/, Ds = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            ss: "%d seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }, Ts = {}, js = {}, Rs = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Ns = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Es = {}, Ls = {}, Os = /\d/, Fs = /\d\d/, Bs = /\d{3}/, Us = /\d{4}/, As = /[+-]?\d{6}/, Ys = /\d\d?/, Vs = /\d\d\d\d?/, Hs = /\d\d\d\d\d\d?/, Gs = /\d{1,3}/, Ws = /\d{1,4}/, qs = /[+-]?\d{1,6}/, Qs = /\d+/, zs = /[+-]?\d+/, $s = /Z|[+-]\d\d:?\d\d/gi, Xs = /Z|[+-]\d\d(?::?\d\d)?/gi, Js = /[+-]?\d+(\.\d{1,3})?/, Zs = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Ks = {}, ta = {}, ea = 0, ia = 1, sa = 2, aa = 3, na = 4, oa = 5, ra = 6, ca = 7, la = 8;
        Cs = Array.prototype.indexOf ? Array.prototype.indexOf : function (t) {
            var e;
            for (e = 0; e < this.length; ++e)
                if (this[e] === t)
                    return e;
            return -1
        }
            ;
        var da = Cs;
        W("M", ["MM", 2], "Mo", function () {
            return this.month() + 1
        }),
            W("MMM", 0, 0, function (t) {
                return this.localeData().monthsShort(this, t)
            }),
            W("MMMM", 0, 0, function (t) {
                return this.localeData().months(this, t)
            }),
            E("month", "M"),
            F("month", 8),
            X("M", Ys),
            X("MM", Ys, Fs),
            X("MMM", function (t, e) {
                return e.monthsShortRegex(t)
            }),
            X("MMMM", function (t, e) {
                return e.monthsRegex(t)
            }),
            tt(["M", "MM"], function (t, e) {
                e[ia] = y(t) - 1
            }),
            tt(["MMM", "MMMM"], function (t, e, i, s) {
                var a = i._locale.monthsParse(t, s, i._strict);
                null != a ? e[ia] = a : u(i).invalidMonth = t
            });
        var pa = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
            , ua = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            , va = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
            , ma = Zs
            , ha = Zs;
        W("Y", 0, 0, function () {
            var t = this.year();
            return t <= 9999 ? "" + t : "+" + t
        }),
            W(0, ["YY", 2], 0, function () {
                return this.year() % 100
            }),
            W(0, ["YYYY", 4], 0, "year"),
            W(0, ["YYYYY", 5], 0, "year"),
            W(0, ["YYYYYY", 6, !0], 0, "year"),
            E("year", "y"),
            F("year", 1),
            X("Y", zs),
            X("YY", Ys, Fs),
            X("YYYY", Ws, Us),
            X("YYYYY", qs, As),
            X("YYYYYY", qs, As),
            tt(["YYYYY", "YYYYYY"], ea),
            tt("YYYY", function (e, i) {
                i[ea] = 2 === e.length ? t.parseTwoDigitYear(e) : y(e)
            }),
            tt("YY", function (e, i) {
                i[ea] = t.parseTwoDigitYear(e)
            }),
            tt("Y", function (t, e) {
                e[ea] = parseInt(t, 10)
            }),
            t.parseTwoDigitYear = function (t) {
                return y(t) + (y(t) > 68 ? 1900 : 2e3)
            }
            ;
        var fa = U("FullYear", !0);
        W("w", ["ww", 2], "wo", "week"),
            W("W", ["WW", 2], "Wo", "isoWeek"),
            E("week", "w"),
            E("isoWeek", "W"),
            F("week", 5),
            F("isoWeek", 5),
            X("w", Ys),
            X("ww", Ys, Fs),
            X("W", Ys),
            X("WW", Ys, Fs),
            et(["w", "ww", "W", "WW"], function (t, e, i, s) {
                e[s.substr(0, 1)] = y(t)
            });
        var ga = {
            dow: 0,
            doy: 6
        };
        W("d", 0, "do", "day"),
            W("dd", 0, 0, function (t) {
                return this.localeData().weekdaysMin(this, t)
            }),
            W("ddd", 0, 0, function (t) {
                return this.localeData().weekdaysShort(this, t)
            }),
            W("dddd", 0, 0, function (t) {
                return this.localeData().weekdays(this, t)
            }),
            W("e", 0, 0, "weekday"),
            W("E", 0, 0, "isoWeekday"),
            E("day", "d"),
            E("weekday", "e"),
            E("isoWeekday", "E"),
            F("day", 11),
            F("weekday", 11),
            F("isoWeekday", 11),
            X("d", Ys),
            X("e", Ys),
            X("E", Ys),
            X("dd", function (t, e) {
                return e.weekdaysMinRegex(t)
            }),
            X("ddd", function (t, e) {
                return e.weekdaysShortRegex(t)
            }),
            X("dddd", function (t, e) {
                return e.weekdaysRegex(t)
            }),
            et(["dd", "ddd", "dddd"], function (t, e, i, s) {
                var a = i._locale.weekdaysParse(t, s, i._strict);
                null != a ? e.d = a : u(i).invalidWeekday = t
            }),
            et(["d", "e", "E"], function (t, e, i, s) {
                e[s] = y(t)
            });
        var ba = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
            , ya = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
            , wa = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
            , _a = Zs
            , ka = Zs
            , xa = Zs;
        W("H", ["HH", 2], 0, "hour"),
            W("h", ["hh", 2], 0, Vt),
            W("k", ["kk", 2], 0, Ht),
            W("hmm", 0, 0, function () {
                return "" + Vt.apply(this) + G(this.minutes(), 2)
            }),
            W("hmmss", 0, 0, function () {
                return "" + Vt.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
            }),
            W("Hmm", 0, 0, function () {
                return "" + this.hours() + G(this.minutes(), 2)
            }),
            W("Hmmss", 0, 0, function () {
                return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
            }),
            Gt("a", !0),
            Gt("A", !1),
            E("hour", "h"),
            F("hour", 13),
            X("a", Wt),
            X("A", Wt),
            X("H", Ys),
            X("h", Ys),
            X("k", Ys),
            X("HH", Ys, Fs),
            X("hh", Ys, Fs),
            X("kk", Ys, Fs),
            X("hmm", Vs),
            X("hmmss", Hs),
            X("Hmm", Vs),
            X("Hmmss", Hs),
            tt(["H", "HH"], aa),
            tt(["k", "kk"], function (t, e, i) {
                var s = y(t);
                e[aa] = 24 === s ? 0 : s
            }),
            tt(["a", "A"], function (t, e, i) {
                i._isPm = i._locale.isPM(t),
                    i._meridiem = t
            }),
            tt(["h", "hh"], function (t, e, i) {
                e[aa] = y(t),
                    u(i).bigHour = !0
            }),
            tt("hmm", function (t, e, i) {
                var s = t.length - 2;
                e[aa] = y(t.substr(0, s)),
                    e[na] = y(t.substr(s)),
                    u(i).bigHour = !0
            }),
            tt("hmmss", function (t, e, i) {
                var s = t.length - 4
                    , a = t.length - 2;
                e[aa] = y(t.substr(0, s)),
                    e[na] = y(t.substr(s, 2)),
                    e[oa] = y(t.substr(a)),
                    u(i).bigHour = !0
            }),
            tt("Hmm", function (t, e, i) {
                var s = t.length - 2;
                e[aa] = y(t.substr(0, s)),
                    e[na] = y(t.substr(s))
            }),
            tt("Hmmss", function (t, e, i) {
                var s = t.length - 4
                    , a = t.length - 2;
                e[aa] = y(t.substr(0, s)),
                    e[na] = y(t.substr(s, 2)),
                    e[oa] = y(t.substr(a))
            });
        var Ca, Ia = /[ap]\.?m?\.?/i, Ma = U("Hours", !0), Sa = {
            calendar: Ms,
            longDateFormat: Ss,
            invalidDate: "Invalid date",
            ordinal: "%d",
            dayOfMonthOrdinalParse: Ps,
            relativeTime: Ds,
            months: ua,
            monthsShort: va,
            week: ga,
            weekdays: ba,
            weekdaysMin: wa,
            weekdaysShort: ya,
            meridiemParse: Ia
        }, Pa = {}, Da = {}, Ta = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, ja = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ra = /Z|[+-]\d\d(?::?\d\d)?/, Na = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Ea = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], La = /^\/?Date\((\-?\d+)/i, Oa = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
        t.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }),
            t.ISO_8601 = function () { }
            ,
            t.RFC_2822 = function () { }
            ;
        var Fa = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
            var t = be.apply(null, arguments);
            return this.isValid() && t.isValid() ? t < this ? this : t : m()
        })
            , Ba = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
                var t = be.apply(null, arguments);
                return this.isValid() && t.isValid() ? t > this ? this : t : m()
            })
            , Ua = function () {
                return Date.now ? Date.now() : +new Date
            }
            , Aa = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
        Pe("Z", ":"),
            Pe("ZZ", ""),
            X("Z", Xs),
            X("ZZ", Xs),
            tt(["Z", "ZZ"], function (t, e, i) {
                i._useUTC = !0,
                    i._tzm = De(Xs, t)
            });
        var Ya = /([\+\-]|\d\d)/gi;
        t.updateOffset = function () { }
            ;
        var Va = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
            , Ha = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
        He.fn = Ie.prototype,
            He.invalid = Ce;
        var Ga = Qe(1, "add")
            , Wa = Qe(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
            t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
        var qa = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        W(0, ["gg", 2], 0, function () {
            return this.weekYear() % 100
        }),
            W(0, ["GG", 2], 0, function () {
                return this.isoWeekYear() % 100
            }),
            Pi("gggg", "weekYear"),
            Pi("ggggg", "weekYear"),
            Pi("GGGG", "isoWeekYear"),
            Pi("GGGGG", "isoWeekYear"),
            E("weekYear", "gg"),
            E("isoWeekYear", "GG"),
            F("weekYear", 1),
            F("isoWeekYear", 1),
            X("G", zs),
            X("g", zs),
            X("GG", Ys, Fs),
            X("gg", Ys, Fs),
            X("GGGG", Ws, Us),
            X("gggg", Ws, Us),
            X("GGGGG", qs, As),
            X("ggggg", qs, As),
            et(["gggg", "ggggg", "GGGG", "GGGGG"], function (t, e, i, s) {
                e[s.substr(0, 2)] = y(t)
            }),
            et(["gg", "GG"], function (e, i, s, a) {
                i[a] = t.parseTwoDigitYear(e)
            }),
            W("Q", 0, "Qo", "quarter"),
            E("quarter", "Q"),
            F("quarter", 7),
            X("Q", Os),
            tt("Q", function (t, e) {
                e[ia] = 3 * (y(t) - 1)
            }),
            W("D", ["DD", 2], "Do", "date"),
            E("date", "D"),
            F("date", 9),
            X("D", Ys),
            X("DD", Ys, Fs),
            X("Do", function (t, e) {
                return t ? e._dayOfMonthOrdinalParse || e._ordinalParse : e._dayOfMonthOrdinalParseLenient
            }),
            tt(["D", "DD"], sa),
            tt("Do", function (t, e) {
                e[sa] = y(t.match(Ys)[0], 10)
            });
        var Qa = U("Date", !0);
        W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            E("dayOfYear", "DDD"),
            F("dayOfYear", 4),
            X("DDD", Gs),
            X("DDDD", Bs),
            tt(["DDD", "DDDD"], function (t, e, i) {
                i._dayOfYear = y(t)
            }),
            W("m", ["mm", 2], 0, "minute"),
            E("minute", "m"),
            F("minute", 14),
            X("m", Ys),
            X("mm", Ys, Fs),
            tt(["m", "mm"], na);
        var za = U("Minutes", !1);
        W("s", ["ss", 2], 0, "second"),
            E("second", "s"),
            F("second", 15),
            X("s", Ys),
            X("ss", Ys, Fs),
            tt(["s", "ss"], oa);
        var $a = U("Seconds", !1);
        W("S", 0, 0, function () {
            return ~~(this.millisecond() / 100)
        }),
            W(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10)
            }),
            W(0, ["SSS", 3], 0, "millisecond"),
            W(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond()
            }),
            W(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond()
            }),
            W(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond()
            }),
            W(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond()
            }),
            W(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond()
            }),
            W(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond()
            }),
            E("millisecond", "ms"),
            F("millisecond", 16),
            X("S", Gs, Os),
            X("SS", Gs, Fs),
            X("SSS", Gs, Bs);
        var Xa;
        for (Xa = "SSSS"; Xa.length <= 9; Xa += "S")
            X(Xa, Qs);
        for (Xa = "S"; Xa.length <= 9; Xa += "S")
            tt(Xa, Fi);
        var Ja = U("Milliseconds", !1);
        W("z", 0, 0, "zoneAbbr"),
            W("zz", 0, 0, "zoneName");
        var Za = f.prototype;
        Za.add = Ga,
            Za.calendar = Xe,
            Za.clone = Je,
            Za.diff = ai,
            Za.endOf = gi,
            Za.format = li,
            Za.from = di,
            Za.fromNow = pi,
            Za.to = ui,
            Za.toNow = vi,
            Za.get = V,
            Za.invalidAt = Mi,
            Za.isAfter = Ze,
            Za.isBefore = Ke,
            Za.isBetween = ti,
            Za.isSame = ei,
            Za.isSameOrAfter = ii,
            Za.isSameOrBefore = si,
            Za.isValid = Ci,
            Za.lang = qa,
            Za.locale = mi,
            Za.localeData = hi,
            Za.max = Ba,
            Za.min = Fa,
            Za.parsingFlags = Ii,
            Za.set = H,
            Za.startOf = fi,
            Za.subtract = Wa,
            Za.toArray = _i,
            Za.toObject = ki,
            Za.toDate = wi,
            Za.toISOString = ri,
            Za.inspect = ci,
            Za.toJSON = xi,
            Za.toString = oi,
            Za.unix = yi,
            Za.valueOf = bi,
            Za.creationData = Si,
            Za.year = fa,
            Za.isLeapYear = ft,
            Za.weekYear = Di,
            Za.isoWeekYear = Ti,
            Za.quarter = Za.quarters = Li,
            Za.month = lt,
            Za.daysInMonth = dt,
            Za.week = Za.weeks = Mt,
            Za.isoWeek = Za.isoWeeks = St,
            Za.weeksInYear = Ri,
            Za.isoWeeksInYear = ji,
            Za.date = Qa,
            Za.day = Za.days = Lt,
            Za.weekday = Ot,
            Za.isoWeekday = Ft,
            Za.dayOfYear = Oi,
            Za.hour = Za.hours = Ma,
            Za.minute = Za.minutes = za,
            Za.second = Za.seconds = $a,
            Za.millisecond = Za.milliseconds = Ja,
            Za.utcOffset = Re,
            Za.utc = Ee,
            Za.local = Le,
            Za.parseZone = Oe,
            Za.hasAlignedHourOffset = Fe,
            Za.isDST = Be,
            Za.isLocal = Ae,
            Za.isUtcOffset = Ye,
            Za.isUtc = Ve,
            Za.isUTC = Ve,
            Za.zoneAbbr = Bi,
            Za.zoneName = Ui,
            Za.dates = k("dates accessor is deprecated. Use date instead.", Qa),
            Za.months = k("months accessor is deprecated. Use month instead", lt),
            Za.years = k("years accessor is deprecated. Use year instead", fa),
            Za.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ne),
            Za.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ue);
        var Ka = S.prototype;
        Ka.calendar = P,
            Ka.longDateFormat = D,
            Ka.invalidDate = T,
            Ka.ordinal = j,
            Ka.preparse = Vi,
            Ka.postformat = Vi,
            Ka.relativeTime = R,
            Ka.pastFuture = N,
            Ka.set = I,
            Ka.months = at,
            Ka.monthsShort = nt,
            Ka.monthsParse = rt,
            Ka.monthsRegex = ut,
            Ka.monthsShortRegex = pt,
            Ka.week = xt,
            Ka.firstDayOfYear = It,
            Ka.firstDayOfWeek = Ct,
            Ka.weekdays = Tt,
            Ka.weekdaysMin = Rt,
            Ka.weekdaysShort = jt,
            Ka.weekdaysParse = Et,
            Ka.weekdaysRegex = Bt,
            Ka.weekdaysShortRegex = Ut,
            Ka.weekdaysMinRegex = At,
            Ka.isPM = qt,
            Ka.meridiem = Qt,
            Jt("en", {
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function (t) {
                    var e = t % 10;
                    return t + (1 === y(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th")
                }
            }),
            t.lang = k("moment.lang is deprecated. Use moment.locale instead.", Jt),
            t.langData = k("moment.langData is deprecated. Use moment.localeData instead.", te);
        var tn = Math.abs
            , en = rs("ms")
            , sn = rs("s")
            , an = rs("m")
            , nn = rs("h")
            , on = rs("d")
            , rn = rs("w")
            , cn = rs("M")
            , ln = rs("y")
            , dn = ls("milliseconds")
            , pn = ls("seconds")
            , un = ls("minutes")
            , vn = ls("hours")
            , mn = ls("days")
            , hn = ls("months")
            , fn = ls("years")
            , gn = Math.round
            , bn = {
                ss: 44,
                s: 45,
                m: 45,
                h: 22,
                d: 26,
                M: 11
            }
            , yn = Math.abs
            , wn = Ie.prototype;
        return wn.isValid = xe,
            wn.abs = Ji,
            wn.add = Ki,
            wn.subtract = ts,
            wn.as = ns,
            wn.asMilliseconds = en,
            wn.asSeconds = sn,
            wn.asMinutes = an,
            wn.asHours = nn,
            wn.asDays = on,
            wn.asWeeks = rn,
            wn.asMonths = cn,
            wn.asYears = ln,
            wn.valueOf = os,
            wn._bubble = is,
            wn.get = cs,
            wn.milliseconds = dn,
            wn.seconds = pn,
            wn.minutes = un,
            wn.hours = vn,
            wn.days = mn,
            wn.weeks = ds,
            wn.months = hn,
            wn.years = fn,
            wn.humanize = hs,
            wn.toISOString = fs,
            wn.toString = fs,
            wn.toJSON = fs,
            wn.locale = mi,
            wn.localeData = hi,
            wn.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", fs),
            wn.lang = qa,
            W("X", 0, 0, "unix"),
            W("x", 0, 0, "valueOf"),
            X("x", zs),
            X("X", Js),
            tt("X", function (t, e, i) {
                i._d = new Date(1e3 * parseFloat(t, 10))
            }),
            tt("x", function (t, e, i) {
                i._d = new Date(y(t))
            }),
            t.version = "2.18.1",
            function (t) {
                gs = t
            }(be),
            t.fn = Za,
            t.min = we,
            t.max = _e,
            t.now = Ua,
            t.utc = d,
            t.unix = Ai,
            t.months = qi,
            t.isDate = o,
            t.locale = Jt,
            t.invalid = m,
            t.duration = He,
            t.isMoment = g,
            t.weekdays = zi,
            t.parseZone = Yi,
            t.localeData = te,
            t.isDuration = Me,
            t.monthsShort = Qi,
            t.weekdaysMin = Xi,
            t.defineLocale = Zt,
            t.updateLocale = Kt,
            t.locales = ee,
            t.weekdaysShort = $i,
            t.normalizeUnits = L,
            t.relativeTimeRounding = vs,
            t.relativeTimeThreshold = ms,
            t.calendarFormat = $e,
            t.prototype = Za,
            t
    }),
    define("util/ejs", ["window", "jquery", "templates", "moment"], function (t, e, i, s) {
        var a = (RegExp("MSIE (\\d+\\.\\d+);").test(t.navigator.userAgent),
            {
                company: "https://static.tianyancha.com/wap/images/logo327.png",
                product: "https://img.tianyancha.com/logo/teamMember/ye_def.png@!fill_200x200",
                human: "https://img.tianyancha.com/tmp/2018011421/169520.jpg@!fill_200x200"
            });
        return e.extend(i.locals, {
            moment: s,
            serverDomain: t.serverDomain,
            checkData: function (t) {
                return t && "undefined" != t && "null" != t && "false" != t && " " != t ? t : " "
            },
            initTime: function (t) {
                return s(parseInt(t)).format("YYYY-MM-DD")
            },
            getProvName: function (t) {
                var e = {
                    GJ: "总局",
                    BJ: "北京",
                    TJ: "天津",
                    HEB: "河北",
                    SX: "山西",
                    NMG: "内蒙古",
                    LN: "辽宁",
                    JL: "吉林",
                    HLJ: "黑龙江",
                    SH: "上海",
                    JS: "江苏",
                    ZJ: "浙江",
                    AH: "安徽",
                    FJ: "福建",
                    JX: "江西",
                    SD: "山东",
                    GD: "广东",
                    GX: "广西",
                    HAN: "海南",
                    HEN: "河南",
                    HUB: "湖北",
                    HUN: "湖南",
                    CQ: "重庆",
                    SC: "四川",
                    GZ: "贵州",
                    YN: "云南",
                    XZ: "西藏",
                    SNX: "陕西",
                    GS: "甘肃",
                    QH: "青海",
                    NX: "宁夏",
                    XJ: "新疆"
                };
                return t ? (t = t.toUpperCase(),
                    e[t]) : "无"
            },
            vipList: [{
                "name": "一年VIP会员",
                "state": 50,
                "vipPrice": "360",
                "unitPrice": "28",
                "time": "12",
                "discount": "560",
                "give": "另赠200元报告抵扣券",
                "recommend": !0
            }, {
                "name": "两年VIP会员",
                "state": 60,
                "vipPrice": "720",
                "unitPrice": "21.5",
                "time": "24",
                "discount": "1120",
                "give": "另赠350元报告抵扣券",
                "recommend": !1
            }, {
                "name": "三年VIP会员",
                "state": 70,
                "vipPrice": "720",
                "unitPrice": "18.5",
                "time": "36",
                "discount": "1680",
                "give": "另赠500元报告抵扣券",
                "recommend": !0,
                "checked": !0
            }],
            dateFormat: function (t, e, i) {
                if ("int" === i) {
                    if (/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(t))
                        return t;
                    if (t && 0 !== parseInt(t))
                        return s(parseInt(t)).format("YYYY-MM-DD")
                }
                return e || " "
            },
            dateFormatMinut: function (t, e, i) {
                if ("int" === i) {
                    if (/^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/.test(t))
                        return t;
                    if (t && 0 !== parseInt(t))
                        return s(parseInt(t)).format("YYYY-MM-DD H:mm")
                }
                return e || " "
            },
            strFilter: function (t, e) {
                return t && "null" !== t && "undefined" != t && "null" != t && "false" != t && " " != t ? t : e || " "
            },
            trim: function (t) {
                return t = (t || "") + "",
                    t.replace(/(^\s*)|(\s*$)/g, "")
            },
            safeCharAt: function (t, e, i) {
                return t ? t.charAt(e) : i
            },
            arrayLimit: function (t, e, i) {
                i = i || 0;
                var s = i + e;
                if (t && t.length > 0) {
                    if (t.length > s)
                        return t.slice(i, s);
                    if (t.length > i)
                        return t.slice(i, t.length)
                }
                return []
            },
            safeRenderNotice: function (t) {
                return /<\/div>$/.test(t) ? t : t + "</div>"
            },
            num99_plus: function (t) {
                return parseInt(t, 10) > 99 ? "99+" : t
            },
            waterMark: function (t, e, i, s) {
                return i = i || "company",
                    e = e || "",
                    s = s || a[i] || a.product,
                    t ? t + e : s
            },
            imageSelf: function (t, e, i) {
                return t ? (t.startsWith("https://static.tianyancha.com") ? t = t.replace("https://static.tianyancha.com", "https://img.tianyancha.com") : t.startsWith("https://image.tianyancha.com") && (t = t.replace("https://image.tianyancha.com", "https://img.tianyancha.com")),
                    t.indexOf("@") > -1 ? i ? t.substring(0, t.indexOf("@")) + e : t : t + (e || "@!pad_200x200")) : t
            }
        }),
            i
    }),
    define("util/modal", ["jquery", "util/ejs"], function (t, e) {
        var i;
        t.fn.modal = function (e) {
            "hide" === e && (t(this).remove(),
                t("#_modal_container").length || t("body").removeClass("modal-open"))
        }
            ,
            t("body").off("click.unModal"),
            t("body").on("click.unModal", "#_modal_container", function (e) {
                var s = t(e.target);
                t(".modal-dialog").has(s).length || (i && "function" == typeof i && (i(),
                    i = null),
                    t("#_modal_container").modal("hide"))
            }),
            t("body").off("touchstart.unModal"),
            t("body").on("touchstart.unModal", "#_modal_container", function (e) {
                var i = t(e.target);
                t(".modal-dialog").has(i).length || t("#_modal_container").modal("hide")
            }),
            t("body").off("click.cancelModal"),
            t("body").on("click.cancelModal", '[ng-click="cancel()"]', function (e) {
                var s = t(e.target);
                i && "function" == typeof i && (i(),
                    i = null),
                    s.parents("#_modal_container").modal("hide")
            });
        var s = {};
        return s.openByElementStr = function (e, a, n, o) {
            if (o && "function" == typeof o && (i = o),
                "string" != typeof e)
                return !1;
            if (a && "object" != typeof a)
                return !1;
            if (a || (a = {}),
                t("#_modal_container").length) {
                var r = t("#_modal_container")
                    , c = "modal-" + (a.size ? a.size : "lg");
                r.find(".modal-dialog").attr("class", "modal-dialog " + c),
                    r.find(".modal-content").html(e),
                    n && "function" == typeof n && n()
            } else {
                var r = t('<div id="_modal_container" modal-render="true" tabindex="-1" role="dialog" class="modal fade ng-isolate-scope in"  modal-in-class="in" size="lg" index="0" animate="animate" modal-animation="true" style="z-index: 1050; display: block;overflow: hidden;overflow-y: auto"> <div class="modal-dialog " ><div class="modal-content" ></div></div> </div>')
                    , c = "modal-" + (a.size ? a.size : "lg");
                r.find(".modal-dialog").addClass(c),
                    r.find(".modal-content").append(e),
                    t("body").append(r),
                    n && "function" == typeof n && n(),
                    t("#_modal_container").on("hidden.bs.modal", function (e) {
                        t("#_modal_container").remove()
                    })
            }
            s.checkModal()
        }
            ,
            s.openByElementStrMsg = function (e, i, a) {
                if ("string" != typeof e)
                    return !1;
                if (i && "object" != typeof i)
                    return !1;
                if (i || (i = {}),
                    t("#_modal_msg_container").length) {
                    var n = t("#_modal_msg_container")
                        , o = "modal-" + (i.size ? i.size : "lg");
                    n.find(".modal-dialog").addClass(o),
                        n.find(".modal-content").html(e),
                        a && "function" == typeof a && a()
                } else {
                    var n = t('<div id="_modal_msg_container" modal-render="true" tabindex="-1" role="dialog" class="modal  ng-isolate-scope in"  modal-in-class="in" size="lg" index="0" animate="animate" modal-animation="true" style="z-index: 1060; display: block;overflow: hidden;overflow-y: auto"> <div class="modal-dialog " ><div class="modal-content" ></div></div> </div>')
                        , o = "modal-" + (i.size ? i.size : "lg");
                    n.find(".modal-dialog").addClass(o),
                        n.find(".modal-content").append(e),
                        n.find(".modal-content").find('[ng-click="cancel()"]').click(function () {
                            t("#_modal_msg_container").modal("hide")
                        }),
                        i.nobg && n.css("background-color", "transparent"),
                        t("body").append(n),
                        a && "function" == typeof a && a(),
                        t("#_modal_msg_container").on("hidden.bs.modal", function (e) {
                            t("#_modal_msg_container").remove()
                        })
                }
                s.checkModal()
            }
            ,
            s.close = function () {
                i && "function" == typeof i && (i(),
                    i = null),
                    t("#_modal_container").modal("hide")
            }
            ,
            s.closeMsg = function () {
                t("#_modal_msg_container").modal("hide"),
                    t("#_modal_container").length && t("body").addClass("modal-open")
            }
            ,
            s.showErrorMessage = function (t, i) {
                i = i || 2e3;
                var a = e.render("message", {
                    items: {
                        msg: t
                    }
                });
                s.openByElementStrMsg(a, {
                    size: "errorBox"
                }, function () {
                    setTimeout(function () {
                        s.closeMsg()
                    }, i)
                })
            }
            ,
            s.showSuccessMessage = function (t, i) {
                i = i || 2e3;
                var a = e.render("successmessage", {
                    items: {
                        msg: t
                    }
                });
                s.openByElementStrMsg(a, {
                    size: "successBox"
                }, function () {
                    setTimeout(function () {
                        s.closeMsg()
                    }, i)
                })
            }
            ,
            s.showVipMessage = function (t, i) {
                i = i || 2e3;
                var a = e.render("vipmessage", {
                    items: {
                        alertmsg: t
                    }
                });
                s.openByElementStrMsg(a, {
                    size: "successBox2",
                    nobg: !0
                }, function () {
                    setTimeout(function () {
                        s.closeMsg()
                    }, i)
                })
            }
            ,
            s.showAppMessage = function (t, i) {
                i = i || 2e3;
                var a = e.render("appmessage", {
                    items: {
                        msg: t
                    }
                });
                s.openByElementStrMsg(a, {
                    size: "appMsgBox"
                }, function () {
                    setTimeout(function () {
                        s.closeMsg()
                    }, i)
                })
            }
            ,
            s.checkModal = function () {
                t("#_modal_container").length && t("body").addClass("modal-open")
            }
            ,
            s
    }),
    define("util/loading", ["jquery"], function (t) {
        var e = {};
        return e.show = function () {
            t("#_loading_container").remove();
            var e = t('<div id="_loading_container" style="background-color:#bcbcbc;position: fixed; height:100%;width:100%;top: 0;left: 0;opacity: 0.58;filter: progid:DXImageTransform.Microsoft.Alpha(opacity=58);z-index: 100000;"> <i class="tic tic-spinner tic-pulse tic-3x" style="color: black; top: 40%;    left: 48%;   position: absolute;"></i> </div>');
            t("body").append(e)
        }
            ,
            e.hide = function () {
                t("#_loading_container").remove()
            }
            ,
            e.riskshow = function (e) {
                e && t(".riskLoading .modal-successBox2").removeClass("hide").find(".human-alert-em").html(e),
                    t(".riskLoading").show()
            }
            ,
            e.riskhide = function (e) {
                e && t(".riskLoading .modal-successBox2").addClass("hide").find(".human-alert-em").html(""),
                    t(".riskLoading").hide()
            }
            ,
            e
    }),
    define("util/common", ["window", "jquery", "util/modal", "util/ejs"], function (t, e, i, s) {
        if (t.common)
            return t.common;
        var a = {};
        return a.formatAndFilterUrl = function (t) {
            if (String.prototype.trim || (String.prototype.trim = function () {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
            ),
                t)
                return t = t.trim(),
                    0 == t.indexOf(".") && (t = t.replace(".", "")),
                    t.replace(/#/gi, "").replace(/\!/gi, "").replace(/\\/gi, "").replace(/\%/gi, "").replace(/\=/gi, "").replace(/\;/gi, "").replace(/\?/gi, "")
        }
            ,
            a.toQueryPair = function (t, e) {
                return void 0 === e ? t : t + "=" + encodeURIComponent(null === e ? "" : e + "")
            }
            ,
            a.toQueryString = function (t) {
                var e = [];
                for (var i in t) {
                    i = encodeURIComponent(i);
                    var s = t[i];
                    if (s && s.constructor == Array) {
                        for (var n, o = [], r = 0, c = s.length; r < c; r++)
                            n = s[r],
                                o.push(a.toQueryPair(i, n));
                        e = e.concat(o)
                    } else
                        e.push(a.toQueryPair(i, s))
                }
                return e.join("&")
            }
            ,
            a.parseQueryString = function (e) {
                var i = e || t.location.href
                    , s = {};
                if (-1 == i.indexOf("?"))
                    return s;
                var a = i.split("?")[1]
                    , n = a.split("&");
                if (!n)
                    return s;
                for (var o = 0; o < n.length; o++) {
                    var r = n[o].split("=");
                    s[r[0]] = decodeURIComponent(r[1])
                }
                return s
            }
            ,
            a.mouseShowBySelElem = function (t) {
                e(t).addClass("in")
            }
            ,
            a.mouseHideBySelElem = function (t) {
                e(t).removeClass("in")
            }
            ,
            a.addUserAction = function (e) {
                var i = t.location.href;
                return e ? (-1 != i.indexOf("useraction=") ? i = i.replace(/(?![?&])(useraction=)[^&]+/gi, "$1" + e) : -1 == i.indexOf("?") ? i += "?useraction=" + e : i += "&useraction=" + e,
                    i) : i = i.replace(/(?![?&])(useraction=)[^&]+/gi, "")
            }
            ,
            a.jumpNoUserAction = function () {
                var e = t.location.href;
                -1 != e.indexOf("useraction=") && (e = e.replace(/(?![?&])(useraction=)[^&]+/gi, ""),
                    t.location.href = e)
            }
            ,
            a.delUserAction = function () {
                var e = t.location.href;
                return -1 != e.indexOf("useraction=") && (e = e.replace(/(?![?&])(useraction=)[^&]+/gi, "")),
                    e
            }
            ,
            a.openUrl = function (e) {
                e && t.open(e)
            }
            ,
            a.jumpUrl = function (e) {
                e && (t.location.href = e)
            }
            ,
            a.stopPropagation = function (e, i) {
                e || (e = t.event),
                    e && (e.preventDefault ? e.stopPropagation() : e.cancelBubble = !0)
            }
            ,
            a.appDownload = function (e) {
                if (/tg=(\w+)?[\&]?/.test(t.location.search) || sessionStorage.getItem("tg")) {
                    var i = sessionStorage.getItem("tg") || t.TYC_TG_CODE;
                    location.href = e ? t.appServerDomain + "/channel?from=companyDetail&param1=" + e + "&channelCode=" + i + "_WAP03" : t.appServerDomain + "/channel?channelCode=" + i + "_WAP03"
                } else
                    location.href = e ? t.appServerDomain + "/channel?from=companyDetail&param1=" + e + "&channelCode=WAP03" : t.appServerDomain + "/channel?channelCode=WAP03"
            }
            ,
            a.refresh = function () {
                t.location.reload(!0)
            }
            ,
            a.closePopup = function () {
                i.close()
            }
            ,
            t.common = a,
            a
    }),
    define("util/query", ["jquery"], function (t) {
        var e = {
            getData: function (e, i) {
                return t.ajax({
                    url: e,
                    type: "get",
                    cache: !1,
                    data: i,
                    dataType: "json"
                })
            },
            get: function (e, i, s) {
                return new Promise(function (s, a) {
                    t.ajax({
                        url: e,
                        type: "get",
                        cache: !1,
                        data: i
                    }).then(function (t) {
                        s()
                    })
                }
                )
            },
            getHtml: function (e, i) {
                return t.ajax({
                    url: e,
                    type: "get",
                    cache: !1,
                    data: i,
                    statusCode: {
                        505: function () {
                            window.location.href = window.serverDomain + "/black"
                        },
                        501: function () {
                            window.location.href = window.antirobotServer + "/captcha/verify?return_url=" + encodeURIComponent(window.location.href) + "&rnd="
                        },
                        401: function () {
                            window.location.href = window.serverDomain + "/login?from=" + encodeURIComponent(window.location.pathname)
                        },
                        403: function () {
                            if (-1 === e.indexOf("companyholder")) {
                                var i = "network(403) url:" + e
                                    , s = document.getElementById("top_error_div");
                                s || (s = document.createElement("div"),
                                    s.id = "top_error_div",
                                    document.body.insertBefore(s, document.body.firstChild),
                                    s.style = "width: 100vw;font-size: 14px;color: #202020;background:#fbf3cc;padding: 12px;text-align:center;position:fixed;margin-top:-44px;z-index:2000",
                                    document.body.style = "padding-top:44px");
                                var a = [];
                                a.push('<i class="tic tic-exclamation-circle" style="color:#ef5644 "></i>页面出错了:'),
                                    a.push('<span style="line-height1.5;max-width: 400px;display:inline-block;word-break: keep-all;word-wrap: normal;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;    line-height: 14px;">' + i + "</span>"),
                                    a.push('<a href="javascript:window.location.reload(true)" style="color:#ef5644;margin-left: 100px;" ><i class="tic tic-refresh" ></i>刷新试试</a>'),
                                    s.innerHTML = a.join(""),
                                    setTimeout(function () {
                                        t("#top_error_div").animate({
                                            display: "none"
                                        }, 500),
                                            t("body").animate({
                                                "padding-top": "0px"
                                            }, 500),
                                            t("#top_error_div").remove()
                                    }, 500)
                            }
                        }
                    }
                })
            },
            post: function (e, i) {
                return t.ajax({
                    cache: !1,
                    method: "post",
                    contentType: "application/json; charset=utf-8",
                    url: e,
                    datatype: "json",
                    data: JSON.stringify(i)
                })
            },
            postForm: function (e, i) {
                return t.ajax({
                    cache: !1,
                    method: "post",
                    url: e,
                    datatype: "json",
                    data: i
                })
            },
            serializeArrayObj: function (t) {
                for (var e = {}, i = 0; i < t.length; i++) {
                    var s = t[i];
                    e[s.name] ? (e[s.name] = [e[s.name]],
                        e[s.name].push(s.value)) : e[s.name] = s.value
                }
                return e
            },
            sendParamFz: function (t) {
                return e.get(t)
            },
            getPaginationByType: function (t, i) {
                return e.getHtml("/pagination/" + t + ".xhtml", i)
            },
            getConcernList: function (t) {
                return e.getHtml("/follow/concernPage.html", t)
            },
            getNewsByPage: function (t) {
                return e.getHtml("/pagination/news.html", t)
            },
            getCompanyHolderRight: function (t) {
                return e.getHtml("/company/companyholder.xhtml", t)
            },
            getStockTabByType: function (t, i) {
                return e.getHtml("/stock/" + t + ".xhtml", i)
            },
            Index_receiveFeedback: function (t, i) {
                return e.post("/feedback.json", {
                    content: t,
                    email: i
                })
            },
            Index_getNewest: function (t) {
                return e.getData("/newest.json", {
                    ps: t
                })
            },
            index_suggest: function (t) {
                return e.getData("/search/suggest.json", {
                    key: t
                })
            },
            index_human_suggest: function (t) {
                return e.getData("/search/humanSuggest.json", {
                    key: t
                })
            },
            Expanse_getRelatedHuman: function (t) {
                return e.getData("relation/getRelatedHuman.json", {
                    id: t
                })
            },
            userGetTagList: function () {
                return e.getData("/follow/getTagList.json?_t=" + (new Date).getTime())
            },
            userCancelFollowOrMonitor: function (t, i) {
                var s = "/follow/userCancelFollowOrMonitor.json?id=" + t;
                return i && (s += "&flag=" + i),
                    e.getData(s)
            },
            userGetFollowList: function (t, i, s) {
                var a = "/follow/userGetFollowList.json?pageSize=10&tags=" + i + "&flag=" + t + "&pageNum=" + s + "&_t=" + (new Date).getTime();
                return e.getData(a)
            },
            userMoveFollowList: function (t, i) {
                i && (i = encodeURIComponent(i));
                var s = "/follow/userMoveFollowList.json?id=" + t + "&tag=" + i;
                return e.getData(s)
            },
            userDelFollowTag: function (t, i) {
                var s = "/follow/userDelFollowTag.json";
                return s += "?defaultId=" + t + "&delId=" + i,
                    e.getData(s)
            },
            userAddFollowTag: function (t) {
                return e.getData("/follow/addFollowTag.json", t)
            },
            userEditFollowTag: function (t, i) {
                t = encodeURIComponent(t);
                var s = "/follow/userEditFollowTag.json";
                return s += "?tagName=" + t + "&id=" + i,
                    e.getData(s)
            },
            doFollowOrMonitor: function (t, i) {
                var s = "/follow/doFollowOrMonitor.json?id=" + t;
                return i && (s += "&tagId=" + i),
                    e.getData(s)
            },
            getOrderList: function (t) {
                return e.post("/order/getOrderList.json", t)
            },
            getEquityById: function (t) {
                return e.getData("/equity/equityratio.json?id=" + t)
            },
            haveEquityPermissionById: function (t) {
                return e.getData("/equity/haveEquityPermission.json?id=" + t)
            },
            getEquityDetailById: function (t) {
                return e.getData("/equity/equitydetail.json?id=" + t)
            },
            getReportOrderInfo: function (t) {
                return e.getData("/report/getReportOrderInfo.json?type=" + t)
            },
            userLogout: function (t) {
                return e.getData("/user/userLogout.json")
            },
            beforeVipOrder: function (t, i) {
                return e.getData("/order/preorder.json", {
                    state: t,
                    inviteCode: i
                })
            },
            preVipOrder: function (t) {
                return e.getData("/order/previporder.json", t)
            },
            preVipBussinessOrder: function (t) {
                return e.getData("/order/previpbussinessorder.json", t)
            },
            preRubyVip: function (t) {
                return e.getData("/order/preRubyVip.json", t)
            },
            dataResendMail: function (t) {
                return e.post("/report/dataServiceresendMail.json", t)
            },
            reportResendMail: function (t) {
                return e.post("/report/reportResendMail.json", t)
            },
            getShortestPath: function (t, i, s, a) {
                return e.getData("/relation/shortpath.json", {
                    fromCompanyGid: t,
                    fromHumanGid: i,
                    toCompanyGid: s,
                    toHumanGid: a
                })
            },
            Index_hotHuman: function () {
                return e.getData("/v2/hotHuman.json")
            },
            Company_receiveFeedback: function (t, i, s, a, n) {
                return e.post("/company/feedback.json", {
                    companyName: t,
                    companyId: i,
                    content: s,
                    phone: a,
                    name: n
                })
            },
            sendSMSCode: function (t, i, s, a) {
                return e.post("/verify/sms.json?p=" + t, {
                    phone: t,
                    type: i,
                    funtype: s,
                    challenge: a.geetest_challenge,
                    validate: a.geetest_validate,
                    seccode: a.geetest_seccode
                })
            },
            sendSMSCodeWithTelephone: function (t, i, s, a) {
                return e.post("/verify/smsTelephone.json?p=" + t, {
                    phone: t,
                    type: i,
                    funtype: s,
                    challenge: a.geetest_challenge,
                    validate: a.geetest_validate,
                    seccode: a.geetest_seccode
                })
            },
            sendSMSCodeWithTelephoneByDun: function (t, i, s, a) {
                return e.post("/verify/smsTelephoneByDun.json?p=" + t, {
                    phone: t,
                    type: i,
                    validata: a
                })
            },
            sendSMSCodeXhtml: function (t, i, s) {
                return e.post("/verify/sms.xhtml", {
                    phone: t,
                    type: i,
                    funtype: s
                })
            },
            getLocationByName: function (t) {
                return e.getData("/getLocation.json", {
                    key: encodeURIComponent(t)
                })
            },
            deepSearch: function (t, i) {
                return e.getData("/deepSearch.json", {
                    word: t,
                    base: i.toLowerCase()
                })
            },
            addRealTime: function (t, i) {
                return e.getData("/addRealtime.json", {
                    word: t,
                    base: i.toLowerCase()
                })
            },
            applySMSCode: function (t, i) {
                return e.post("/verify/apply/sms.json?p=" + t, {
                    phone: t,
                    challenge: i.geetest_challenge,
                    validate: i.geetest_validate,
                    seccode: i.geetest_seccode
                })
            },
            channelApply: function (t) {
                return e.post("/channel/media.json", t)
            },
            channelBusiness: function (t) {
                return e.post("/channel/business.json", t)
            },
            channelLawyer: function (t) {
                return e.post("/channel/lawyer.json", t)
            },
            channelInvestor: function (t) {
                return e.post("/channel/investor.json", t)
            },
            channelRecruit: function (t) {
                return e.post("/huodong/recruitapply.json", t)
            },
            pwdReset: function (t) {
                return e.post("/user/pwdReset.json", t)
            },
            weiXinPayInfo: function (t) {
                return e.getData("/order/pay/weixin.json", {
                    orderId: t
                })
            },
            weiXinPayPolling: function (t) {
                return e.getData("/order/polling/weixin.json", {
                    orderId: t
                })
            },
            alipayInfo: function (t) {
                return e.getData("/order/pay/ali.json", {
                    orderId: t
                })
            },
            getUserInfo: function () {
                return e.getData("/user/info.json")
            },
            getStockPdf: function (t) {
                return e.getData("/stock/getAnnouncementPdf.json?id=" + t)
            },
            getAnnouncementPdfUrl: function (t) {
                return e.getData("/stock/getAnnouncementPdfUrl.json", t)
            },
            getAnnouncementPdfByUuid: function (t) {
                return e.getData("/stock/getAnnouncementPdfByUuid.json", t)
            },
            getStockVolatility: function (t) {
                return e.getData("/stock/stockVolatility.json?id=" + t)
            },
            shareholder: function (t, i, s, a) {
                var n = "/stock/shareholder.json";
                return n += "?graphId=" + t + "&type=" + i,
                    s && (n += "&time=" + s),
                    a && (n += "&index=" + a),
                    e.getData(n)
            },
            getUpdateTime: function (t) {
                return e.getData("update/updatetime.json?id=" + t + "&random=" + (new Date).getTime())
            },
            addToUpdateImmediatelyTimeQueue: function (t, i, s) {
                return e.getData("update/timeQueue.json?id=" + t + "&reg=" + i + "&base=" + s)
            },
            geetestConfig: function () {
                return e.post("/verify/geetest.xhtml", {
                    uuid: (new Date).getTime() + ""
                })
            },
            cd_reg: function (t) {
                return e.post("/cd/reg.json", t)
            },
            cd_login: function (t) {
                return e.post("/cd/login.json", t)
            },
            wapLogin: function (t) {
                return e.post("/cd/login/wap.json", t)
            },
            cd_reset: function (t) {
                return e.post("/cd/cdreset.json", t)
            },
            getOrderNorCreat: function (t) {
                return e.post("/order/getOrderNorCreat.json", t)
            },
            getOrderCreat: function (t) {
                return e.post("/order/getOrderCreat.json", t)
            },
            createSearchOrder: function (t, i) {
                return e.post("/order/createSearchOrder.json", {
                    key: t,
                    data: i
                })
            },
            getOrderHumanPrice: function (t) {
                return e.getData("/order/getOrderHumanPrice.json", t)
            },
            footer_complaint: function (t) {
                return e.post("/footer/complaint.json", t)
            },
            getWeixinJsSdkConfig: function (t) {
                return e.getData("/wxApi/getJsSdkConfig.json", {
                    url: t
                })
            },
            sendPV: function (t) {
                return e.post("https://pv.tianyancha.com/pv?url=" + encodeURIComponent(t))
            },
            sendPSV: function (t, i, s, a, n, o) {
                return e.postForm("https://pv.tianyancha.com/sv", {
                    name: t,
                    keywords: i,
                    pageNo: s,
                    position: a,
                    mobile: n,
                    category: o
                })
            },
            postUserInfo: function (t) {
                return e.get("/user/setUserInfo.json", t)
            },
            getRiskNum: function (t) {
                return e.getData("/risk/riskNum.json", t)
            },
            getRiskInfo: function (t) {
                return e.getHtml("/risk/riskInfo.html", t)
            },
            getRiskDetail: function (t) {
                return e.getHtml("/risk/riskDetail.html", t)
            },
            haveRiskPermissionByType: function (t) {
                return e.getData("/risk/havePermission.json", t)
            },
            getHumanRiskInfo: function (t) {
                return e.getHtml("/risk/humanRiskInfo.html", t)
            },
            getCertificateInfo: function (t) {
                return e.getData("/company/certificateDetail.json", t)
            },
            getCustomerNamePage: function (t) {
                return e.getHtml("/lawfirmpagination/customerNamePage.html", t)
            },
            searchSyncCompany: function (t, i) {
                var s = "";
                return s = i ? "/search/" + i + "/company.html" : "/search/company.html",
                    e.getHtml(s, {
                        key: t
                    })
            },
            searchSyncHuman: function (t) {
                return e.getHtml("/search/human.html", {
                    humanName: t
                })
            },
            getAllPermission: function (t) {
                return e.getData("/doctor/getAllPermission.json", t)
            },
            getChangePaginationById: function (t) {
                return e.getHtml("/app/pagination/changeinfo.html", t)
            },
            getChangeItemById: function (t) {
                return e.getHtml("/app/changeitem.html", t)
            },
            getCorePersonById: function (t) {
                return e.getHtml("/pagination/coreperson.xhtml", t)
            },
            getMemberByPage: function (t) {
                return e.getHtml("/business/memberPage.html", t)
            },
            saveMember: function (t) {
                return e.getData("/business/saveMember.json", t)
            },
            delMember: function (t) {
                return e.getData("/business/delMember.json", t)
            },
            getReceiptInfo: function (t) {
                return e.getData("/receipt/getReceiptInfo.json", t)
            },
            vipReceiptSubmit: function (t) {
                return e.post("/receipt/vipReceiptSubmit.json", t)
            },
            getVipPopPage: function (t) {
                return e.getHtml("/vip/vipPopPage.html", t)
            },
            getRubyPopPage: function (t) {
                return e.getHtml("/vip/rubyPopPage.html", t)
            },
            gifDown: function (t) {
                return e.post("/timeline/" + t + "/gif.xhtml", {
                    companyId: t
                })
            },
            humanPngDown: function (t, i) {
                return e.post("/human/" + t + "-" + i + "/png.xhtml", {
                    companyId: i
                })
            },
            claimApplySubmit: function (t) {
                return e.post("/claim/claimApplySubmit.json", t)
            },
            claimSavePreview: function (t) {
                return e.post("/claim/savePreview.json", t)
            },
            getClaimList: function (t) {
                return e.getHtml("/claim/getClaimList.html", t)
            },
            getProjectPaginationByType: function (t, i) {
                return e.getHtml("/pagination_brand/" + t + ".xhtml", i)
            },
            getOrganizePaginationByType: function (t, i) {
                return e.getHtml("/pagination_organize/" + t + ".xhtml", i)
            },
            getOrganizeAnalysis: function (t) {
                return e.getData("organize/analysisModal.json", t)
            },
            saveUserNick: function (t) {
                return e.post("/user/nickname.json", t)
            },
            saveUserRealName: function (t) {
                return e.post("/user/realName.json", t)
            },
            sendContactCard: function (t) {
                return e.post("/contact/sendCard/" + t.companyId + ".json", t)
            },
            sendContactMultiCard: function (t) {
                return e.post("/contact/sendMultiCard.json", t)
            },
            companyContactCount: function (t, i, s, a) {
                return s = s || 1,
                    a = a || 10,
                    e.getHtml("/contact/company/" + t + ".json", {
                        companyId: t,
                        type: i,
                        pn: s
                    })
            },
            companyContactList: function (t, i, s, a) {
                return s = s || 1,
                    a = a || 10,
                    e.getHtml("/contact/company/" + t + "/" + i + ".json", {
                        pn: s
                    })
            },
            contact_markRead: function (t, i) {
                return e.post("/contact/markRead/" + t + ".json", {
                    ids: [i]
                })
            },
            contact_markReadAll: function (t, i) {
                return e.post("/contact/markReadAll/" + t + ".json", {
                    ids: i
                })
            },
            contact_prompt: function () {
                return e.getData("/contact/prompt")
            },
            company_add_comment: function (t, i) {
                return e.post("/discuss/" + t + "/comment.json", {
                    companyId: t,
                    content: i
                })
            },
            company_do_approval: function (t) {
                return e.post("/discuss/" + t + "/approval.json", {
                    companyId: t
                })
            },
            companyDiscussCount: function (t) {
                return new Promise(function (t, e) {
                    t()
                }
                )
            },
            companyDiscussComment: function (t, i) {
                return e.getData("/discuss/" + t + "/comment_list.json", {
                    companyId: t,
                    pn: i
                })
            },
            companyDiscussCommentAll: function (t, i) {
                return e.getData("/discuss/" + t + "/comment_list_all.json", {
                    companyId: t,
                    pn: i
                })
            },
            companyDiscussApproval: function (t, i) {
                return e.getData("/discuss/" + t + "/approval_list.json", {
                    companyId: t,
                    pn: i
                })
            },
            companyDiscussApprovalAll: function (t, i) {
                return e.getData("/discuss/" + t + "/approval_list_all.json", {
                    companyId: t,
                    pn: i
                })
            },
            stock_suggest: function (t) {
                return e.getData("/announcement/suggest.json", {
                    kw: t
                })
            }
        };
        return e
    }),
    define("util/UserManage", ["window", "jquery", "util/modal", "Cookies", "Base64", "util/query"], function (t, e, i, s, a, n) {
        t.btoa || (t.btoa = function (t) {
            return a.encode(t)
        }
        ),
            t.atob || (t.atob = function (t) {
                return a.decode(t)
            }
            );
        var o = {
            path: "/",
            secure: !1,
            expires: 7,
            domain: t.cookieServerSuffix.split(":")[0]
        }
            , r = {
                path: "/",
                secure: !1,
                domain: t.cookieServerSuffix.split(":")[0]
            };
        if (t.UserManage)
            return t.UserManage;
        var c = {};
        return c.setUserInfo = function (e, i) {
            e && (c.logout(),
                i ? (s.set("tyc-user-info", t.encodeURIComponent(JSON.stringify(e)), o),
                    s.set("auth_token", e.token, o)) : (s.set("tyc-user-info", t.encodeURIComponent(JSON.stringify(e)), r),
                        s.set("auth_token", e.token, r)))
        }
            ,
            c.isExpired = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        return 1 == parseInt(t.isExpired)
                    } catch (t) {
                        return !1
                    }
            }
            ,
            c.isPutong = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        return 0 == parseInt(t.state)
                    } catch (t) {
                        return !1
                    }
            }
            ,
            c.isHasVip = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        if (parseInt(t.state) >= 3 || 1 == parseInt(t.state))
                            return !(parseInt(t.isExpired) > 0)
                    } catch (t) {
                        return !1
                    }
                return !1
            }
            ,
            c.isVip = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        if (parseInt(t.state) >= 3)
                            return !(parseInt(t.isExpired) > 0)
                    } catch (t) {
                        return !1
                    }
                return !1
            }
            ,
            c.isVVip = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        if (1 == parseInt(t.state))
                            return !0
                    } catch (t) {
                        return !1
                    }
                return !1
            }
            ,
            c.isMT = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        if (2 == parseInt(t.state))
                            return !0
                    } catch (t) {
                        return !1
                    }
                return !1
            }
            ,
            c.logged = function () {
                return !!c.getUserInfo()
            }
            ,
            c.logout = function (e) {
                c.getUserInfo() && (s.remove("tyc-user-info", {
                    path: "/",
                    domain: t.cookieServerSuffix.split(":")[0]
                }),
                    s.remove("auth_token", {
                        path: "/",
                        domain: t.cookieServerSuffix.split(":")[0]
                    }))
            }
            ,
            c.getUserInfo = function () {
                var e = s.get("tyc-user-info", {
                    path: "/",
                    domain: t.cookieServerSuffix.split(":")[0]
                })
                    , i = s.get("auth_token", {
                        path: "/",
                        domain: t.cookieServerSuffix.split(":")[0]
                    });
                if (!i)
                    return e && s.remove("tyc-user-info", {
                        path: "/",
                        domain: t.cookieServerSuffix.split(":")[0]
                    }),
                        null;
                if (!e)
                    return i && s.remove("auth_token", {
                        path: "/",
                        domain: t.cookieServerSuffix.split(":")[0]
                    }),
                        null;
                try {
                    return JSON.parse(t.decodeURIComponent(e))
                } catch (e) {
                    return console.log(e),
                        s.remove("tyc-user-info", {
                            path: "/",
                            domain: t.cookieServerSuffix.split(":")[0]
                        }),
                        s.remove("auth_token", {
                            path: "/",
                            domain: t.cookieServerSuffix.split(":")[0]
                        }),
                        null
                }
            }
            ,
            c.isVipManager = function () {
                var t = c.getUserInfo();
                if (t)
                    try {
                        if (1 == parseInt(t.vipManager))
                            return !0
                    } catch (t) {
                        return !1
                    }
                return !1
            }
            ,
            c.refresh = function () {
                return new Promise(function (e, i) {
                    n.getUserInfo().then(function (i) {
                        if ("ok" === i.state) {
                            var a = c.getUserInfo() || {}
                                , n = i.data;
                            n.token = a.token,
                                s.set("tyc-user-info", t.encodeURIComponent(JSON.stringify(n)), o)
                        }
                        e()
                    }, function () {
                        i()
                    })
                }
                )
            }
            ,
            t.UserManage = c,
            c
    }),
    define("util/liveSearch", ["window", "jquery", "util/query", "util/ejs", "util/UserManage"], function (t, e, i, s, a) {
        if (e.fn.liveSearch)
            return e.fn.liveSearch;
        t.TYC_UI || (t.TYC_UI = {});
        var n = t.TYC_UI.LIVESEARCH;
        n || (n = t.TYC_UI.LIVESEARCH = {});
        var o = function (e) {
            if (e = e || "",
                e.trim()) {
                for (var i = e.split("."), s = t, a = 0; a < i.length; a++) {
                    if (!s[i[a]])
                        return null;
                    s = s[i[a]]
                }
                return s
            }
        }
            , r = function (t) {
                var i = [];
                return e.each(t, function (t, e) {
                    i.push('<li class="">'),
                        e.matchType && (i.push('<span class="live_search_match_type">'),
                            i.push(e.matchType),
                            i.push("</span>")),
                        i.push('<span class="js-text">'),
                        i.push(e.name),
                        i.push("</span>"),
                        i.push("</li>")
                }),
                    a.logged() || i.push('<li style="text-align: center;color#202020;border-top:1px solid #e0e0e0;">想获取更精准的关键词自动联想结果？马上<a class="c9" onclick="header.loginLink(event)">登录</a></li>'),
                    i.join("")
            }
            , c = function (t) {
                return s.render("humansuggest", {
                    humanInfo: t
                })
            }
            , l = function (t, i) {
                var s = this;
                this.$target = t,
                    this.options = i,
                    t.siblings("ul").remove();
                var a = this.$ul = e('<ul class="searchresultspopup bdcolor hidden"></ul>');
                t.after(a),
                    this.timer = null,
                    this.dataStore = [],
                    this.prevalue = "";
                var n = function (n) {
                    var o = e(this).val()
                        , r = n.keyCode;
                    if (a.find("li").length && a.removeClass("hidden"),
                        38 === r || 40 === r)
                        s.selectOption(r);
                    else if (91 === r || 37 === r || 39 === r || 16 === r || 17 === r || 18 === r || 20 === r)
                        ;
                    else if (13 === r) {
                        if (i.enterSelected || t.attr("enter-selected")) {
                            var c = a.find("li").index(a.find("li.selected"));
                            if (-1 === c)
                                return;
                            var l = s.dataStore[c];
                            s.selected(l)
                        }
                        a.addClass("hidden")
                    } else
                        "false" !== e(this).attr("suggest") && s.renderSuggest(o, !0);
                    s.updateClear(o)
                };
                t.on("keyup", function (e) {
                    n.call(this, e);
                    var i = o(t.attr("event-trigger"));
                    i && i.call(this, e)
                }),
                    t.on("click", function () {
                        e(this).val() && a.find("li").length > 0 && a.removeClass("hidden").find("li.selected").removeClass("selected")
                    }),
                    t.on("dblclick", function () {
                        s.renderSuggest(t.val(), !0)
                    }),
                    t.parent().on("click.liSelect", "li", function () {
                        var t = a.find("li").index(this);
                        if (-1 !== t) {
                            var e = s.dataStore[t];
                            s.selected(e),
                                a.addClass("hidden")
                        }
                    }),
                    e("body").on("click." + t.id, function (i) {
                        var s = e(i.target);
                        a.hasClass("hidden") || t.parent().has(s).length || a.addClass("hidden")
                    });
                t.val();
                t.data("live-search-state", "complete")
            }
            , d = l.prototype;
        return d.selected = function (t) {
            var e = this
                , i = this.options
                , s = this.$target;
            if (t)
                if (i.clickSelected && "function" == typeof i.clickSelected)
                    i.clickSelected(t);
                else if (s.attr("click-selected")) {
                    var a = o(s.attr("click-selected"));
                    "function" == typeof a && a(t)
                } else
                    e.selectedHandler && e.selectedHandler(t)
        }
            ,
            d.selectedHandler = function (t) { }
            ,
            d.selectOption = function (t) {
                var e = 38 === t ? -1 : 1
                    , i = this
                    , s = this.$ul
                    , a = this.$target
                    , n = s.find("li")
                    , o = n.index(s.find("li.selected"))
                    , r = n.length
                    , c = o + e;
                if (r) {
                    if (c >= r ? c = 0 : c < -1 && (c = r - 1),
                        n.removeClass("selected"),
                        -1 === c)
                        return void a.val(i.prevalue);
                    var l = n.eq(c).addClass("selected");
                    "true" !== a.attr("livesearch-is-human") && a.val(l.find(".js-text").text())
                }
            }
            ,
            d.renderSuggest = function (t, e) {
                t = t || "",
                    t = t.trim();
                var s = this
                    , a = this.$ul
                    , n = this.$target
                    , o = n.attr("livesearch-is-human");
                t ? (s.dataStore = [],
                    clearTimeout(s.timer),
                    s.timer = setTimeout(function () {
                        s.timer = null;
                        var t = n.val();
                        if (s.prevalue === t)
                            return void (e && a.removeClass("hidden"));
                        s.prevalue = t,
                            t && t.replace(/\\/gi, "") && ("true" !== o ? i.index_suggest(t.replace(/\\/gi, "")).then(function (t) {
                                t.data && t.data.length ? (a.html(r(t.data)),
                                    s.dataStore = t.data,
                                    e && a.removeClass("hidden")) : a.empty()
                            }) : i.index_human_suggest(t).then(function (t) {
                                t.data && t.data.resultList && t.data.resultList.length ? (a.html(c(t.data)),
                                    s.dataStore = t.data.resultList,
                                    e && a.removeClass("hidden")) : a.empty()
                            }))
                    }, 50)) : a.addClass("hidden")
            }
            ,
            d.config = function (t) {
                return this
            }
            ,
            d.updateClear = function (t) {
                t = t || "",
                    t = t.trim();
                var e = this.$target.parents(".search_group").find(".clearNew");
                t ? e.removeClass("hidden") : e.addClass("hidden")
            }
            ,
            d.getSelected = function () {
                var t = this
                    , e = this.$ul
                    , i = e.find("li")
                    , s = i.index(e.find("li.selected"));
                return t.dataStore[s]
            }
            ,
            d.hide = function () {
                this.$target.parent().addClass("hidden")
            }
            ,
            d.show = function () {
                this.$target.parent().removeClass("hidden")
            }
            ,
            e.fn.liveSearch = function (t) {
                t = t || {};
                var i = this;
                if (i.each(function (i) {
                    var s = e(this)
                        , a = s.attr("id");
                    if (a && n[a] && s.data("live-search-state")) {
                        return n[a].config(t)
                    }
                    a || (a = "live-search-" + ((new Date).getTime() + "").substring(8),
                        s.attr("id", a)),
                        s.wrap('<div class="live-search-wrap"></div>');
                    var o = s.parent();
                    t.wrapClass ? o.addClass(t.wrapClass) : s.attr("wrap-class") && o.addClass(s.attr("wrap-class")),
                        s.hasClass("hidden") && (o.addClass(s.addClass("hidden")),
                            s.removeClass("hidden")),
                        n[a] = new l(s, t)
                }),
                    1 === i.length)
                    return n[i.attr("id")]
            }
            ,
            e(".js-live-search").liveSearch(),
            e.fn.liveSearch
    }),
    function () {
        function t(t) {
            return t += "",
                t.charAt(0).toUpperCase() + t.slice(1)
        }
        function e(t, e, i) {
            var a = {
                "10.0": "10",
                6.4: "10 Technical Preview",
                6.3: "8.1",
                6.2: "8",
                6.1: "Server 2008 R2 / 7",
                "6.0": "Server 2008 / Vista",
                5.2: "Server 2003 / XP 64-bit",
                5.1: "XP",
                5.01: "2000 SP1",
                "5.0": "2000",
                "4.0": "NT",
                "4.90": "ME"
            };
            return e && i && /^Win/i.test(t) && !/^Windows Phone /i.test(t) && (a = a[/[\d.]+$/.exec(t)]) && (t = "Windows " + a),
                t += "",
                e && i && (t = t.replace(RegExp(e, "i"), i)),
                t = s(t.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])
        }
        function i(t, e) {
            var i = -1
                , s = t ? t.length : 0;
            if ("number" == typeof s && s > -1 && s <= g)
                for (; ++i < s;)
                    e(t[i], i, t);
            else
                a(t, e)
        }
        function s(e) {
            return e = l(e),
                /^(?:webOS|i(?:OS|P))/.test(e) ? e : t(e)
        }
        function a(t, e) {
            for (var i in t)
                _.call(t, i) && e(t[i], i, t)
        }
        function n(e) {
            return null == e ? t(e) : k.call(e).slice(8, -1)
        }
        function o(t, e) {
            var i = null != t ? typeof t[e] : "number";
            return !(/^(?:boolean|number|string|undefined)$/.test(i) || "object" == i && !t[e])
        }
        function r(t) {
            return (t + "").replace(/([ -])(?!$)/g, "$1?")
        }
        function c(t, e) {
            var s = null;
            return i(t, function (i, a) {
                s = e(s, i, a, t)
            }),
                s
        }
        function l(t) {
            return (t + "").replace(/^ +| +$/g, "")
        }
        function d(t) {
            function i(e) {
                return c(e, function (e, i) {
                    var a = i.pattern || r(i);
                    return !e && (e = RegExp("\\b" + a + " *\\d+[.\\w_]*", "i").exec(t) || RegExp("\\b" + a + " *\\w+-[\\w]*", "i").exec(t) || RegExp("\\b" + a + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(t)) && ((e = ((i.label && !RegExp(a, "i").test(i.label) ? i.label : e) + "").split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]),
                        i = i.label || i,
                        e = s(e[0].replace(RegExp(a, "i"), i).replace(RegExp("; *(?:" + i + "[_-])?", "i"), " ").replace(RegExp("(" + i + ")[-_.]?(\\w)", "i"), "$1 $2"))),
                        e
                })
            }
            function p() {
                return this.description || ""
            }
            var m = u
                , h = t && "object" == typeof t && "String" != n(t);
            h && (m = t,
                t = null);
            var f = m.navigator || {}
                , g = f.userAgent || "";
            t || (t = g);
            var w, _, x = h || y == v, C = h ? !!f.likeChrome : /\bChrome\b/.test(t) && !/internal|\n/i.test("" + k), I = h ? "Object" : "ScriptBridgingProxyObject", M = h ? "Object" : "Environment", S = h && m.java ? "JavaPackage" : n(m.java), P = h ? "Object" : "RuntimeObject", D = /\bJava/.test(S) && m.java, T = D && n(m.environment) == M, j = D ? "a" : "α", R = D ? "b" : "β", N = m.document || {}, E = m.operamini || m.opera, L = b.test(L = h && E ? E["[[Class]]"] : n(E)) ? L : E = null, O = t, F = [], B = null, U = t == g, A = U && E && "function" == typeof E.version && E.version(), Y = function (e) {
                return c(e, function (e, i) {
                    return e || RegExp("\\b" + (i.pattern || r(i)) + "\\b", "i").exec(t) && (i.label || i)
                })
            }([{
                "label": "EdgeHTML",
                "pattern": "Edge"
            }, "Trident", {
                "label": "WebKit",
                "pattern": "AppleWebKit"
            }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]), V = function (e) {
                return c(e, function (e, i) {
                    return e || RegExp("\\b" + (i.pattern || r(i)) + "\\b", "i").exec(t) && (i.label || i)
                })
            }(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                "label": "Microsoft Edge",
                "pattern": "Edge"
            }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                    "label": "Samsung Internet",
                    "pattern": "SamsungBrowser"
                }, "SeaMonkey", {
                    "label": "Silk",
                    "pattern": "(?:Cloud9|Silk-Accelerated)"
                }, "Sleipnir", "SlimBrowser", {
                    "label": "SRWare Iron",
                    "pattern": "Iron"
                }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                    "label": "Opera Mini",
                    "pattern": "OPiOS"
                }, "Opera", {
                    "label": "Opera",
                    "pattern": "OPR"
                }, "Chrome", {
                    "label": "Chrome Mobile",
                    "pattern": "(?:CriOS|CrMo)"
                }, {
                    "label": "Firefox",
                    "pattern": "(?:Firefox|Minefield)"
                }, {
                    "label": "Firefox for iOS",
                    "pattern": "FxiOS"
                }, {
                    "label": "IE",
                    "pattern": "IEMobile"
                }, {
                    "label": "IE",
                    "pattern": "MSIE"
                }, "Safari"]), H = i([{
                    "label": "BlackBerry",
                    "pattern": "BB10"
                }, "BlackBerry", {
                    "label": "Galaxy S",
                    "pattern": "GT-I9000"
                }, {
                    "label": "Galaxy S2",
                    "pattern": "GT-I9100"
                }, {
                    "label": "Galaxy S3",
                    "pattern": "GT-I9300"
                }, {
                    "label": "Galaxy S4",
                    "pattern": "GT-I9500"
                }, {
                    "label": "Galaxy S5",
                    "pattern": "SM-G900"
                }, {
                    "label": "Galaxy S6",
                    "pattern": "SM-G920"
                }, {
                    "label": "Galaxy S6 Edge",
                    "pattern": "SM-G925"
                }, {
                    "label": "Galaxy S7",
                    "pattern": "SM-G930"
                }, {
                    "label": "Galaxy S7 Edge",
                    "pattern": "SM-G935"
                }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                    "label": "Kindle Fire",
                    "pattern": "(?:Cloud9|Silk-Accelerated)"
                }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                    "label": "Wii U",
                    "pattern": "WiiU"
                }, "Wii", "Xbox One", {
                    "label": "Xbox 360",
                    "pattern": "Xbox"
                }, "Xoom"]), G = function (e) {
                    return c(e, function (e, i, s) {
                        return e || (i[H] || i[/^[a-z]+(?: +[a-z]+\b)*/i.exec(H)] || RegExp("\\b" + r(s) + "(?:\\b|\\w*\\d)", "i").exec(t)) && s
                    })
                }({
                    "Apple": {
                        "iPad": 1,
                        "iPhone": 1,
                        "iPod": 1
                    },
                    "Archos": {},
                    "Amazon": {
                        "Kindle": 1,
                        "Kindle Fire": 1
                    },
                    "Asus": {
                        "Transformer": 1
                    },
                    "Barnes & Noble": {
                        "Nook": 1
                    },
                    "BlackBerry": {
                        "PlayBook": 1
                    },
                    "Google": {
                        "Google TV": 1,
                        "Nexus": 1
                    },
                    "HP": {
                        "TouchPad": 1
                    },
                    "HTC": {},
                    "LG": {},
                    "Microsoft": {
                        "Xbox": 1,
                        "Xbox One": 1
                    },
                    "Motorola": {
                        "Xoom": 1
                    },
                    "Nintendo": {
                        "Wii U": 1,
                        "Wii": 1
                    },
                    "Nokia": {
                        "Lumia": 1
                    },
                    "Samsung": {
                        "Galaxy S": 1,
                        "Galaxy S2": 1,
                        "Galaxy S3": 1,
                        "Galaxy S4": 1
                    },
                    "Sony": {
                        "PlayStation": 1,
                        "PlayStation Vita": 1
                    }
                }), W = function (i) {
                    return c(i, function (i, s) {
                        var a = s.pattern || r(s);
                        return !i && (i = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(t)) && (i = e(i, a, s.label || s)),
                            i
                    })
                }(["Windows Phone", "Android", "CentOS", {
                    "label": "Chrome OS",
                    "pattern": "CrOS"
                }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);
            if (Y && (Y = [Y]),
                G && !H && (H = i([G])),
                (w = /\bGoogle TV\b/.exec(H)) && (H = w[0]),
                /\bSimulator\b/i.test(t) && (H = (H ? H + " " : "") + "Simulator"),
                "Opera Mini" == V && /\bOPiOS\b/.test(t) && F.push("running in Turbo/Uncompressed mode"),
                "IE" == V && /\blike iPhone OS\b/.test(t) ? (w = d(t.replace(/like iPhone OS/, "")),
                    G = w.manufacturer,
                    H = w.product) : /^iP/.test(H) ? (V || (V = "Safari"),
                        W = "iOS" + ((w = / OS ([\d_]+)/i.exec(t)) ? " " + w[1].replace(/_/g, ".") : "")) : "Konqueror" != V || /buntu/i.test(W) ? G && "Google" != G && (/Chrome/.test(V) && !/\bMobile Safari\b/i.test(t) || /\bVita\b/.test(H)) || /\bAndroid\b/.test(W) && /^Chrome/.test(V) && /\bVersion\//i.test(t) ? (V = "Android Browser",
                            W = /\bAndroid\b/.test(W) ? W : "Android") : "Silk" == V ? (/\bMobi/i.test(t) || (W = "Android",
                                F.unshift("desktop mode")),
                                /Accelerated *= *true/i.test(t) && F.unshift("accelerated")) : "PaleMoon" == V && (w = /\bFirefox\/([\d.]+)\b/.exec(t)) ? F.push("identifying as Firefox " + w[1]) : "Firefox" == V && (w = /\b(Mobile|Tablet|TV)\b/i.exec(t)) ? (W || (W = "Firefox OS"),
                                    H || (H = w[1])) : !V || (w = !/\bMinefield\b/i.test(t) && /\b(?:Firefox|Safari)\b/.exec(V)) ? (V && !H && /[\/,]|^[^(]+?\)/.test(t.slice(t.indexOf(w + "/") + 8)) && (V = null),
                                        (w = H || G || W) && (H || G || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(W)) && (V = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(W) ? W : w) + " Browser")) : "Electron" == V && (w = (/\bChrome\/([\d.]+)\b/.exec(t) || 0)[1]) && F.push("Chromium " + w) : W = "Kubuntu",
                A || (A = function (e) {
                    return c(e, function (e, i) {
                        return e || (RegExp(i + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(t) || 0)[1] || null
                    })
                }(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", r(V), "(?:Firefox|Minefield|NetFront)"])),
                (w = "iCab" == Y && parseFloat(A) > 3 && "WebKit" || /\bOpera\b/.test(V) && (/\bOPR\b/.test(t) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(t) && !/^(?:Trident|EdgeHTML)$/.test(Y) && "WebKit" || !Y && /\bMSIE\b/i.test(t) && ("Mac OS" == W ? "Tasman" : "Trident") || "WebKit" == Y && /\bPlayStation\b(?! Vita\b)/i.test(V) && "NetFront") && (Y = [w]),
                "IE" == V && (w = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(t) || 0)[1]) ? (V += " Mobile",
                    W = "Windows Phone " + (/\+$/.test(w) ? w : w + ".x"),
                    F.unshift("desktop mode")) : /\bWPDesktop\b/i.test(t) ? (V = "IE Mobile",
                        W = "Windows Phone 8.x",
                        F.unshift("desktop mode"),
                        A || (A = (/\brv:([\d.]+)/.exec(t) || 0)[1])) : "IE" != V && "Trident" == Y && (w = /\brv:([\d.]+)/.exec(t)) && (V && F.push("identifying as " + V + (A ? " " + A : "")),
                            V = "IE",
                            A = w[1]),
                U) {
                if (o(m, "global"))
                    if (D && (w = D.lang.System,
                        O = w.getProperty("os.arch"),
                        W = W || w.getProperty("os.name") + " " + w.getProperty("os.version")),
                        x && o(m, "system") && (w = [m.system])[0]) {
                        W || (W = w[0].os || null);
                        try {
                            w[1] = m.require("ringo/engine").version,
                                A = w[1].join("."),
                                V = "RingoJS"
                        } catch (t) {
                            w[0].global.system == m.system && (V = "Narwhal")
                        }
                    } else
                        "object" == typeof m.process && !m.process.browser && (w = m.process) ? "object" == typeof w.versions ? "string" == typeof w.versions.electron ? (F.push("Node " + w.versions.node),
                            V = "Electron",
                            A = w.versions.electron) : "string" == typeof w.versions.nw && (F.push("Chromium " + A, "Node " + w.versions.node),
                                V = "NW.js",
                                A = w.versions.nw) : (V = "Node.js",
                                    O = w.arch,
                                    W = w.platform,
                                    A = /[\d.]+/.exec(w.version),
                                    A = A ? A[0] : "unknown") : T && (V = "Rhino");
                else
                    n(w = m.runtime) == I ? (V = "Adobe AIR",
                        W = w.flash.system.Capabilities.os) : n(w = m.phantom) == P ? (V = "PhantomJS",
                            A = (w = w.version || null) && w.major + "." + w.minor + "." + w.patch) : "number" == typeof N.documentMode && (w = /\bTrident\/(\d+)/i.exec(t)) ? (A = [A, N.documentMode],
                                (w = +w[1] + 4) != A[1] && (F.push("IE " + A[1] + " mode"),
                                    Y && (Y[1] = ""),
                                    A[1] = w),
                                A = "IE" == V ? A[1].toFixed(1) + "" : A[0]) : "number" == typeof N.documentMode && /^(?:Chrome|Firefox)\b/.test(V) && (F.push("masking as " + V + " " + A),
                                    V = "IE",
                                    A = "11.0",
                                    Y = ["Trident"],
                                    W = "Windows");
                W = W && s(W)
            }
            if (A && (w = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(A) || /(?:alpha|beta)(?: ?\d)?/i.exec(t + ";" + (U && f.appMinorVersion)) || /\bMinefield\b/i.test(t) && "a") && (B = /b/i.test(w) ? "beta" : "alpha",
                A = A.replace(RegExp(w + "\\+?$"), "") + ("beta" == B ? R : j) + (/\d+\+?/.exec(w) || "")),
                "Fennec" == V || "Firefox" == V && /\b(?:Android|Firefox OS)\b/.test(W))
                V = "Firefox Mobile";
            else if ("Maxthon" == V && A)
                A = A.replace(/\.[\d.]+/, ".x");
            else if (/\bXbox\b/i.test(H))
                "Xbox 360" == H && (W = null),
                    "Xbox 360" == H && /\bIEMobile\b/.test(t) && F.unshift("mobile mode");
            else if (!/^(?:Chrome|IE|Opera)$/.test(V) && (!V || H || /Browser|Mobi/.test(V)) || "Windows CE" != W && !/Mobi/i.test(t))
                if ("IE" == V && U)
                    try {
                        null === m.external && F.unshift("platform preview")
                    } catch (t) {
                        F.unshift("embedded")
                    }
                else
                (/\bBlackBerry\b/.test(H) || /\bBB10\b/.test(t)) && (w = (RegExp(H.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(t) || 0)[1] || A) ? (w = [w, /BB10/.test(t)],
                        W = (w[1] ? (H = null,
                            G = "BlackBerry") : "Device Software") + " " + w[0],
                        A = null) : this != a && "Wii" != H && (U && E || /Opera/.test(V) && /\b(?:MSIE|Firefox)\b/i.test(t) || "Firefox" == V && /\bOS X (?:\d+\.){2,}/.test(W) || "IE" == V && (W && !/^Win/.test(W) && A > 5.5 || /\bWindows XP\b/.test(W) && A > 8 || 8 == A && !/\bTrident\b/.test(t))) && !b.test(w = d.call(a, t.replace(b, "") + ";")) && w.name && (w = "ing as " + w.name + ((w = w.version) ? " " + w : ""),
                            b.test(V) ? (/\bIE\b/.test(w) && "Mac OS" == W && (W = null),
                                w = "identify" + w) : (w = "mask" + w,
                                    V = L ? s(L.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera",
                                    /\bIE\b/.test(w) && (W = null),
                                    U || (A = null)),
                            Y = ["Presto"],
                            F.push(w));
            else
                V += " Mobile";
            (w = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(t) || 0)[1]) && (w = [parseFloat(w.replace(/\.(\d)$/, ".0$1")), w],
                "Safari" == V && "+" == w[1].slice(-1) ? (V = "WebKit Nightly",
                    B = "alpha",
                    A = w[1].slice(0, -1)) : A != w[1] && A != (w[2] = (/\bSafari\/([\d.]+\+?)/i.exec(t) || 0)[1]) || (A = null),
                w[1] = (/\bChrome\/([\d.]+)/i.exec(t) || 0)[1],
                537.36 == w[0] && 537.36 == w[2] && parseFloat(w[1]) >= 28 && "WebKit" == Y && (Y = ["Blink"]),
                U && (C || w[1]) ? (Y && (Y[1] = "like Chrome"),
                    w = w[1] || (w = w[0],
                        w < 530 ? 1 : w < 532 ? 2 : w < 532.05 ? 3 : w < 533 ? 4 : w < 534.03 ? 5 : w < 534.07 ? 6 : w < 534.1 ? 7 : w < 534.13 ? 8 : w < 534.16 ? 9 : w < 534.24 ? 10 : w < 534.3 ? 11 : w < 535.01 ? 12 : w < 535.02 ? "13+" : w < 535.07 ? 15 : w < 535.11 ? 16 : w < 535.19 ? 17 : w < 536.05 ? 18 : w < 536.1 ? 19 : w < 537.01 ? 20 : w < 537.11 ? "21+" : w < 537.13 ? 23 : w < 537.18 ? 24 : w < 537.24 ? 25 : w < 537.36 ? 26 : "Blink" != Y ? "27" : "28")) : (Y && (Y[1] = "like Safari"),
                            w = w[0],
                            w = w < 400 ? 1 : w < 500 ? 2 : w < 526 ? 3 : w < 533 ? 4 : w < 534 ? "4+" : w < 535 ? 5 : w < 537 ? 6 : w < 538 ? 7 : w < 601 ? 8 : "8"),
                Y && (Y[1] += " " + (w += "number" == typeof w ? ".x" : /[.+]/.test(w) ? "" : "+")),
                "Safari" == V && (!A || parseInt(A) > 45) && (A = w)),
                "Opera" == V && (w = /\bzbov|zvav$/.exec(W)) ? (V += " ",
                    F.unshift("desktop mode"),
                    "zvav" == w ? (V += "Mini",
                        A = null) : V += "Mobile",
                    W = W.replace(RegExp(" *" + w + "$"), "")) : "Safari" == V && /\bChrome\b/.exec(Y && Y[1]) && (F.unshift("desktop mode"),
                        V = "Chrome Mobile",
                        A = null,
                        /\bOS X\b/.test(W) ? (G = "Apple",
                            W = "iOS 4.3+") : W = null),
                A && 0 == A.indexOf(w = /[\d.]+$/.exec(W)) && t.indexOf("/" + w + "-") > -1 && (W = l(W.replace(w, ""))),
                Y && !/\b(?:Avant|Nook)\b/.test(V) && (/Browser|Lunascape|Maxthon/.test(V) || "Safari" != V && /^iOS/.test(W) && /\bSafari\b/.test(Y[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(V) && Y[1]) && (w = Y[Y.length - 1]) && F.push(w),
                F.length && (F = ["(" + F.join("; ") + ")"]),
                G && H && H.indexOf(G) < 0 && F.push("on " + G),
                H && F.push((/^on /.test(F[F.length - 1]) ? "" : "on ") + H),
                W && (w = / ([\d.+]+)$/.exec(W),
                    _ = w && "/" == W.charAt(W.length - w[0].length - 1),
                    W = {
                        "architecture": 32,
                        "family": w && !_ ? W.replace(w[0], "") : W,
                        "version": w ? w[1] : null,
                        "toString": function () {
                            var t = this.version;
                            return this.family + (t && !_ ? " " + t : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }),
                (w = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(O)) && !/\bi686\b/i.test(O) ? (W && (W.architecture = 64,
                    W.family = W.family.replace(RegExp(" *" + w), "")),
                    V && (/\bWOW64\b/i.test(t) || U && /\w(?:86|32)$/.test(f.cpuClass || f.platform) && !/\bWin64; x64\b/i.test(t)) && F.unshift("32-bit")) : W && /^OS X/.test(W.family) && "Chrome" == V && parseFloat(A) >= 39 && (W.architecture = 64),
                t || (t = null);
            var q = {};
            return q.description = t,
                q.layout = Y && Y[0],
                q.manufacturer = G,
                q.name = V,
                q.prerelease = B,
                q.product = H,
                q.ua = t,
                q.version = V && A,
                q.os = W || {
                    "architecture": null,
                    "family": null,
                    "version": null,
                    "toString": function () {
                        return "null"
                    }
                },
                q.parse = d,
                q.toString = p,
                q.version && F.unshift(A),
                q.name && F.unshift(V),
                W && V && (W != (W + "").split(" ")[0] || W != V.split(" ")[0] && !H) && F.push(H ? "(" + W + ")" : "on " + W),
                F.length && (q.description = F.join(" ")),
                q
        }
        var p = {
            "function": !0,
            "object": !0
        }
            , u = p[typeof window] && window || this
            , v = u
            , m = p[typeof exports] && exports
            , h = p[typeof module] && module && !module.nodeType && module
            , f = m && h && "object" == typeof global && global;
        !f || f.global !== f && f.window !== f && f.self !== f || (u = f);
        var g = Math.pow(2, 53) - 1
            , b = /\bOpera/
            , y = this
            , w = Object.prototype
            , _ = w.hasOwnProperty
            , k = w.toString
            , x = d();
        "function" == typeof define && "object" == typeof define.amd && define.amd ? (u.platform = x,
            define("lib/platform", [], function () {
                return x
            })) : m && h ? a(x, function (t, e) {
                m[e] = t
            }) : u.platform = x
    }
        .call(this),
    define("util/msgInit", ["window", "Base64"], function (t, e) {
        var i = function () {
            function t(t) {
                var e = this.__MSG_QS__;
                e[t] || (e[t] = []);
                for (var i = 1, s = arguments.length; i < s; i++)
                    e[t].push(arguments[i])
            }
            function e(t) {
                var e = this.__MSG_QS__[t.type];
                if (null != e)
                    for (var i = 0, s = e.length; i < s; i++)
                        e[i].rm(t)
            }
            return {
                ini: function (i) {
                    return i.__MSG_QS__ = {},
                        i.on = t,
                        i.dm = e,
                        i
                }
            }
        }();
        t.msgQS = i,
            t.F = i.ini({
                rm: function (t) {
                    switch (t.type) {
                        case "response":
                            e.charDecode(t.data)
                    }
                }
            }),
            t._0x9ad = [".xhtml"]
    }),
    function (t) {
        "use strict";
        function e(t, e) {
            var i = (65535 & t) + (65535 & e);
            return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i
        }
        function i(t, e) {
            return t << e | t >>> 32 - e
        }
        function s(t, s, a, n, o, r) {
            return e(i(e(e(s, t), e(n, r)), o), a)
        }
        function a(t, e, i, a, n, o, r) {
            return s(e & i | ~e & a, t, e, n, o, r)
        }
        function n(t, e, i, a, n, o, r) {
            return s(e & a | i & ~a, t, e, n, o, r)
        }
        function o(t, e, i, a, n, o, r) {
            return s(e ^ i ^ a, t, e, n, o, r)
        }
        function r(t, e, i, a, n, o, r) {
            return s(i ^ (e | ~a), t, e, n, o, r)
        }
        function c(t, i) {
            t[i >> 5] |= 128 << i % 32,
                t[14 + (i + 64 >>> 9 << 4)] = i;
            var s, c, l, d, p, u = 1732584193, v = -271733879, m = -1732584194, h = 271733878;
            for (s = 0; s < t.length; s += 16)
                c = u,
                    l = v,
                    d = m,
                    p = h,
                    u = a(u, v, m, h, t[s], 7, -680876936),
                    h = a(h, u, v, m, t[s + 1], 12, -389564586),
                    m = a(m, h, u, v, t[s + 2], 17, 606105819),
                    v = a(v, m, h, u, t[s + 3], 22, -1044525330),
                    u = a(u, v, m, h, t[s + 4], 7, -176418897),
                    h = a(h, u, v, m, t[s + 5], 12, 1200080426),
                    m = a(m, h, u, v, t[s + 6], 17, -1473231341),
                    v = a(v, m, h, u, t[s + 7], 22, -45705983),
                    u = a(u, v, m, h, t[s + 8], 7, 1770035416),
                    h = a(h, u, v, m, t[s + 9], 12, -1958414417),
                    m = a(m, h, u, v, t[s + 10], 17, -42063),
                    v = a(v, m, h, u, t[s + 11], 22, -1990404162),
                    u = a(u, v, m, h, t[s + 12], 7, 1804603682),
                    h = a(h, u, v, m, t[s + 13], 12, -40341101),
                    m = a(m, h, u, v, t[s + 14], 17, -1502002290),
                    v = a(v, m, h, u, t[s + 15], 22, 1236535329),
                    u = n(u, v, m, h, t[s + 1], 5, -165796510),
                    h = n(h, u, v, m, t[s + 6], 9, -1069501632),
                    m = n(m, h, u, v, t[s + 11], 14, 643717713),
                    v = n(v, m, h, u, t[s], 20, -373897302),
                    u = n(u, v, m, h, t[s + 5], 5, -701558691),
                    h = n(h, u, v, m, t[s + 10], 9, 38016083),
                    m = n(m, h, u, v, t[s + 15], 14, -660478335),
                    v = n(v, m, h, u, t[s + 4], 20, -405537848),
                    u = n(u, v, m, h, t[s + 9], 5, 568446438),
                    h = n(h, u, v, m, t[s + 14], 9, -1019803690),
                    m = n(m, h, u, v, t[s + 3], 14, -187363961),
                    v = n(v, m, h, u, t[s + 8], 20, 1163531501),
                    u = n(u, v, m, h, t[s + 13], 5, -1444681467),
                    h = n(h, u, v, m, t[s + 2], 9, -51403784),
                    m = n(m, h, u, v, t[s + 7], 14, 1735328473),
                    v = n(v, m, h, u, t[s + 12], 20, -1926607734),
                    u = o(u, v, m, h, t[s + 5], 4, -378558),
                    h = o(h, u, v, m, t[s + 8], 11, -2022574463),
                    m = o(m, h, u, v, t[s + 11], 16, 1839030562),
                    v = o(v, m, h, u, t[s + 14], 23, -35309556),
                    u = o(u, v, m, h, t[s + 1], 4, -1530992060),
                    h = o(h, u, v, m, t[s + 4], 11, 1272893353),
                    m = o(m, h, u, v, t[s + 7], 16, -155497632),
                    v = o(v, m, h, u, t[s + 10], 23, -1094730640),
                    u = o(u, v, m, h, t[s + 13], 4, 681279174),
                    h = o(h, u, v, m, t[s], 11, -358537222),
                    m = o(m, h, u, v, t[s + 3], 16, -722521979),
                    v = o(v, m, h, u, t[s + 6], 23, 76029189),
                    u = o(u, v, m, h, t[s + 9], 4, -640364487),
                    h = o(h, u, v, m, t[s + 12], 11, -421815835),
                    m = o(m, h, u, v, t[s + 15], 16, 530742520),
                    v = o(v, m, h, u, t[s + 2], 23, -995338651),
                    u = r(u, v, m, h, t[s], 6, -198630844),
                    h = r(h, u, v, m, t[s + 7], 10, 1126891415),
                    m = r(m, h, u, v, t[s + 14], 15, -1416354905),
                    v = r(v, m, h, u, t[s + 5], 21, -57434055),
                    u = r(u, v, m, h, t[s + 12], 6, 1700485571),
                    h = r(h, u, v, m, t[s + 3], 10, -1894986606),
                    m = r(m, h, u, v, t[s + 10], 15, -1051523),
                    v = r(v, m, h, u, t[s + 1], 21, -2054922799),
                    u = r(u, v, m, h, t[s + 8], 6, 1873313359),
                    h = r(h, u, v, m, t[s + 15], 10, -30611744),
                    m = r(m, h, u, v, t[s + 6], 15, -1560198380),
                    v = r(v, m, h, u, t[s + 13], 21, 1309151649),
                    u = r(u, v, m, h, t[s + 4], 6, -145523070),
                    h = r(h, u, v, m, t[s + 11], 10, -1120210379),
                    m = r(m, h, u, v, t[s + 2], 15, 718787259),
                    v = r(v, m, h, u, t[s + 9], 21, -343485551),
                    u = e(u, c),
                    v = e(v, l),
                    m = e(m, d),
                    h = e(h, p);
            return [u, v, m, h]
        }
        function l(t) {
            var e, i = "", s = 32 * t.length;
            for (e = 0; e < s; e += 8)
                i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
            return i
        }
        function d(t) {
            var e, i = [];
            for (i[(t.length >> 2) - 1] = void 0,
                e = 0; e < i.length; e += 1)
                i[e] = 0;
            var s = 8 * t.length;
            for (e = 0; e < s; e += 8)
                i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
            return i
        }
        function p(t) {
            return l(c(d(t), 8 * t.length))
        }
        function u(t, e) {
            var i, s, a = d(t), n = [], o = [];
            for (n[15] = o[15] = void 0,
                a.length > 16 && (a = c(a, 8 * t.length)),
                i = 0; i < 16; i += 1)
                n[i] = 909522486 ^ a[i],
                    o[i] = 1549556828 ^ a[i];
            return s = c(n.concat(d(e)), 512 + 8 * e.length),
                l(c(o.concat(s), 640))
        }
        function v(t) {
            var e, i, s = "0123456789abcdef", a = "";
            for (i = 0; i < t.length; i += 1)
                e = t.charCodeAt(i),
                    a += s.charAt(e >>> 4 & 15) + s.charAt(15 & e);
            return a
        }
        function m(t) {
            return unescape(encodeURIComponent(t))
        }
        function h(t) {
            return p(m(t))
        }
        function f(t) {
            return v(h(t))
        }
        function g(t, e) {
            return u(m(t), m(e))
        }
        function b(t, e) {
            return v(g(t, e))
        }
        function y(t, e, i) {
            return e ? i ? g(e, t) : b(e, t) : i ? h(t) : f(t)
        }
        "function" == typeof define && define.amd ? define("md5", [], function () {
            return y
        }) : "object" == typeof module && module.exports ? module.exports = y : t.md5 = y
    }(this),
    define("modal/login", ["window", "jquery", "Base64", "util/msgInit", "md5", "util/ejs", "util/loading", "util/modal", "util/query", "gt", "util/UserManage"], function (t, e, i, s, a, n, o, r, c, l, d) {
        var p = {}
            , u = {
                showGeetest: !0
            };
        if (t.loginObj)
            return t.loginObj;
        var v = {};
        v.clearMsg = function () {
            e(".new-err").removeClass("in"),
                e(".input_err").removeClass("input_err")
        }
            ;
        var m = function (t, e) {
            var i = {}
                , s = /^((1[0-9]{1})\d{9})$/
                , a = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,20}$/;
            return t.phone ? s.test(t.phone) ? t.scode || 1 == e ? t.word || 2 == e ? a.test(t.word) || 3 != e && 4 != e ? t.reword || 3 != e ? t.word != t.reword && 3 == e ? (i.reword = "两次输入不一致",
                i) : i : (i.reword = "请再次输入密码",
                    i) : (i.word = "请输入8-20位数字和字母组合",
                        i) : (i.word = "请输入密码",
                            i) : (i.scode = "请输入验证码",
                                i) : (i.phone = "请输入正确格式的手机号码",
                                    i) : (i.phone = "请输入手机号码",
                                        i)
        };
        v.showLoginModal = function (t) {
            var e = "";
            v.option = t || {},
                u.scodeChange && clearInterval(u.scodeChange),
                u = {
                    showGeetest: !0
                },
                e = n.render("login", {
                    loginObj: {
                        title: "短信验证码登陆"
                    }
                }),
                r.openByElementStr(e, {
                    size: "loginBox"
                }, function () { })
        }
            ;
        var h = function (t) {
            return 1 != t && 2 != t ? ".module" + t : ".modulein" + t
        }
            , f = function (t) {
                var e = /^((1[0-9]{1})\d{9})$/;
                return t ? e.test(t) ? "" : "请输入正确的手机号码" : "请输入手机号码"
            }
            , g = function (t) {
                clearInterval(u.scodeChange),
                    u.scodeChange = null,
                    u.scodeType = !1,
                    e(t + " .scodebtn").removeClass("greyBtn").html("获取验证码"),
                    e(t + " .voicescodebtn").removeClass("greyVoiceBtn").addClass("new-c10"),
                    u.showGeetest = !0
            }
            , b = function (t, i, s, a) {
                p = {
                    phone: t,
                    vertype: i,
                    funtype: s,
                    currentstate: a
                },
                    e("#geetest-submit-btn").click()
            }
            , y = function (e, i, s) {
                if (e && e.data && "ok" == e.state) {
                    if (d.setUserInfo(e.data, i.autoLogin),
                        r.close(),
                        v.option && v.option.entertype) {
                        if ("vipbusiness" == v.option.entertype && d.isVipManager())
                            return t.location.href = v.option.enterUrl || v.option.loginUrl;
                        if ("vipintro" == v.option.entertype)
                            return d.isPutong() ? t.location.href = v.option.loginUrl : t.location.href = v.option.enterUrl || v.option.loginUrl
                    }
                    if (v.option && v.option.loginUrl)
                        t.location.href = v.option.loginUrl;
                    else {
                        if (v.option && v.option.refreshFun)
                            return v.option.refreshFun(),
                                void (v.option = null);
                        t.location.reload(!0)
                    }
                } else
                    e ? (e.message,
                        s.addClass("in").html(e.message)) : s.addClass("in").html("请稍后重试")
            };
        v.checkUserStatus = function () {
            return new Promise(function (e, i) {
                if (d.logged())
                    return void e();
                t.stget("LOGIN_MODAL.FILTER"),
                    v.showLoginModal({
                        refreshFun: function () {
                            t.stget("LOGIN_MODAL.PASS"),
                                e()
                        }
                    })
            }
            )
        }
            ,
            v.changeCheckType = function (t, i) {
                var s = h(i);
                if (!e(s + " .scode").hasClass("greyBtn")) {
                    var a = e(s + " .contactphone").val()
                        , n = f(a);
                    if (n)
                        return e(s + " .errMsgphone").addClass("in").html(n);
                    if ("获取验证码" == e("#smsCodeBtnPopup").text()) {
                        var s = h(i)
                            , a = e(s + " .contactphone").val()
                            , n = f(a);
                        if (n)
                            return e(s + " .errMsgphone").addClass("in").html(n);
                        e("#geetest-captcha").length ? b(a, "VOICE", t, i) : (o.show(),
                            e("<div id='geetest-captcha' ></div><div id='geetest-submit-btn'></div>").appendTo("body"),
                            c.geetestConfig().then(function (e) {
                                initGeetest({
                                    gt: e.data.gt,
                                    challenge: e.data.challenge,
                                    product: "popup",
                                    offline: !e.data.success
                                }, _),
                                    setTimeout(function () {
                                        o.hide(),
                                            b(a, "VOICE", t, i)
                                    }, 1e3)
                            }))
                    }
                }
            }
            ;
        var w = function (t, i, s, a, n) {
            var o = h(n)
                , r = f(t);
            if (r)
                return e(o + " .errMsgphone").addClass("in").html(r);
            a && (c.sendSMSCode(t, i, s, a).then(function (t) {
                if (t && "ok" !== t.status)
                    return void e(o + " .errMsgphone").addClass("in").html(t.message)
            }),
                u.scodeType || (e(o + " .errMsgphone").removeClass("in"),
                    e(o + " .scodebtn").addClass("greyBtn").html("60s"),
                    e(o + " .voicescodebtn").addClass("greyVoiceBtn").removeClass("new-c10"),
                    u.scodeType = !0,
                    u.showGeetest = !1,
                    u.num = 60,
                    u.scodeChange = setInterval(function () {
                        1 == u.num ? g(o) : (u.num-- ,
                            e(o + " .scodebtn").html(u.num + "s"))
                    }, 1e3)))
        }
            , _ = function (t) {
                t.bindOn("#geetest-submit-btn"),
                    t.appendTo("#geetest-captcha"),
                    t.onSuccess(function () {
                        var e = t.getValidate();
                        if (!e)
                            return void alert("请先完成验证！");
                        w(p.phone, p.vertype, p.funtype, e, p.currentstate)
                    })
            };
        return v.getSMSCode = function (t, i, s) {
            var a = h(t);
            if (!e(a + " .scodebtn").hasClass("greyBtn")) {
                if (!e(a + " .contactphone").val())
                    return e(a + " .contactphone").addClass("input_err"),
                        void e(a + " .errMsgphone").addClass("in").html("请输入手机号码");
                var n = e(a + " .contactphone").val()
                    , r = f(n);
                if (r)
                    return e(a + " .errMsgphone").addClass("in").html(r);
                e("#geetest-captcha").length ? b(e(a + " .contactphone").val(), i, s, t) : (o.show(),
                    e("<div id='geetest-captcha' ></div><div id='geetest-submit-btn'></div>").appendTo("body"),
                    c.geetestConfig().then(function (n) {
                        initGeetest({
                            gt: n.data.gt,
                            challenge: n.data.challenge,
                            product: "popup",
                            offline: !n.data.success
                        }, _),
                            setTimeout(function () {
                                o.hide(),
                                    b(e(a + " .contactphone").val(), i, s, t)
                            }, 1e3)
                    }))
            }
        }
            ,
            v.register = function () {
                v.clearMsg();
                var t = {};
                t.phone = e(".module3 .contactphone").val(),
                    t.scode = e(".module3 .contactscode").val(),
                    t.word = e(".module3 .contactword").val(),
                    t.reword = e(".module3 .contactreword").val();
                var i = m(t, 3);
                return i.phone ? (e(".module3 .contactphone").addClass("input_err"),
                    void e(".module3 .errMsgphone").addClass("in").html(i.phone)) : i.scode ? (e(".module3 .contactscode").addClass("input_err"),
                        void e(".module3 .errMsgscode").addClass("in").html(i.scode)) : i.word ? (e(".module3 .contactword").addClass("input_err"),
                            void e(".module3 .errMsgword").addClass("in").html(i.word)) : i.reword ? (e(".module3 .contactreword").addClass("input_err"),
                                void e(".module3 .errMsgreword").addClass("in").html(i.reword)) : void (i.phone || i.word || i.reword || i.scode || (o.show(),
                                    c.cd_reg({
                                        mobile: t.phone,
                                        cdpassword: a(t.word),
                                        smsCode: t.scode
                                    }).done(function (i) {
                                        o.hide(),
                                            i && "ok" != i.state ? e(".register_error").addClass("in").html(i.message) : (g(".module3"),
                                                c.cd_login({
                                                    mobile: t.phone,
                                                    cdpassword: a(t.word),
                                                    loginway: "PL"
                                                }).done(function (i) {
                                                    o.hide(),
                                                        y(i, t, e(".register_error"))
                                                }).fail(function () {
                                                    o.hide(),
                                                        e(".register_error").addClass("in").html("请稍后重试")
                                                }))
                                    }).fail(function () {
                                        o.hide(),
                                            e(".module3 .errMsgresErr").addClass("in").html("请稍后重试")
                                    })))
            }
            ,
            v.loginByPhone = function (i, s) {
                if ("keydown" == s) {
                    if (13 != (i || t.event).keyCode)
                        return
                }
                v.clearMsg();
                var n = {};
                n.phone = e(".modulein1 .contactphone").val(),
                    n.word = e(".modulein1 .contactword").val(),
                    n.autoLogin = e(".modulein1 .contactautoLogin").is(":checked");
                var r = m(n, 1);
                return r.phone ? (e(".modulein1 .contactphone").addClass("input_err"),
                    void e(".modulein1 .errMsgphone").addClass("in").html(r.phone)) : r.word ? (e(".modulein1 .contactword").addClass("input_err"),
                        void e(".modulein1 .errMsgword").addClass("in").html(r.word)) : void (r.phone || r.word || (o.show(),
                            c.cd_login({
                                mobile: n.phone,
                                cdpassword: a(n.word),
                                loginway: "PL",
                                autoLogin: n.autoLogin
                            }).done(function (t) {
                                o.hide(),
                                    y(t, n, e(".modulein1 .errMsgresErr"))
                            }).fail(function () {
                                o.hide(),
                                    e(".modulein1 .errMsgresErr").addClass("in").html("请稍后重试")
                            })))
            }
            ,
            v.loginByMes = function (t) {
                v.clearMsg();
                var t = {};
                t.phone = e(".modulein2 .contactphone").val(),
                    t.scode = e(".modulein2 .contactscode").val(),
                    t.autoLogin = e(".modulein2 .contactautoLogin").is(":checked");
                var i = m(t, 2);
                return i.phone ? (e(".modulein2 .contactphone").addClass("input_err"),
                    void e(".modulein2 .errMsgphone").addClass("in").html(i.phone)) : i.scode ? (e(".modulein2 .contactscode").addClass("input_err"),
                        void e(".modulein2 .errMsgscode").addClass("in").html(i.scode)) : void (i.phone || i.scode || (o.show(),
                            c.cd_login({
                                mobile: t.phone,
                                smsCode: t.scode,
                                loginway: "VCL"
                            }).then(function (i) {
                                o.hide(),
                                    y(i, t, e(".modulein2 .errMsgmesLoginErr"))
                            }).fail(function () {
                                o.hide(),
                                    e(".modulein2 .errMsgmesLoginErr").addClass("in").html("请稍后重试")
                            })))
            }
            ,
            v.changeCurrent = function (t) {
                switch (t) {
                    case 1:
                        e("#loginObjTitle").text("账号密码登录");
                        break;
                    case 2:
                        e("#loginObjTitle").text("短信验证码登录");
                        break;
                    case 3:
                        e("#loginObjTitle").text("免费注册")
                }
                v.clearMsg();
                var i = e(".loginState").val()
                    , s = (h(i),
                        h(t));
                if (g(s),
                    e(".module").removeClass("in").filter(".module" + t).addClass("in"),
                    1 == t || 2 == t) {
                    var a = e(".modulein").filter(".modulein" + i).find(".contactphone").val();
                    e(".modulein").removeClass("in").filter(".modulein" + t).addClass("in").find(".contactphone").val(a),
                        e(".modulebtn").removeClass("currentItem").filter(".modulebtn" + t).addClass("currentItem")
                }
                e(".loginState").val(t)
            }
            ,
            t.loginObj = v,
            v
    }),
    define("util/header", ["window", "jquery", "util/common", "util/query", "util/UserManage", "util/liveSearch", "lib/platform", "modal/login"], function (t, e, i, s, a, n, o, r) {
        if (t.header)
            return t.header;
        var c = {};
        return c.changeSearchTab = function (t, i) {
            e(".head-tab").removeClass("active"),
                e(".head-tab-body").attr("class", "head-tab-body head-tab-" + i),
                e(".head-tab-body .input-group").hide(),
                e(".head-search-group-" + i).show(),
                "company" == i ? (e(".head-tab-c").addClass("active"),
                    setTimeout(function () {
                        e("#header-company-search").val(e("#header-human-search").val()).focus()
                    }, 0)) : "human" == i && (e(".head-tab-h").addClass("active"),
                        setTimeout(function () {
                            e("#header-human-search").val(e("#header-company-search").val()).focus()
                        }, 0))
        }
            ,
            c.mouseShowById = function (t) {
                e(t).show()
            }
            ,
            c.mouseHideById = function (t) {
                e(t).hide()
            }
            ,
            c.mouseMediaShowById = function (t) {
                e(t).show()
            }
            ,
            c.mouseMediaHideById = function (t) {
                e(t).hide()
            }
            ,
            c.loginLink = function () {
                "/login" !== t.location.pathname && r.showLoginModal({
                    loginUrl: t.location.href
                })
            }
            ,
            c.toVip = function () {
                t.open("/vip")
            }
            ,
            c.host = t.location.host,
            c.backToHome = function () {
                /tianyancha/.test(c.host) && !/test/.test(host) ? t.location.href = t.serverDomain : t.location.href = "/"
            }
            ,
            c.jumpToPath = function () {
                t.open("/relation")
            }
            ,
            c.loginout = function () {
                s.userLogout().then(function () {
                    a.logout(),
                        t.location.href = "/"
                }, function () {
                    a.logout(),
                        t.location.href = "/"
                })
            }
            ,
            c.search = function (s, a) {
                var n;
                if (n = a ? e(a).val() : e("#live-search").val(),
                    n = i.formatAndFilterUrl(n)) {
                    if (/https/.test(n) && (n = n.split("https")[1]),
                        /http/.test(n) && (n = n.split("http")[1]),
                        c.stype) {
                        var o = "/search/t" + c.stype + "?key=" + encodeURIComponent(n);
                        return void (t.location.href = o)
                    }
                    if (/tianyancha/.test(c.host) && !/test/.test(c.host)) {
                        var o = t.serverDomain + "/search?key=" + encodeURIComponent(n);
                        t.location.href = o
                    } else {
                        var o = c.searchType ? "/" + c.searchType + "/" + encodeURIComponent(n) : "/search?key=" + encodeURIComponent(n);
                        t.location.href = o
                    }
                } else
                    s && (e(a).addClass("active-input"),
                        setTimeout(function () {
                            e(a).removeClass("active-input")
                        }, 300))
            }
            ,
            c.stopSubmit = function (s, a, n) {
                s || (s = t.event),
                    s && (s.preventDefault ? s.preventDefault() : s.returnValue = !1);
                var o;
                if (o = n ? e(n).val() : e("#live-search").val(),
                    o = i.formatAndFilterUrl(o),
                    document.all,
                    o) {
                    if (o = o.replace(/http(s)*:(\/\/)*/, ""),
                        c.stype)
                        return t.location.href = "/search/t" + c.stype + "?key=" + encodeURIComponent(o),
                            !1;
                    if (/tianyancha/.test(c.host) && !/test/.test(c.host)) {
                        var r = t.serverDomain + "/search?key=" + encodeURIComponent(o);
                        return t.location.href = r,
                            !1
                    }
                    var r = c.searchType ? "/" + c.searchType + "/" + encodeURIComponent(o) : "/search?key=" + encodeURIComponent(o);
                    return t.location.href = r,
                        !1
                }
                return !1
            }
            ,
            c.clearKey = function (i, s, a) {
                i = i || t.event,
                    e(s).val("").focus(),
                    a && e(a).addClass("hidden")
            }
            ,
            c.focuskey = function (t) {
                e(t).show()
            }
            ,
            c.blurkey = function (t) {
                e(t).hide()
            }
            ,
            c.stopHumanSubmit = function (s, a, n) {
                s || (s = t.event),
                    s && (s.preventDefault ? s.preventDefault() : s.returnValue = !1);
                var o = !1;
                if (e(n).parent().find(".searchresultspopup li.selected").length && !e(n).parent().find(".searchresultspopup").hasClass("hidden")) {
                    if (!e(n).parent().find(".searchresultspopup li.selected").hasClass("human-suggest-bottom"))
                        return;
                    o = !0
                }
                var r;
                r = n ? e(n).val() : e("#searchInputHuman").val(),
                    (r = i.formatAndFilterUrl(r)) && (r = r.replace(/http(s)*:(\/\/)*/, ""));
                var c = "/humansearch/" + encodeURIComponent(r);
                return r && (o ? t.open(c) : t.location.href = c),
                    !1
            }
            ,
            c.searchHuman = function (s, a, n) {
                var o;
                o = n ? e(n).val() : e("#searchInputHuman").val(),
                    o = i.formatAndFilterUrl(o);
                var r = "/humansearch/" + encodeURIComponent(o);
                o && (t.location.href = r)
            }
            ,
            c.liveSearchCb = function (e, i, s) {
                s || t.open("/company/" + e)
            }
            ,
            c.suggestToCompany = function (e) {
                e.id && t.open(t.serverDomain + "/company/" + e.id, "_blank")
            }
            ,
            c.suggestToHuman = function (e) {
                e.cid && e.hid && t.open(t.serverDomain + "/human/" + e.hid + "-c" + e.cid)
            }
            ,
            c.mobileStopSubmit = function (s) {
                s || (s = t.event),
                    s && (s.preventDefault ? s.preventDefault() : s.returnValue = !1);
                var a = e("#live-search").val();
                if (a = i.formatAndFilterUrl(a),
                    document.all,
                    a) {
                    if (a = a.replace(/http(s)*:(\/\/)*/, ""),
                        /tianyancha/.test(c.host) && !/test/.test(c.host))
                        var n = t.serverDomain + "/search?key=" + encodeURIComponent(a);
                    else
                        var n = c.searchType ? "/" + c.searchType + "/" + encodeURIComponent(a) : "/search?key=" + encodeURIComponent(a);
                    t.location.href = n
                }
                return !1
            }
            ,
            c.mobileSearch = function (s) {
                s || (s = t.event),
                    s && (s.preventDefault ? s.preventDefault() : s.returnValue = !1);
                var a = e("#live-search").val();
                if (a = i.formatAndFilterUrl(a),
                    document.all,
                    a) {
                    if (a = a.replace(/http(s)*:(\/\/)*/, ""),
                        /tianyancha/.test(c.host) && !/test/.test(c.host))
                        var n = t.serverDomain + "/search?key=" + encodeURIComponent(a);
                    else
                        var n = c.searchType ? "/" + c.searchType + "/" + encodeURIComponent(a) : "/search?key=" + encodeURIComponent(a);
                    t.location.href = n
                }
                return !1
            }
            ,
            e(function () {
                "IE" === o.name && parseInt(o.version)
            }),
            t.header = c,
            c
    }),
    define("modal/complain", ["window", "jquery", "util/modal", "util/query"], function (t, e, i, s) {
        if (t.complain)
            return t.complain;
        var a = {};
        return a.contact = {},
            a.firmInFocus = !0,
            a.CompliantInFocus = !0,
            a.mailInFocus = !0,
            a.items = {
                "read": {
                    title: "您好,请认真阅读以下说明后点击“下一步”",
                    inner: '<h4 class="text-center">Ｑ＆Ａ</h4><h5>1、\t天眼查的数据从哪里得来？</h5><p>天眼查数据来源于工商总局建立的全国企业信用信息系统、最高人民法院建立的裁判文书网、商标局及专利局等公开合法渠道获得相关信息，天眼查仅对该信息加以展示。</p><h5>2、\t天眼查展示的信息是否都是最新的信息。</h5><p>天眼查展示信息其抓取时间以明确方式展示在相应页面之中，如果您对该信息时效性有异议可以尝试点击立即更新按钮，如果更新后信息仍然滞后，则请联系信息发布网站，天眼查仅作为信息展示方，对信息与页面注明时间公开渠道信息保持一致。</p><h5>3、\t天眼查的数据为什么没有侵犯隐私或商业秘密？</h5><p>公开数据的使用由于其公开性，不是隐私与秘密。天眼查坚持用公开守护公正理念的同时也十分注重对隐私及秘密保护，因此天眼查从未使用或获取非法渠道的数据信息，详情请参考天眼查页面内“免责声明”一节。</p><h5>4、\t如果天眼查展示的信息和真实情况不符，怎么解决？</h5><p>天眼查作为数据搜索和展示工具，无法保证该数据与真实情形保持一致，如果该信息有误，请及时联系信息发布者，如果您有足以证明该信息与真实情况不同，请将完整有效的书面权利声明及相关权利证明文件以书面形式邮寄至我司。该权利声明要求请参见天眼查网页左下方“权利通知”一节。<br/>地址：北京市海淀区中关村东路1号院8号启迪科技大厦C座705<br/>收件人：金堤科技法务部（收）</p><h5>5、\t为什么使用搜狗或百度等搜索引擎搜索我们公司名字会在前几个结果中出现你们的连接？</h5><p>各种搜索引擎都具有自己的搜索结果排序机制，这一点我们无法左右，如果您对该内容有异议，请联系该搜索服务提供商。</p><h5>6、\t是否可以通过收费来删除或修改部分信息？</h5><p>我们目前没有对信息内容的编辑开放收费服务，同时也不会采取对客观信息的故意删改的行为而获取任何不正当利益。</p><h5>7、\t如果发现了一个网页bug或其他问题，如何反馈？</h5><p>您可以在相关公司信息网页上方点击“信息反馈”，通过您的留言就将被我们获得。</p><h5>8、\t我们希望和天眼查进行商务合作，怎么联系你们？</h5><p>您可以拨打我们的客服电话，然后按照语音提示操作。<br/>客服电话：400-871-6266</p>'
                },
                "info": {
                    title: "请完整填写相关信息"
                },
                "feedback": {
                    title: "提交完成",
                    inner: "我们将在收到您的投诉信息后，综合考虑各种情况，妥善处理相关事宜。"
                }
            },
            a.state = "read",
            a.title = a.items[a.state].title,
            a.item = a.items[a.state],
            a.total = 15,
            a.btnContent = "阅读完毕后可进行下一步(15s)",
            a.codedisabled = !0,
            a.cancel = function () {
                i.close(),
                    a.timer && (clearInterval(a.timer),
                        a.timer = null,
                        a.total = 15)
            }
            ,
            a.changeState = function (t) {
                "info" == t && a.codedisabled || e(".complaintItem").removeClass("in").filter(".complaintItem" + t).addClass("in")
            }
            ,
            a.stopSubmit = function (e, i) {
                document.all ? t.event.returnValue = !1 : e.preventDefault()
            }
            ,
            a.focusinput = function (t) {
                e("." + t).hide(),
                    "contactemail" == t && e(".contactemailerr").hide()
            }
            ,
            a.blurinput = function (t) {
                e("#" + t).val() ? "contactemail" == t && -1 == e("#contactemail").val().search(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/) && e(".contactemailerr").show() : e("." + t).show()
            }
            ,
            a.submitAll = function () {
                return a.contact = {},
                    a.contact.firm = e("#contactfirm").val(),
                    a.contact.content = e("#contactcontent").val(),
                    a.contact.name = e("#contactuserinput").val(),
                    a.contact.mobile = e("#contactuserphone").val(),
                    a.contact.email = e("#contactemail").val(),
                    a.contact.address = e("#contactuseraddress").val(),
                    a.contact.firm ? a.contact.content ? a.contact.email ? -1 == a.contact.email.search(/^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/) ? void e(".contactemailerr").show() : void s.footer_complaint({
                        companyName: a.contact.firm,
                        content: a.contact.content,
                        contactName: a.contact.name,
                        contact: (a.contact.mobile ? a.contact.mobile + "    " : "") + (a.contact.email ? a.contact.email + "    " : "") + (a.contact.address ? a.contact.address + "    " : "")
                    }).then(function (t) {
                        a.changeState("feedback")
                    }).fail(function () {
                        a.changeState("feedback")
                    }) : void e(".contactemail").show() : void e(".contactcontent").show() : void e(".contactfirm").show()
            }
            ,
            a.startInterval = function () {
                a.timer = setInterval(function () {
                    a.total-- ,
                        e(".complaintItemBtn").html("阅读完毕后可进行下一步(" + a.total + "s)"),
                        1 == a.total && (clearInterval(a.timer),
                            a.timer = null,
                            a.total = 15,
                            a.codedisabled = !1,
                            e(".complaintItemBtn").html("下一步").attr("class", "active"))
                }, 1e3)
            }
            ,
            a
    }),
    define("util/footer", ["window", "jquery", "modal/complain", "templates", "util/modal"], function (t, e, i, s, a) {
        if (t.footer)
            return t.footer;
        var n = {};
        return n.complain = i,
            n.openComplaint = function () {
                var t = s.render("complaintContent", {
                    items: {
                        "read": {
                            title: "您好,请认真阅读以下说明后点击“下一步”",
                            inner: '<h4 class="text-center">Ｑ＆Ａ</h4><h5>1、\t天眼查的数据从哪里得来？</h5><p>天眼查数据来源于工商总局建立的全国企业信用信息系统、最高人民法院建立的裁判文书网、商标局及专利局等公开合法渠道获得相关信息，天眼查仅对该信息加以展示。</p><h5>2、\t天眼查展示的信息是否都是最新的信息。</h5><p>天眼查展示信息其抓取时间以明确方式展示在相应页面之中，如果您对该信息时效性有异议可以尝试点击立即更新按钮，如果更新后信息仍然滞后，则请联系信息发布网站，天眼查仅作为信息展示方，对信息与页面注明时间公开渠道信息保持一致。</p><h5>3、\t天眼查的数据为什么没有侵犯隐私或商业秘密？</h5><p>公开数据的使用由于其公开性，不是隐私与秘密。天眼查坚持用公开守护公正理念的同时也十分注重对隐私及秘密保护，因此天眼查从未使用或获取非法渠道的数据信息，详情请参考天眼查页面内“免责声明”一节。</p><h5>4、\t如果天眼查展示的信息和真实情况不符，怎么解决？</h5><p>天眼查作为数据搜索和展示工具，无法保证该数据与真实情形保持一致，如果该信息有误，请及时联系信息发布者，如果您有足以证明该信息与真实情况不同，请将完整有效的书面权利声明及相关权利证明文件以书面形式邮寄至我司。该权利声明要求请参见天眼查网页左下方“权利通知”一节。<br/>地址：北京市海淀区知春路63号中国卫星通信大厦B座23层<br/>收件人：金堤科技法务部（收）</p><h5>5、\t为什么使用搜狗或百度等搜索引擎搜索我们公司名字会在前几个结果中出现你们的连接？</h5><p>各种搜索引擎都具有自己的搜索结果排序机制，这一点我们无法左右，如果您对该内容有异议，请联系该搜索服务提供商。</p><h5>6、\t是否可以通过收费来删除或修改部分信息？</h5><p>我们目前没有对信息内容的编辑开放收费服务，同时也不会采取对客观信息的故意删改的行为而获取任何不正当利益。</p><h5>7、\t如果发现了一个网页bug或其他问题，如何反馈？</h5><p>您可以在相关公司信息网页上方点击“信息反馈”，通过您的留言就将被我们获得。</p><h5>8、\t我们希望和天眼查进行商务合作，怎么联系你们？</h5><p>您可以拨打我们的客服电话，然后按照语音提示操作。<br/>客服电话：400-871-6266</p>'
                        },
                        "info": {
                            title: "请完整填写相关信息"
                        },
                        "feedback": {
                            title: "提交完成",
                            inner: "我们将在收到您的投诉信息后，综合考虑各种情况，妥善处理相关事宜。"
                        }
                    },
                    checkData: function (t) {
                        return t && "undefined" != t && "null" != t && "false" != t && " " != t ? t : " "
                    },
                    initTime: function (t) {
                        return moment(parseInt(t)).format("YYYY-MM-DD")
                    }
                });
                a.openByElementStr(t, null, function () {
                    i.startInterval()
                })
            }
            ,
            t.footer = n,
            n
    }),
    define("util/backToTop", ["window", "jquery", "util/modal", "util/ejs", "util/query", "util/loading"], function (t, e, i, s, a, n) {
        if (t.backToTop)
            return t.backToTop;
        var o = {};
        return o.backToTop = function () {
            e("html, body").animate({
                scrollTop: 0
            }, 200)
        }
            ,
            o.feedback = function () {
                var t = s.render("feedback", {});
                i.openByElementStr(t)
            }
            ,
            o.toApp = function () {
                location.href = "/vip"
            }
            ,
            o.feedbackSubmit = function () {
                if (!e(".feedback-boxs").hasClass("active_feedback"))
                    return e(".errType").removeClass("collapse");
                var t = {};
                return t.content = e(".feedBackcontent").val(),
                    t.email = e(".feedBackemail").val(),
                    t.content ? t.email ? (n.show(),
                        void a.Index_receiveFeedback(t.content, t.email).then(function (t) {
                            n.hide(),
                                i.close()
                        })) : e(".errContact").removeClass("collapse") : e(".errContent").removeClass("collapse")
            }
            ,
            o.clearErr = function (t) {
                e(t).addClass("collapse")
            }
            ,
            o.changeActiveCheck = function (t, i) {
                o.clearErr(".errType"),
                    e(i).addClass("active_feedback").siblings().removeClass("active_feedback")
            }
            ,
            t.backToTop = o,
            o
    }),
    define("st", ["window", "jquery"], function (t, e) {
        var i = t
            , s = i.document
            , a = i.location
            , n = {
                server: "https://pvst.tianyancha.com/p1.gif",
                cookiePrefix: "sqstat_",
                imgArr: [],
                cookie: "",
                query: "",
                hostname: a.hostname,
                referrer: s.referrer,
                domain: "",
                cookieInfo: {},
                queryInfo: {},
                divHandlers: [],
                data: {},
                gatherTypes: {
                    ss_c: "div"
                },
                groupTypes: {
                    ch: "ch",
                    pid: "pid"
                },
                persistentTypes: {
                    pid: {
                        entr: "ss_pidf"
                    },
                    cid: {
                        entr: "ss_cidf"
                    }
                },
                cookieParam: ["ssuid", "pid", "cid", "ss_pidf", "ss_cidf"],
                kvSplit: function (t, e, i) {
                    if ("string" != typeof t || "" === t)
                        return {};
                    e = e || "&",
                        i = i || "=";
                    for (var s = {}, a = t.split(e), n = 0; n < a.length; ++n)
                        if (0 != a[n].length) {
                            var o = a[n]
                                , r = o.indexOf(i);
                            if (!(r < 0)) {
                                var c = o.substring(0, r)
                                    , l = o.substring(r + i.length);
                                s[c] = l
                            }
                        }
                    return s
                },
                getDomain: function (t) {
                    if (void 0 === t && this.domain)
                        return this.domain;
                    void 0 === t && (t = this.hostname);
                    var e = t.split(".");
                    return e[e.length - 1].match(/^\d+$/) ? domain = t : domain = e.slice(-2).join("."),
                        t === this.hostname && (this.domain = domain),
                        domain
                },
                getCookie: function (t) {
                    return s.cookie !== this.cookie && (this.cookie = s.cookie,
                        this.cookieInfo = this.kvSplit(s.cookie, "; ")),
                        this.cookieInfo[t] ? decodeURIComponent(this.cookieInfo[t]) : this.cookieInfo[t]
                },
                getQuery: function (t) {
                    return a.search !== this.query && (this.query = a.search,
                        this.queryInfo = this.kvSplit(a.search.substring(1))),
                        this.queryInfo[t]
                },
                setCookie: function (t, e, i, a, n) {
                    a = a || "/",
                        n = n || this.getDomain();
                    var o = t + "=" + encodeURIComponent(e) + (i || 0 === i ? "; expires=" + function (t) {
                        var e = new Date;
                        return "unlimited" == t ? e.setFullYear(2038, 0, 1) : "number" == typeof t && (t <= 0 ? e.setFullYear(1970, 1, 1) : e.setTime(e.getTime() + 1e3 * t)),
                            e.toGMTString()
                    }(i) : "") + (a ? ";path=" + a : "") + (n ? ";domain=" + n : "");
                    s.cookie = o
                },
                delCookie: function (t, e, i) {
                    this.setCookie(t, "", 0, e, i)
                },
                loopDivs: function () {
                    for (var t = s.getElementsByTagName("div"), e = 0; e < t.length; ++e)
                        for (var i = 0; i < this.divHandlers.length; ++i)
                            this.divHandlers[i](t[e])
                },
                regDivHandler: function (t) {
                    this.divHandlers.push(t)
                },
                regDivHandlers: function () {
                    for (var t in this.gatherTypes)
                        this.regDivHandler(this.getGatherFunc(t));
                    for (var t in this.groupTypes)
                        this.regDivHandler(this.getGroupFunc(t))
                },
                getGatherFunc: function (t, e) {
                    var e = e || "^"
                        , i = this.data;
                    return function (s) {
                        var a = s.getAttribute(t);
                        a && (i[t] = void 0 === i[t] ? "" : i[t],
                            i[t] += ("" === i[t] ? "" : e) + a)
                    }
                },
                getGroupFunc: function (t, e) {
                    var e = e || this.getDomain()
                        , i = this;
                    return function (s) {
                        var a = s.getAttribute(t);
                        if (a)
                            for (var n = t + "=" + a, o = s.getElementsByTagName("a"), r = RegExp("[&?]" + t + "="), c = 0; c < o.length; ++c)
                                if (url = o[c],
                                    i.getDomain(url.hostname) == e) {
                                    if (r.test(url.search))
                                        continue;
                                    url.href = " " + url.href + (url.search ? "&" : "?") + n
                                }
                    }
                },
                genSsuid: function () {
                    return Math.round(2147483647 * Math.random()) * (new Date).getUTCMilliseconds() % 1e10
                },
                getMobile: function () {
                    var e = n.getCookie("tyc-user-info")
                        , i = null;
                    try {
                        i = JSON.parse(t.decodeURIComponent(e))
                    } catch (t) {
                        return
                    }
                    return i ? i.mobile : ""
                },
                submit: function (t, e) {
                    e = e || this.server;
                    var i = "";
                    void 0 !== t.ref && (i = "ref=" + t.ref,
                        delete t.ref);
                    for (var s in t)
                        i += (i ? "&" : "") + s + "=" + t[s];
                    i += (i ? "&" : "") + "rand=" + Math.random();
                    var a = e + "?" + i
                        , n = new Image
                        , o = this.imgArr.push(n)
                        , r = this.imgArr;
                    n.onload = n.onerror = function () {
                        r[o - 1] = null
                    }
                        ,
                        n.src = a,
                        n = null
                },
                setPersistentParams: function () {
                    for (var t in this.persistentTypes) {
                        var e = this.persistentTypes[t]
                            , i = e.entr || this.cookiePrefix + t + "_f"
                            , s = this.getQuery(t);
                        s ? s == this.getCookie(t) ? this.setCookie(i, "1") : (this.delCookie(i),
                            this.setCookie(t, s)) : this.getCookie(t) && this.setCookie(i, "1")
                    }
                },
                run: function (t) {
                    "object" != typeof t && (t = {}),
                        this.setPersistentParams(),
                        this.regDivHandlers(),
                        this.loopDivs(),
                        this.getCookie("ssuid") || this.setCookie("ssuid", this.genSsuid(), "unlimited"),
                        t.ver = 1,
                        t.ref = encodeURIComponent(this.referrer);
                    for (var e in this.gatherTypes) {
                        var i = this.gatherTypes[e];
                        this.data[e] && (t[i] = this.data[e])
                    }
                    for (var s = 0; s < this.cookieParam.length; s++) {
                        var a = this.cookieParam[s];
                        t[a] = this.getCookie(a)
                    }
                    t.mobi = this.getMobile(),
                        this.submit(t)
                },
                stget: function (e, i, s) {
                    n.getCookie("ssuid") || n.setCookie("ssuid", n.genSsuid(), "unlimited");
                    var i = i || "person"
                        , s = s || ""
                        , a = {
                            srctype: "getsret",
                            lurl: escape(t.location),
                            ch: e,
                            sc: i,
                            ourl: escape(s),
                            ssuid: n.getCookie("ssuid"),
                            mobi: n.getMobile()
                        };
                    n.submit(a, "https://clkst.tianyancha.com/pingd")
                }
            };
        return t.__tycstat = n,
            t.stget = n.stget,
            e("body").off("click.tycEvent"),
            e("body").on("click.tycEvent", "[tyc-event-href],[tyc-event-click]", function () {
                var t = e(this)
                    , i = t.attr("tyc-event-ch")
                    , s = t.attr("tyc-event-sc")
                    , a = t.attr("tyc-event-ourl");
                i && n.stget(i, s, a)
            }),
            n.run(),
            n
    }),
    define("util/search.sync", ["window", "jquery", "util/query"], function (t, e, i) {
        if (t.TYC_UI || (t.TYC_UI = {}),
            t.searchSync)
            return t.searchSync;
        var s = function (t) {
            if (!t)
                return null;
            if (t = decodeURIComponent(t),
                t.indexOf("searchSync") > -1)
                try {
                    return t = JSON.parse(t)
                } catch (t) {
                    return null
                }
        }
            , a = function () {
                this.timer = null,
                    this.history = t.history,
                    t.onpopstate = function (t) {
                        var e = t.state;
                        e && (e = s(e))
                    }
                    ;
                var i = this;
                e(t).on("scroll", function () {
                    i._pushState()
                }),
                    e(t).on("click", function () {
                        i._pushState()
                    })
            }
            , n = a.prototype;
        n._pushState = function () {
            var e = this;
            e.doneState && this.history.state !== e.doneState && (t.location.href = e.doneUrl,
                e.doneState = null,
                e.doneTitle = null,
                e.doneUrl = null)
        }
            ,
            n.pushState = function (t, e, i) {
                var s = this;
                s.doneState = t,
                    s.doneTitle = e,
                    s.doneUrl = i
            }
            ;
        var o = (new a,
            {});
        return t.searchSync = o,
            o.eventTrigger = function (t) {
                return
            }
            ,
            e(function () { }),
            o
    }),
    define("layout/main", ["window", "jquery", "util/ejs", "util/modal", "util/loading", "util/header", "util/footer", "util/common", "util/backToTop", "util/banner", "util/bannerMobile", "st", "util/jweixin", "util/query", "util/search.sync"], function (t, e, i, s, a, n, o, r, c, l, d, p, u, v) {
        var m = RegExp("MSIE (\\d+\\.\\d+);").test(t.navigator.userAgent) || "ActiveXObject" in t;
        if (t.layout)
            return t.layout;
        var h = function (e, i, s) {
            var a = i
                , n = null;
            n = s || e + " " + i;
            var o = {
                title: e,
                desc: a,
                link: t.location.href,
                imgUrl: "https://static.tianyancha.com/wap/images/18blue/weixinlogo.png"
            };
            u.onMenuShareAppMessage({
                title: o.title,
                desc: o.desc,
                link: o.link,
                imgUrl: o.imgUrl,
                trigger: function () { },
                success: function () { },
                cancel: function () { },
                fail: function () { }
            }),
                u.onMenuShareTimeline({
                    title: n,
                    desc: o.desc,
                    link: o.link,
                    imgUrl: o.imgUrl,
                    trigger: function () { },
                    success: function () { },
                    cancel: function () { },
                    fail: function () { }
                }),
                u.onMenuShareQQ({
                    title: o.title,
                    desc: o.desc,
                    link: o.link,
                    imgUrl: o.imgUrl,
                    trigger: function () { },
                    complete: function () { },
                    success: function () { },
                    cancel: function () { },
                    fail: function () { }
                })
        };
        t.weixinConfig = function () {
            var e = ""
                , i = "";
            try {
                e = document.getElementsByTagName("meta")["tyc-wx-type"].content,
                    i = document.getElementsByTagName("meta")["tyc-wx-name"].content
            } catch (t) { }
            var s = ""
                , a = ""
                , n = null;
            "company" == e ? (s = "我在天眼查发现了它更多的信息，点击查看。",
                a = i) : "hotNews" == e ? (s = i,
                    a = i) : "human" == e ? (s = "我在天眼查发现" + i + "还投资那么多公司，点击查看",
                        a = "天眼查：方便快捷的企业查询") : "news" == e ? (s = "天眼查提前六天就知道了万宝大战的结局，你想知道怎么办到的么？",
                            a = "天眼查之万宝大战",
                            n = "万宝大战：天眼查® 洞察华润万科宝能内幕") : "shareinvite" == e ? (s = "点击领取邀请现金，同享“荐”面礼！天眼查VIP全面了解企业信息，一起公平看清世界",
                                a = "好友推荐您一起体验天眼查") : "cha815" == e ? (s = "天眼查VIP全面了解企业信息，一起公平看清世界",
                                    a = "中秋得好礼，大家来找Cha") : (s = "方便快捷的企业工商数据查询，点击查看。",
                                        a = "天眼查：方便快捷的企业查询"),
                v.getWeixinJsSdkConfig(t.location.href).then(function (t) {
                    m || (u.config({
                        debug: !1,
                        appId: t.data.appId,
                        timestamp: t.data.timestamp,
                        nonceStr: t.data.nonceStr,
                        signature: t.data.signature,
                        jsApiList: ["onMenuShareTimeline", "onMenuShareAppMessage", "onMenuShareQQ"]
                    }),
                        u.ready(function () {
                            n ? h(a, s, n) : h(a, s)
                        }))
                })
        }
            ,
            t.weixinConfig();
        var f = {};
        return v.sendPV((t.location.pathname || "") + (t.location.search || "")).then(function () { }),
            t.onerror = function (t) {
                console.log(t)
            }
            ,
            t.layout = f,
            f
    }),
    define("util/mainNews", ["window", "jquery", "util/query"], function (t, e, i) {
        var s = []
            , a = 0
            , n = 1
            , o = 0;
        i.Index_getNewest(40).then(function (t) {
            "ok" == t.state && (s = t.data,
                a = t.data.length,
                o = Math.ceil(a / 8))
        });
        var r = function (t) {
            var e = 8 * (t - 1)
                , i = 8 * t;
            return s.slice(e, i)
        };
        e("body");
        if (t.TYC_UI || (t.TYC_UI = {}),
            t.TYC_UI.NEWS)
            return t.TYC_UI.NEWS;
        t.TYC_UI.NEWS = {};
        var c = function (t) {
            for (var i = e(".js-newest-template"), s = 0; s < 8; s++) {
                var a = e(".js-href")[s]
                    , n = e(".js-hw-title")[s]
                    , o = e(".js-hot-news-img")[s]
                    , r = e(".js-source")[s]
                    , c = e(".js-keywords")[s];
                i.find(a).attr("href", "https://www.tianyancha.com/hotnews/" + t[s].id),
                    i.find(o).attr("src", t[s].picUrl).attr("alt", t[s].title),
                    i.find(n).text(t[s].title ? t[s].title : "文章标题"),
                    i.find(r).text(t[s].source ? t[s].source : "来源"),
                    i.find(c).text(t[s].keywords ? t[s].keywords : "发布时间")
            }
        }
            , l = function (t) {
                1 == t ? e(".js-left-arrow").addClass("left-img-dis").removeClass("left-img") : e(".js-left-arrow").addClass("left-img").removeClass("left-img-dis"),
                    t == o ? e(".js-right-arrow").addClass("right-img-dis").removeClass("right-img") : e(".js-right-arrow").addClass("right-img").removeClass("right-img-dis")
            };
        e.news = function (t) {
            var i = [];
            e(".js-left-arrow").on("click", function () {
                n > 1 && (n-- ,
                    l(n),
                    i = r(n),
                    c(i))
            }),
                e(".js-right-arrow").on("click", function () {
                    n < o && (n++ ,
                        l(n),
                        i = r(n),
                        c(i))
                })
        }
            ,
            e(function () {
                e.news()
            })
    }),
    define("util/bannerBd", ["jquery", "Cookies"], function (t, e) {
        t("body");
        this.TYC_UI || (this.TYC_UI = {});
        var i = this.TYC_UI.BANNERBd;
        i || (i = this.TYC_UI.BANNERBd = {});
        var s = "<div id='bannerFooterID' class='bannerBottom0714' alt='app下载'><img id='bannerBdDownload' src='https://static.tianyancha.com/wap/images/smsBanner1.png' style='width:100%;'></div>"
            , a = function () {
                var t = navigator.userAgent;
                if (/iphone/i.test(t)) {
                    if (/MicroMessenger/i.test(t))
                        return void (location.href = "http://a.app.qq.com/o/simple.jsp?pkgname=com.tianyancha.skyeye");
                    location.href = "http://itunes.apple.com/us/app/id1048918751"
                }
                /android/i.test(t) && (/MicroMessenger/.test(t) ? window.location.href = "http://app.qq.com/#id=detail&appid=1105276262" : window.location.href = "http://static.tianyancha.com/android_download/tianyanchaBD.apk")
            }
            , n = function () {
                e.set("bannerFlag", !0),
                    t(".bottom-banner-bd")[0].innerHTML = "<img id='bannerLeftID' class='bannerLeft' alt='app下载'src='https://static.tianyancha.com/wap/images/banner-left-73.png'>",
                    r()
            }
            , o = function () {
                e.set("bannerFlag", !1),
                    t(".bottom-banner-bd")[0].innerHTML = s,
                    c()
            }
            , r = function () {
                t("#bannerLeftID").on("click", function () {
                    o()
                })
            }
            , c = function () {
                t("#bannerClose").on("click", function () {
                    n()
                })
            }
            , l = function () {
                t("#bannerBdDownload").on("click", a)
            };
        t.bannerBd = function (e) {
            e = e || {};
            t("#bannerBD")[0] && (t("#bannerBD").append(t("<div class='bottom-banner-bd' id='bdBanner2'></div>")),
                t("#bdBanner2")[0].innerHTML = s,
                c(),
                l())
        }
            ,
            t(function () {
                t.bannerBd()
            })
    }),
    define("util/vipcontent", ["window", "jquery", "util/modal", "util/ejs", "modal/login"], function (t, e, i, s, a) {
        var n = {};
        return n.changeActiveVipCheck = function (t) {
            e(t).parent().find(".vip_check_box").removeClass("vip_check_active").find(".iconhide").removeClass("in"),
                e(t).addClass("vip_check_active").find(".iconhide").addClass("in")
        }
            ,
            n.changeActivePopVipCheck = function (t) {
                e(t).parent().find(".vip_check_box").removeClass("vip_check_active").find(".iconhide").removeClass("in"),
                    e(t).addClass("vip_check_active").find(".iconhide").addClass("in"),
                    e(".vipEndPrice").text("¥" + e(t).find(".finalPrice").val())
            }
            ,
            n.showVip = function (t, e) {
                t = t || {},
                    e = e || {},
                    t.size = "vipcontent",
                    UserManage.logged() && (e.isLogin = !0);
                var a = s.render("vipContent", e);
                i.openByElementStr(a, t)
            }
            ,
            n.changeTab = function (i, s, n) {
                var o = e(i).parents(".vip_intro_box_body").find(".vip_check_active .vipstate").val()
                    , r = "/vipintro?useraction=" + o;
                return UserManage.logged() ? t.location.href = r : void (s ? a.showLoginModal({
                    loginUrl: r,
                    entertype: "vipintro",
                    enterUrl: s
                }) : n ? a.showLoginModal({
                    loginUrl: r,
                    entertype: "vipintro",
                    enterUrl: t.location.href
                }) : a.showLoginModal({
                    loginUrl: r
                }))
            }
            ,
            n.toLogin = function (e) {
                return UserManage.logged() ? t.location.reload(!0) : void a.showLoginModal({
                    loginUrl: e
                })
            }
            ,
            n.toLoginNow = function (e) {
                return UserManage.logged() ? t.location.reload(!0) : void a.showLoginModal({
                    loginUrl: e,
                    entertype: "vipintro",
                    enterUrl: t.location.href
                })
            }
            ,
            n.mainToLogin = function () {
                var i = e("._vip_pop_order .vip_check_active").find(".vipstate").val() || ""
                    , s = "/?useraction=" + i;
                return UserManage.logged() ? t.location.href = s : a.showLoginModal({
                    loginUrl: s
                })
            }
            ,
            n.toVip = function (e) {
                t.open("/vipintro")
            }
            ,
            n.toVipBtn = function (i) {
                var s = e(i).parents(".vipMask").find(".vip_check_active .vipstate").val()
                    , a = "/vipintro?useraction=" + s;
                return UserManage.logged() ? t.location.href = a : t.location.href = "/login?from=" + encodeURIComponent(a)
            }
            ,
            n.changeVipTab = function () {
                e(".vip_intro_box_body").hide(),
                    e(".vip_intro_box_body_tab2").show()
            }
            ,
            t.vipcontent = n,
            n
    }),
    QR8bitByte.prototype = {
        getLength: function (t) {
            return this.data.length
        },
        write: function (t) {
            for (var e = 0; e < this.data.length; e++)
                t.put(this.data.charCodeAt(e), 8)
        }
    },
    QRCode.prototype = {
        addData: function (t) {
            var e = new QR8bitByte(t);
            this.dataList.push(e),
                this.dataCache = null
        },
        isDark: function (t, e) {
            if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
                throw Error(t + "," + e);
            return this.modules[t][e]
        },
        getModuleCount: function () {
            return this.moduleCount
        },
        make: function () {
            if (this.typeNumber < 1) {
                var t = 1;
                for (t = 1; t < 40; t++) {
                    for (var e = QRRSBlock.getRSBlocks(t, this.errorCorrectLevel), i = new QRBitBuffer, s = 0, a = 0; a < e.length; a++)
                        s += e[a].dataCount;
                    for (var a = 0; a < this.dataList.length; a++) {
                        var n = this.dataList[a];
                        i.put(n.mode, 4),
                            i.put(n.getLength(), QRUtil.getLengthInBits(n.mode, t)),
                            n.write(i)
                    }
                    if (i.getLengthInBits() <= 8 * s)
                        break
                }
                this.typeNumber = t
            }
            this.makeImpl(!1, this.getBestMaskPattern())
        },
        makeImpl: function (t, e) {
            this.moduleCount = 4 * this.typeNumber + 17,
                this.modules = Array(this.moduleCount);
            for (var i = 0; i < this.moduleCount; i++) {
                this.modules[i] = Array(this.moduleCount);
                for (var s = 0; s < this.moduleCount; s++)
                    this.modules[i][s] = null
            }
            this.setupPositionProbePattern(0, 0),
                this.setupPositionProbePattern(this.moduleCount - 7, 0),
                this.setupPositionProbePattern(0, this.moduleCount - 7),
                this.setupPositionAdjustPattern(),
                this.setupTimingPattern(),
                this.setupTypeInfo(t, e),
                this.typeNumber >= 7 && this.setupTypeNumber(t),
                null == this.dataCache && (this.dataCache = QRCode.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)),
                this.mapData(this.dataCache, e)
        },
        setupPositionProbePattern: function (t, e) {
            for (var i = -1; i <= 7; i++)
                if (!(t + i <= -1 || this.moduleCount <= t + i))
                    for (var s = -1; s <= 7; s++)
                        e + s <= -1 || this.moduleCount <= e + s || (this.modules[t + i][e + s] = 0 <= i && i <= 6 && (0 == s || 6 == s) || 0 <= s && s <= 6 && (0 == i || 6 == i) || 2 <= i && i <= 4 && 2 <= s && s <= 4)
        },
        getBestMaskPattern: function () {
            for (var t = 0, e = 0, i = 0; i < 8; i++) {
                this.makeImpl(!0, i);
                var s = QRUtil.getLostPoint(this);
                (0 == i || t > s) && (t = s,
                    e = i)
            }
            return e
        },
        createMovieClip: function (t, e, i) {
            var s = t.createEmptyMovieClip(e, i);
            this.make();
            for (var a = 0; a < this.modules.length; a++)
                for (var n = 1 * a, o = 0; o < this.modules[a].length; o++) {
                    var r = 1 * o
                        , c = this.modules[a][o];
                    c && (s.beginFill(0, 100),
                        s.moveTo(r, n),
                        s.lineTo(r + 1, n),
                        s.lineTo(r + 1, n + 1),
                        s.lineTo(r, n + 1),
                        s.endFill())
                }
            return s
        },
        setupTimingPattern: function () {
            for (var t = 8; t < this.moduleCount - 8; t++)
                null == this.modules[t][6] && (this.modules[t][6] = t % 2 == 0);
            for (var e = 8; e < this.moduleCount - 8; e++)
                null == this.modules[6][e] && (this.modules[6][e] = e % 2 == 0)
        },
        setupPositionAdjustPattern: function () {
            for (var t = QRUtil.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
                for (var i = 0; i < t.length; i++) {
                    var s = t[e]
                        , a = t[i];
                    if (null == this.modules[s][a])
                        for (var n = -2; n <= 2; n++)
                            for (var o = -2; o <= 2; o++)
                                this.modules[s + n][a + o] = -2 == n || 2 == n || -2 == o || 2 == o || 0 == n && 0 == o
                }
        },
        setupTypeNumber: function (t) {
            for (var e = QRUtil.getBCHTypeNumber(this.typeNumber), i = 0; i < 18; i++) {
                var s = !t && 1 == (e >> i & 1);
                this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = s
            }
            for (var i = 0; i < 18; i++) {
                var s = !t && 1 == (e >> i & 1);
                this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = s
            }
        },
        setupTypeInfo: function (t, e) {
            for (var i = this.errorCorrectLevel << 3 | e, s = QRUtil.getBCHTypeInfo(i), a = 0; a < 15; a++) {
                var n = !t && 1 == (s >> a & 1);
                a < 6 ? this.modules[a][8] = n : a < 8 ? this.modules[a + 1][8] = n : this.modules[this.moduleCount - 15 + a][8] = n
            }
            for (var a = 0; a < 15; a++) {
                var n = !t && 1 == (s >> a & 1);
                a < 8 ? this.modules[8][this.moduleCount - a - 1] = n : a < 9 ? this.modules[8][15 - a - 1 + 1] = n : this.modules[8][15 - a - 1] = n
            }
            this.modules[this.moduleCount - 8][8] = !t
        },
        mapData: function (t, e) {
            for (var i = -1, s = this.moduleCount - 1, a = 7, n = 0, o = this.moduleCount - 1; o > 0; o -= 2)
                for (6 == o && o--; ;) {
                    for (var r = 0; r < 2; r++)
                        if (null == this.modules[s][o - r]) {
                            var c = !1;
                            n < t.length && (c = 1 == (t[n] >>> a & 1));
                            var l = QRUtil.getMask(e, s, o - r);
                            l && (c = !c),
                                this.modules[s][o - r] = c,
                                a-- ,
                                -1 == a && (n++ ,
                                    a = 7)
                        }
                    if ((s += i) < 0 || this.moduleCount <= s) {
                        s -= i,
                            i = -i;
                        break
                    }
                }
        }
    },
    QRCode.PAD0 = 236,
    QRCode.PAD1 = 17,
    QRCode.createData = function (t, e, i) {
        for (var s = QRRSBlock.getRSBlocks(t, e), a = new QRBitBuffer, n = 0; n < i.length; n++) {
            var o = i[n];
            a.put(o.mode, 4),
                a.put(o.getLength(), QRUtil.getLengthInBits(o.mode, t)),
                o.write(a)
        }
        for (var r = 0, n = 0; n < s.length; n++)
            r += s[n].dataCount;
        if (a.getLengthInBits() > 8 * r)
            throw Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * r + ")");
        for (a.getLengthInBits() + 4 <= 8 * r && a.put(0, 4); a.getLengthInBits() % 8 != 0;)
            a.putBit(!1);
        for (; ;) {
            if (a.getLengthInBits() >= 8 * r)
                break;
            if (a.put(QRCode.PAD0, 8),
                a.getLengthInBits() >= 8 * r)
                break;
            a.put(QRCode.PAD1, 8)
        }
        return QRCode.createBytes(a, s)
    }
    ,
    QRCode.createBytes = function (t, e) {
        for (var i = 0, s = 0, a = 0, n = Array(e.length), o = Array(e.length), r = 0; r < e.length; r++) {
            var c = e[r].dataCount
                , l = e[r].totalCount - c;
            s = Math.max(s, c),
                a = Math.max(a, l),
                n[r] = Array(c);
            for (var d = 0; d < n[r].length; d++)
                n[r][d] = 255 & t.buffer[d + i];
            i += c;
            var p = QRUtil.getErrorCorrectPolynomial(l)
                , u = new QRPolynomial(n[r], p.getLength() - 1)
                , v = u.mod(p);
            o[r] = Array(p.getLength() - 1);
            for (var d = 0; d < o[r].length; d++) {
                var m = d + v.getLength() - o[r].length;
                o[r][d] = m >= 0 ? v.get(m) : 0
            }
        }
        for (var h = 0, d = 0; d < e.length; d++)
            h += e[d].totalCount;
        for (var f = Array(h), g = 0, d = 0; d < s; d++)
            for (var r = 0; r < e.length; r++)
                d < n[r].length && (f[g++] = n[r][d]);
        for (var d = 0; d < a; d++)
            for (var r = 0; r < e.length; r++)
                d < o[r].length && (f[g++] = o[r][d]);
        return f
    }
    ;
for (var QRMode = {
    MODE_NUMBER: 1,
    MODE_ALPHA_NUM: 2,
    MODE_8BIT_BYTE: 4,
    MODE_KANJI: 8
}, QRErrorCorrectLevel = {
    L: 1,
    M: 0,
    Q: 3,
    H: 2
}, QRMaskPattern = {
    PATTERN000: 0,
    PATTERN001: 1,
    PATTERN010: 2,
    PATTERN011: 3,
    PATTERN100: 4,
    PATTERN101: 5,
    PATTERN110: 6,
    PATTERN111: 7
}, QRUtil = {
    PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]],
    G15: 1335,
    G18: 7973,
    G15_MASK: 21522,
    getBCHTypeInfo: function (t) {
        for (var e = t << 10; QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G15) >= 0;)
            e ^= QRUtil.G15 << QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G15);
        return (t << 10 | e) ^ QRUtil.G15_MASK
    },
    getBCHTypeNumber: function (t) {
        for (var e = t << 12; QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G18) >= 0;)
            e ^= QRUtil.G18 << QRUtil.getBCHDigit(e) - QRUtil.getBCHDigit(QRUtil.G18);
        return t << 12 | e
    },
    getBCHDigit: function (t) {
        for (var e = 0; 0 != t;)
            e++ ,
                t >>>= 1;
        return e
    },
    getPatternPosition: function (t) {
        return QRUtil.PATTERN_POSITION_TABLE[t - 1]
    },
    getMask: function (t, e, i) {
        switch (t) {
            case QRMaskPattern.PATTERN000:
                return (e + i) % 2 == 0;
            case QRMaskPattern.PATTERN001:
                return e % 2 == 0;
            case QRMaskPattern.PATTERN010:
                return i % 3 == 0;
            case QRMaskPattern.PATTERN011:
                return (e + i) % 3 == 0;
            case QRMaskPattern.PATTERN100:
                return (Math.floor(e / 2) + Math.floor(i / 3)) % 2 == 0;
            case QRMaskPattern.PATTERN101:
                return e * i % 2 + e * i % 3 == 0;
            case QRMaskPattern.PATTERN110:
                return (e * i % 2 + e * i % 3) % 2 == 0;
            case QRMaskPattern.PATTERN111:
                return (e * i % 3 + (e + i) % 2) % 2 == 0;
            default:
                throw Error("bad maskPattern:" + t)
        }
    },
    getErrorCorrectPolynomial: function (t) {
        for (var e = new QRPolynomial([1], 0), i = 0; i < t; i++)
            e = e.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
        return e
    },
    getLengthInBits: function (t, e) {
        if (1 <= e && e < 10)
            switch (t) {
                case QRMode.MODE_NUMBER:
                    return 10;
                case QRMode.MODE_ALPHA_NUM:
                    return 9;
                case QRMode.MODE_8BIT_BYTE:
                case QRMode.MODE_KANJI:
                    return 8;
                default:
                    throw Error("mode:" + t)
            }
        else if (e < 27)
            switch (t) {
                case QRMode.MODE_NUMBER:
                    return 12;
                case QRMode.MODE_ALPHA_NUM:
                    return 11;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 10;
                default:
                    throw Error("mode:" + t)
            }
        else {
            if (!(e < 41))
                throw Error("type:" + e);
            switch (t) {
                case QRMode.MODE_NUMBER:
                    return 14;
                case QRMode.MODE_ALPHA_NUM:
                    return 13;
                case QRMode.MODE_8BIT_BYTE:
                    return 16;
                case QRMode.MODE_KANJI:
                    return 12;
                default:
                    throw Error("mode:" + t)
            }
        }
    },
    getLostPoint: function (t) {
        for (var e = t.getModuleCount(), i = 0, s = 0; s < e; s++)
            for (var a = 0; a < e; a++) {
                for (var n = 0, o = t.isDark(s, a), r = -1; r <= 1; r++)
                    if (!(s + r < 0 || e <= s + r))
                        for (var c = -1; c <= 1; c++)
                            a + c < 0 || e <= a + c || 0 == r && 0 == c || o == t.isDark(s + r, a + c) && n++;
                n > 5 && (i += 3 + n - 5)
            }
        for (var s = 0; s < e - 1; s++)
            for (var a = 0; a < e - 1; a++) {
                var l = 0;
                t.isDark(s, a) && l++ ,
                    t.isDark(s + 1, a) && l++ ,
                    t.isDark(s, a + 1) && l++ ,
                    t.isDark(s + 1, a + 1) && l++ ,
                    0 != l && 4 != l || (i += 3)
            }
        for (var s = 0; s < e; s++)
            for (var a = 0; a < e - 6; a++)
                t.isDark(s, a) && !t.isDark(s, a + 1) && t.isDark(s, a + 2) && t.isDark(s, a + 3) && t.isDark(s, a + 4) && !t.isDark(s, a + 5) && t.isDark(s, a + 6) && (i += 40);
        for (var a = 0; a < e; a++)
            for (var s = 0; s < e - 6; s++)
                t.isDark(s, a) && !t.isDark(s + 1, a) && t.isDark(s + 2, a) && t.isDark(s + 3, a) && t.isDark(s + 4, a) && !t.isDark(s + 5, a) && t.isDark(s + 6, a) && (i += 40);
        for (var d = 0, a = 0; a < e; a++)
            for (var s = 0; s < e; s++)
                t.isDark(s, a) && d++;
        return i += Math.abs(100 * d / e / e - 50) / 5 * 10
    }
}, QRMath = {
    glog: function (t) {
        if (t < 1)
            throw Error("glog(" + t + ")");
        return QRMath.LOG_TABLE[t]
    },
    gexp: function (t) {
        for (; t < 0;)
            t += 255;
        for (; t >= 256;)
            t -= 255;
        return QRMath.EXP_TABLE[t]
    },
    EXP_TABLE: Array(256),
    LOG_TABLE: Array(256)
}, i = 0; i < 8; i++)
    QRMath.EXP_TABLE[i] = 1 << i;
for (var i = 8; i < 256; i++)
    QRMath.EXP_TABLE[i] = QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
for (var i = 0; i < 255; i++)
    QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
QRPolynomial.prototype = {
    get: function (t) {
        return this.num[t]
    },
    getLength: function () {
        return this.num.length
    },
    multiply: function (t) {
        for (var e = Array(this.getLength() + t.getLength() - 1), i = 0; i < this.getLength(); i++)
            for (var s = 0; s < t.getLength(); s++)
                e[i + s] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(t.get(s)));
        return new QRPolynomial(e, 0)
    },
    mod: function (t) {
        if (this.getLength() - t.getLength() < 0)
            return this;
        for (var e = QRMath.glog(this.get(0)) - QRMath.glog(t.get(0)), i = Array(this.getLength()), s = 0; s < this.getLength(); s++)
            i[s] = this.get(s);
        for (var s = 0; s < t.getLength(); s++)
            i[s] ^= QRMath.gexp(QRMath.glog(t.get(s)) + e);
        return new QRPolynomial(i, 0).mod(t)
    }
},
    QRRSBlock.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]],
    QRRSBlock.getRSBlocks = function (t, e) {
        var i = QRRSBlock.getRsBlockTable(t, e);
        if (void 0 == i)
            throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
        for (var s = i.length / 3, a = [], n = 0; n < s; n++)
            for (var o = i[3 * n + 0], r = i[3 * n + 1], c = i[3 * n + 2], l = 0; l < o; l++)
                a.push(new QRRSBlock(r, c));
        return a
    }
    ,
    QRRSBlock.getRsBlockTable = function (t, e) {
        switch (e) {
            case QRErrorCorrectLevel.L:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 0];
            case QRErrorCorrectLevel.M:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 1];
            case QRErrorCorrectLevel.Q:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 2];
            case QRErrorCorrectLevel.H:
                return QRRSBlock.RS_BLOCK_TABLE[4 * (t - 1) + 3];
            default:
                return
        }
    }
    ,
    QRBitBuffer.prototype = {
        get: function (t) {
            var e = Math.floor(t / 8);
            return 1 == (this.buffer[e] >>> 7 - t % 8 & 1)
        },
        put: function (t, e) {
            for (var i = 0; i < e; i++)
                this.putBit(1 == (t >>> e - i - 1 & 1))
        },
        getLengthInBits: function () {
            return this.length
        },
        putBit: function (t) {
            var e = Math.floor(this.length / 8);
            this.buffer.length <= e && this.buffer.push(0),
                t && (this.buffer[e] |= 128 >>> this.length % 8),
                this.length++
        }
    },
    define("qrcode", function () { }),
    define("util/jquery.qrcode", ["jquery", "qrcode"], function (t, e) {
        t.fn.qrcode = function (e) {
            "string" == typeof e && (e = {
                text: e
            }),
                e = t.extend({}, {
                    render: "canvas",
                    width: 256,
                    height: 256,
                    typeNumber: -1,
                    correctLevel: QRErrorCorrectLevel.H,
                    background: "#ffffff",
                    foreground: "#000000"
                }, e);
            var i = function () {
                var t = new QRCode(e.typeNumber, e.correctLevel);
                t.addData(e.text),
                    t.make();
                var i = document.createElement("canvas");
                i.width = e.width,
                    i.height = e.height;
                for (var s = i.getContext("2d"), a = e.width / t.getModuleCount(), n = e.height / t.getModuleCount(), o = 0; o < t.getModuleCount(); o++)
                    for (var r = 0; r < t.getModuleCount(); r++) {
                        s.fillStyle = t.isDark(o, r) ? e.foreground : e.background;
                        var c = Math.ceil((r + 1) * a) - Math.floor(r * a)
                            , l = Math.ceil((o + 1) * a) - Math.floor(o * a);
                        s.fillRect(Math.round(r * a), Math.round(o * n), c, l)
                    }
                return i
            }
                , s = function () {
                    var i = new QRCode(e.typeNumber, e.correctLevel);
                    i.addData(e.text),
                        i.make();
                    for (var s = t("<table></table>").css("width", e.width + "px").css("height", e.height + "px").css("border", "0px").css("border-collapse", "collapse").css("background-color", e.background), a = e.width / i.getModuleCount(), n = e.height / i.getModuleCount(), o = 0; o < i.getModuleCount(); o++)
                        for (var r = t("<tr></tr>").css("height", n + "px").appendTo(s), c = 0; c < i.getModuleCount(); c++)
                            t("<td></td>").css("width", a + "px").css("background-color", i.isDark(o, c) ? e.foreground : e.background).appendTo(r);
                    return s
                };
            return this.each(function () {
                var a = "canvas" == e.render ? i() : s();
                t(a).appendTo(this)
            })
        }
    }),
    require(["window", "jquery", "templates", "util/modal", "util/loading", "moment", "layout/main", "util/query", "util/liveSearch", "util/mainNews", "Cookies", "util/bannerBd", "util/vipcontent", "util/jquery.qrcode", "util/UserManage", "modal/login"], function (t, e, i, s, a, n, o, r, c, l, d, p, u, v, m, h) {
        function f(t, e) {
            t.on("mouseenter", function () {
                e.css("display", "block")
            }).on("mouseleave", function () {
                e.css("display", "none")
            })
        }
        function g(t) {
            switch (I.removeClass("main-tab-company main-tab-human main-tab-relation"),
            t) {
                case "js-company":
                    I.addClass("main-tab-company"),
                        setTimeout(function () {
                            e("#home-main-search").val(e("#home-human-search").val()).focus()
                        }, 0);
                    break;
                case "js-human":
                    I.addClass("main-tab-human"),
                        setTimeout(function () {
                            e("#home-human-search").val(e("#home-main-search").val()).focus()
                        }, 0);
                    break;
                case "js-relation":
                    I.addClass("main-tab-relation")
            }
        }
        function b(t) {
            M.addClass("hidden"),
                M.filter("[tab='" + t + "']").removeClass("hidden").find("input")[0].focus(),
                M.filter("[tab='" + t + "']").find("input")[0] && M.filter("[tab='" + t + "']").find("input")[0].focus()
        }
        function y(t) {
            C.removeClass("active"),
                t.addClass("active")
        }
        function w(t) {
            var e = C.filter("[tab='" + t + "']");
            x = t,
                g(t),
                b(t),
                y(e)
        }
        function _(t) {
            var e = S.eq(t)
                , i = "mainv2_tab3_title_hover";
            switch (t) {
                case 0:
                    i += "_left";
                    break;
                case 2:
                case 3:
                    i += "_right"
            }
            S.addClass("mainv2_tab3_title_item").removeClass("mainv2_tab3_title_hover mainv2_tab3_title_hover_left mainv2_tab3_title_hover_right"),
                e.addClass(i).removeClass("mainv2_tab3_title_item")
        }
        function k(t) {
            P.addClass("hidden"),
                P.eq(t).removeClass("hidden")
        }
        e("#live-search").focus(),
            e(".js-toVip").on("click", function () {
                t.open("/vip")
            }),
            f(e(".js-toVip"), e(".js-appShow")),
            f(e(".js-mediaSource"), e(".js-mediaTarget")),
            f(e(".js-userSource"), e(".js-userTarget"));
        var x = "js-company"
            , C = e(".js-tab")
            , I = e(".js-tab-body")
            , M = e(".js-search-container");
        C.on("click", function () {
            w(e(this).attr("tab"))
        });
        var S = e(".js-tab-title-common")
            , P = e(".js-industry-container");
        S.on("click", function () {
            var t = e(this).index();
            _(t),
                k(t)
        }),
            function () {
                S.eq(0).trigger("click")
            }(),
            t.humanHref = function () {
                t.open("/human/1980218908-c2337461684")
            }
            ,
            t.companyHref = function () {
                t.open("/company/22822")
            }
            ,
            t.relationHref = function () {
                t.open("/company/22822")
            }
            ,
            t.vipHref = function () {
                t.open("/vipintro")
            }
            ,
            t.businessHref = function () {
                t.open("/vipbusiness")
            }
            ,
            t.vipCardHref = function (e) {
                t.open(e || "/vipbusiness")
            }
            ,
            t.companyDetail = function (e) {
                t.open(t.serverDomain + "/company/" + e)
            }
            ,
            t.hotnewsDetail = function (e) {
                t.open(t.serverDomain + "/hotnews/" + e)
            }
            ,
            t.showMainVip = function (t, i) {
                t = t || {},
                    i = i || {},
                    i.useraction = i.useraction || "70",
                    t.size = "vipmaincontent",
                    a.show(),
                    r.getVipPopPage(i).then(function (i) {
                        if (a.hide(),
                            i && "warn" == i.state)
                            return void s.showErrorMessage(i.message || "生成订单失败!");
                        s.openByElementStr(i, t),
                            e("#_order_pop_id").val() && R(e("#_order_pop_id").val(), !0)
                    }, function () {
                        a.hide(),
                            s.showErrorMessage("生成订单失败!")
                    })
            }
            ;
        var D = function (t, i) {
            e("#wxPayQrCode").empty(),
                t.qrcode({
                    text: i,
                    width: 126,
                    height: 126
                });
            var s = t.children(0)[0];
            if (s) {
                var a = s.getContext("2d")
                    , n = new Image;
                n.src = "https://static.tianyancha.com/web-require-js/themes/18blue/images/logo2.jpg",
                    n.onload = function () {
                        a.drawImage(n, s.clientWidth / 2 - 20, s.clientHeight / 2 - 20, 40, 40)
                    }
            }
        }
            , T = null
            , j = function () {
                r.weiXinPayPolling(e("#_order_pop_id").val()).then(function (i) {
                    if ("ok" === i.state) {
                        if (i.data + "" != "1")
                            return void (T = setTimeout(function () {
                                j(e("#_order_pop_id").val())
                            }, 1e3));
                        N(),
                            t.location.href = "/orderpay/" + e("#_order_pop_id").val()
                    }
                })
            }
            , R = function (t, i) {
                r.weiXinPayInfo(t).then(function (s) {
                    "ok" === s.state && e("#wxPayQrCode").length && (D(e("#wxPayQrCode"), s.data),
                        i && j(t))
                })
            }
            , N = function () {
                r.getUserInfo().then(function (t) {
                    var e = m.getUserInfo()
                        , i = 0;
                    try {
                        i = parseInt(t.data.state),
                            e.state = i,
                            m.setUserInfo(e, !0)
                    } catch (t) { }
                })
            };
        t.startAliPay = function () {
            var i = e("#_order_pop_id").val();
            r.alipayInfo(i).then(function (e) {
                "ok" === e.state && (t.location.href = e.data)
            })
        }
            ,
            t.changeActivePopVipCheck = function (t) {
                var i = e(t).find(".vipstate").val()
                    , a = e("#_invite_code").val();
                r.preVipOrder({
                    state: i,
                    inviteCode: a
                }).then(function (i) {
                    if (i && "ok" == i.state && i.data && i.data.orderId) {
                        e("#_order_pop_id").val(i.data.orderId);
                        e(t).find(".vipPrice").val(),
                            e(t).find(".finalPrice").val();
                        e(t).parent().find(".vip_check_box").removeClass("vip_check_active").find(".iconhide").removeClass("in"),
                            e(t).addClass("vip_check_active").find(".iconhide").addClass("in"),
                            e(".vipEndPrice").text("¥" + i.data.finalPrice / 100),
                            e(".discount").text(i.data.discount / 100),
                            R(i.data.orderId)
                    } else
                        s.showErrorMessage(i.message || "生成订单失败!")
                }, function () {
                    s.showErrorMessage("生成订单失败!")
                })
            }
            ,
            t.showInviteValid = function () {
                e(".order-invite-code").val() ? e(".order-invite-state").removeClass("hide") : e(".order-invite-state").addClass("hide"),
                    e(".order-invite-msg").empty()
            }
            ,
            t.toVipPrice = function () {
                var t = e(".order-invite-code").val()
                    , i = e("._vip_pop_order .vip_check_active").find(".vipstate").val() || "";
                if (t) {
                    var n = {};
                    n.size = "vipmaincontent",
                        a.show(),
                        r.getVipPopPage({
                            useraction: i,
                            inviteCode: t,
                            closeInviteCode: "false"
                        }).then(function (t) {
                            if (a.hide(),
                                t && "warn" == t.state)
                                return void s.showErrorMessage(t.message || "生成订单失败!");
                            s.openByElementStr(t, n),
                                e("#_order_pop_id").val() && R(e("#_order_pop_id").val())
                        }, function () {
                            a.hide(),
                                s.showErrorMessage("生成订单失败!")
                        })
                }
            }
            ,
            t.clearInviteCode = function () {
                var t = e(".order-invite-code").val()
                    , i = e("._vip_pop_order .vip_check_active").find(".vipstate").val() || "";
                if (t) {
                    var n = {};
                    n.size = "vipmaincontent",
                        a.show(),
                        r.getVipPopPage({
                            useraction: i,
                            inviteCode: t,
                            closeInviteCode: "true"
                        }).then(function (t) {
                            if (a.hide(),
                                t && "warn" == t.state)
                                return void s.showErrorMessage(t.message || "生成订单失败!");
                            s.openByElementStr(t, n),
                                e("#_order_pop_id").val() && R(e("#_order_pop_id").val())
                        }, function () {
                            a.hide(),
                                s.showErrorMessage("生成订单失败!")
                        })
                }
            }
            ,
            t.openHowToSelect = function () {
                var t = i.render("howToSelect");
                s.openByElementStr(t, {
                    size: "fjgsBox"
                })
            }
            ,
            t.openClaimApply = function () {
                if (!m.logged())
                    return void h.showLoginModal({
                        loginUrl: "/claim/apply"
                    });
                t.open("/claim/apply")
            }
            ,
            e(function () {
                e("#home-main-search")[0] && e("#home-main-search")[0].focus();
                var i = common.parseQueryString()
                    , s = i.useraction;
                s && t.showMainVip({}, {
                    useraction: s
                })
            })
    }),
    define("route/main", function () { });
