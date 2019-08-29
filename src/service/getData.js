import fetch from '../config/fetch'

export const GetSubjectList = data => fetch('FA/Subject/GetSubjectList', data, 'POST');//获取科目信息列表
export const AddSubject = data => fetch('FA/Subject/AddSubject', data, 'POST');//新增科目
export const UpdateSubject = data => fetch('FA/Subject/UpdateSubject', data, 'POST');//修改科目

export const GetReptList = data => fetch('FA/Rept/GetReptList', data, 'POST');//获取收款单列表
export const ReptGenerateFvo = data => fetch('FA/Rept/ReptGenerateFvo', data, 'POST');//收款单生成凭证
export const GetReptDetList = data => fetch('FA/Rept/GetReptDetList', data, 'POST');//根据RECEIPT_NO获取收款单明细

export const GetFvoList = data => fetch('FA/Fvo/GetFvoList', data, 'POST');//获取凭证列表
export const AddFvo = data => fetch('FA/Fvo/AddFvo', data, 'POST');//新增凭证
export const UpdateFvo = data => fetch('FA/Fvo/UpdateFvo', data, 'POST');//修改凭证
export const GetFvoDetListByVoId = data => fetch('FA/Fvo/GetFvoDetListByVoId', data, 'POST');//根据VO_ID获取凭证明细
export const GetVO_MONTH_NO = data => fetch('FA/Fvo/GetVO_MONTH_NO', data, 'POST');//获取凭证字列表
export const UpdateFvoStatus = data => fetch('FA/Fvo/UpdateFvoStatus', data, 'POST');//更新凭证状态
export const GetFvoAuxItemSelect = data => fetch('FA/Fvo/GetFvoAuxItemSelect', data, 'POST');//凭证选择辅助核算下拉框

export const GetCostList = data => fetch('FA/Cost/GetCostList', data, 'POST');//获取成本结转单列表
export const CostGenerateFvo = data => fetch('FA/Cost/CostGenerateFvo', data, 'POST');//成本结转单生成凭证
export const GetCostDetList = data => fetch('FA/Cost/GetCostDetList', data, 'POST');//根据ST_NO获取成本结转单明细

export const SaveReceipt = data => fetch('FA/Receipt/SaveReceipt', data, 'POST');//保存收款信息

export const PushDeposit = data => fetch('FA/Deposit/PushDeposit', data, 'POST');//推送定金

export const GetSysSettingList = data => fetch('FA/SysSetting/GetSysSettingList', data, 'POST');//获取系统参数设置
export const AddSysSetting = data => fetch('FA/SysSetting/AddSysSetting', data, 'POST');//增加系统参数设置

export const GetRecList = data => fetch('FA/Rec/GetRecList', data, 'POST');//获取入库单列表
export const RecGenerateFvo = data => fetch('FA/Rec/RecGenerateFvo', data, 'POST');//入库单生成凭证
export const GetRecDetList = data => fetch('FA/Rec/GetRecDetList', data, 'POST');//根据REC_NO获取入库单明细


export const GetRelList = data => fetch('FA/Rel/GetRelList', data, 'POST');//获取出库单列表
export const RelGenerateFvo = data => fetch('FA/Rel/RelGenerateFvo', data, 'POST');//出库单生成凭证
export const GetRelDetList = data => fetch('FA/Rel/GetRelDetList', data, 'POST');//根据REL_NO获取出库单明细

export const GetFarList = data => fetch('FA/Far/GetFarList', data, 'POST');//获取应收单列表
export const FarGenerateFvo = data => fetch('FA/Far/FarGenerateFvo', data, 'POST');//应收单生成凭证
export const GetFarDetList = data => fetch('FA/Far/GetFarDetList', data, 'POST');//根据AR_NO获取应收单明细

export const GetFapList = data => fetch('FA/Fap/GetFapList', data, 'POST');//获取应付单列表
export const FapGenerateFvo = data => fetch('FA/Fap/FapGenerateFvo', data, 'POST');//应付单生成凭证
export const GetFapDetList = data => fetch('FA/Fap/GetFapDetList', data, 'POST');//根据AR_NO获取应付单明细

export const GetCurrencyList = data => fetch('FA/Subject/GetCurrencyList', data, 'POST');//获取币别列表
export const AddCurrency = data => fetch('FA/Subject/AddCurrency', data, 'POST');//新增币别信息
export const UpdateCurrency = data => fetch('FA/Subject/UpdateCurrency', data, 'POST');//修改币别信息

export const GetBankList = data => fetch('FA/Subject/GetBankList', data, 'POST');//查询银行账户信息
export const AddBank = data => fetch('FA/Subject/AddBank', data, 'POST');//新增银行账户信息
export const UpdateBank = data => fetch('FA/Subject/UpdateBank', data, 'POST');//修改银行账户信息

export const GetARInfo = data => fetch('FA/AR/GetARInfo', data, 'POST');//获取待收款信息
export const GetARItemInfo = data => fetch('FA/AR/GetARItemInfo', data, 'POST');//获取待收款明细信息

export const GetAuxItemList = data => fetch('FA/AuxItem/GetAuxItemList', data, 'POST');//获取辅助核算项目列表
export const AddAuxItem = data => fetch('FA/AuxItem/AddAuxItem', data, 'POST');//新增辅助核算项目
export const UpdateAuxItem = data => fetch('FA/AuxItem/UpdateAuxItem', data, 'POST');//修改辅助核算项目
export const DeleteAuxItem = data => fetch('FA/AuxItem/DeleteAuxItem', data, 'POST');//删除辅助核算项目
export const GetAuxItemDetList = data => fetch('FA/AuxItem/GetAuxItemDetList', data, 'POST');//查询辅助核算细节
export const AddAuxItemDet = data => fetch('FA/AuxItem/AddAuxItemDet', data, 'POST');//添加辅助核算明细
export const UpdateAuxItemDet = data => fetch('FA/AuxItem/UpdateAuxItemDet', data, 'POST');//修改辅助核算明细

export const GetCurrentProjectName = data => fetch('FA/CurrentProject/GetCurrentProjectName', data, 'POST');//查询业务类型

export const GetCurrentProjectList = data => fetch('FA/CurrentProject/GetCurrentProjectList', data, 'POST');//获取往来项目列表
export const AddCurrentProject = data => fetch('FA/CurrentProject/AddCurrentProject', data, 'POST');//新增往来项目
export const UpdateCurrentProject = data => fetch('FA/CurrentProject/UpdateCurrentProject', data, 'POST');//编辑往来项目
export const GetCurrentProjectDetList = data => fetch('FA/CurrentProject/GetCurrentProjectDetList', data, 'POST');//查询往来项目明细
export const GetCURRENT_BIZ_TYPE = data => fetch('FA/CurrentProject/GetCURRENT_BIZ_TYPE', data, 'POST');//查询往来项目业务类型

export const GetRuleList = data => fetch('FA/Rule/GetRuleList', data, 'POST');//获取财务规则配置列表
export const AddRule = data => fetch('FA/Rule/AddRule', data, 'POST');//新增财务规则配置
export const UpdateRule = data => fetch('FA/Rule/UpdateRule', data, 'POST');//编辑财务规则配置
export const GetFaRuleBizType = data => fetch('FA/Rule/GetFaRuleBizType', data, 'POST');//获取业务类型
export const GetFaRuleBillType = data => fetch('FA/Rule/GetFaRuleBillType', data, 'POST');//获取业务单据类型
export const GetFaRuleMQSERVICE = data => fetch('FA/Rule/GetFaRuleMQSERVICE', data, 'POST');//获取消息服务
export const GetFaRuleOTHER_FACTOR = data => fetch('FA/Rule/GetFaRuleOTHER_FACTOR', data, 'POST');//获取收款方式
export const GetFaRuleUDF1 = data => fetch('FA/Rule/GetFaRuleUDF1', data, 'POST');//获取发票单据状态
export const GetFaRuleMT_CLASS = data => fetch('FA/Rule/GetFaRuleMT_CLASS', data, 'POST');//获取发票销售类型

export const GetBusinessByVoucher = data => fetch('FA/Fvo/GetBusinessByVoucher', data, 'POST');//根据凭证号获取对应业务明细

//ERP开票-查询符合电子开票的工单信息
export const GetOrderTicket = data => fetch('FA/HistoryTicket/GetOrderTicket', data, 'POST','abutment');
//ERP开票-申请工单开票
export const SaveTicketOpening = data => fetch('FA/HistoryTicket/SaveTicketOpening',data,'POST','abutment');
//ERP开票-查询开票历史
export const GetHistoryTicket = data => fetch('FA/HistoryTicket/GetHistoryTicket',data,'POST','abutment');


//登录
export const Login = data => fetch('Login', data, 'POST');
//注销
export const LoginOut = data => fetch('Login/LoginOut', data, 'POST');
//获取门店信息
export const GetEmpStoreList = data => fetch('Login/GetEmpStoreList', data, 'POST');
//切换门店
export const SwitchStore = data => fetch('Login/SwitchStore', data, 'POST');


