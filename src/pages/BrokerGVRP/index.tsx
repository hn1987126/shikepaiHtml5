import React, { useEffect } from 'react';
import './index.less';

let BrokerGVRP = () => {
  useEffect(() => {
    document.title = '用户协议';
  }, []);
  return (
    <div className="WordSection1">
      <p className="MsoNormal">
        <span>
          时客派<span>App</span>
          （以下简称“时客派”）是由深圳前海华众互联网金融服务有限公司（以下简称“华众金服”）运营的网络信贷服务平台。为支持互联网金融市场的培育和发展，促进双方业务开展，华众金服依据本协议的约定为时客派注册信贷经理用户（以下称
          <span>“</span>您<span>”</span>或<span>“</span>用户<span>”</span>
          ）提供信贷服务，本协议阐述之条款和条件适用于您使用时客派平台服务。本协议在您和时客派平台间具有合同上的法律效力，本协议在时客派信贷经理用户注册时生效。您在成为时客派信贷经理用户前，请务必仔细阅读并使用本协议中所述的所有规则、条款和条件，包括因被提及而纳入的条款和条件。
        </span>
      </p>
      <h3>
        <span>一、用户资格</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>、您应保证您所服务的机构合法存续，并具备从事贷款业务的资质。</span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、您保证您与您所服务机构签署了劳动合同，是所服务机构的正式员工，并已获得从事贷款业务所必要的授权。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、尽管有前述的规定，但时客派平台服务不向<span>18</span>
          周岁以下的个人及被时客派临时或无限期中止服务的时客派客户提供。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、时客派部分服务是面向认证通过用户的，非认证用户将无法使用，具体详情以时客派平台届时向认证用户或非认证用户开放的服务功能为准。因未能完成认证而无法享受时客派服务造成的损失，深圳前海华众互联网金融服务有限公司不承担任何责任。{' '}
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、若您不符合规定的用户资格，您不能注册为时客派平台用户，您与时客派之间的服务协议自始无效，一经发现，时客派有权立即停止提供一切平台服务、注销该用户账户等信息，并追究其使用时客派平台服务的一切法律责任。
        </span>
      </p>
      <h3>
        <span>二、用户注册</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、用户注册是指您登录时客派平台，按要求填写相关信息并确认同意履行相关用户服务协议的过程。您因获取有偿服务等而依法发生的相应费用由您自行承担。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、您在此保证所填写的用户信息是真实、准确、完整、及时的，并且没有任何引人误解或者虚假的陈述，且保时客派能够通过您所填写的联系方式与您取得联系。为防止他人冒用您的身份注册或使用时客派平台服务，时客派有权向您提供的联系方式中的联系电话发送一条短信予以验证，由此产生的短信费用由您联系电话号码归属的运营商向您收取。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、您应根据时客派对于相关服务的要求及时提供相应的身份证明等资料，否则时客派有权拒绝向您提供相关服务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>、您承诺将及时更新您的用户信息以维持该等信息的有效性。</span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、如果您提供的资料或信息包含有不正确、不真实的信息，时客派有权保留或取消您的用户资格并随时结束为您提供服务的权利。
        </span>
      </p>
      <p className="MsoNormal">
        <span>6</span>
        <span>
          、您注册成功后将得到一个用户名和密码，您凭该用户名和密码享受时客派为您提供的平台服务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>7</span>
        <span>
          、您将对用户名和密码安全负全部责任，并且您对以您用户名进行的所有活动和事件负全责。您有权根据时客派规定的程序修改密码。
        </span>
      </p>
      <p className="MsoNormal">
        <span>8</span>
        <span>
          、未经时客派平台书面同意，您的用户名和密码不得擅自转让或者授权他人使用，否则您应承担由此造成的一切后果。
        </span>
      </p>
      <p className="MsoNormal">
        <span>9</span>
        <span>、您若发现任何非法使用您用户账户或存在安全漏洞的情况，请立即告知时客派。</span>
      </p>
      <h3>
        <span>三、服务内容</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、时客派平台服务包括但不限于：查询交易机会、信息订制等，具体详情以时客派平台当时提供的服务内容为准。时客派平台所提供的各种信息及资料仅为参考，时客派不对平台中的一切信息和资料进行审查，也不会对其真实性、完整性、及时性做出任何承诺，您应依自己独立判断做出决策，时客派对此等信息的准确性、完整性、合法性、有效性或真实性均不承担任何责任。您据此进行交易的，产生的风险由您自行承担，您无权据此向时客派提出任何法律主张。在交易过程中，您与有借款需求的客户（以下称
          <span>“</span>客户<span>”</span>
          ）之间发生的纠纷，由纠纷各方自行解决，时客派不承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、时客派平台作为客户（个人、企业或其他组织）和资金提供方（借出者）的信息对接平台以及获取各类与投融资相关的服务信息的地点。时客派不能控制双方借款过程中所涉及的服务的质量、安全或合法性以及借款各方履行其在借款合同下的各项义务的能力。时客派并不以接受服务方或提供服务方的身份参与借款行为。时客派再次提醒您，您应该通过自己的谨慎判断确定服务及相关信息的真实性、完整性和及时性。时客派对任何第三方网站及其内容不进行控制、担保，也不负任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、客户将借款需求发布至时客派平台，您应对客户的借款需求及信用情况进行自行确认，确认之后可进行交易。若因未仔细确认而发生纠纷，时客派不承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>、在不违反法律的强制性规定的前提下，时客派所提供的服务有可能会发生变更或者增加</span>
      </p>
      <p className="MsoNormal">
        <span>&nbsp;</span>
      </p>
      <p className="MsoNormal">
        <b>
          <span>四、服务费用</span>
        </b>
      </p>
      <p className="MsoNormal">
        <span>&nbsp;</span>
      </p>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、当您使用本协议项下时客派平台服务时，时客派会向您收取相关服务费用，各项服务费用请详见您使用时客派服务时平台上所列之收费方式说明。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、时客派在适用法律许可的前提下，有权自行决定是否调整及如何调整收费标准及收费方式。该等关于费用收取的变更将至少提前于该等变更生效之日
          <span>[ 7 ]</span>日并在时客派平台以发布公告的方式通知您，您对该等通知方式予以认可并接受。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、您在使用时客派平台服务过程中，进行如充值等可能需要向第三方（如银行或第三方支付公司等）支付一定的费用，具体收费标准详见第三方要求或时客派平台的提示。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>、您在使用时客派服务时，由于上网而产生的流量费用、通信费用由相关运营商收取。</span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、您因使用时客派所提供服务完成的交易而取得的收入，应当由您按照所适用法律规定承担相应的税费。
        </span>
      </p>
      <h3>
        <span>五、您的权利和义务</span>
      </h3>
      <h3>
        <span>1</span>
        <span>
          、您有权利拥有时客派的用户名及登录密码，并有权利使用您的用户名及密码随时登录时客派平台。您不得以任何形式擅自转让或授权他人使用您的时客派用户名及密码。
        </span>
      </h3>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、基于业务模式，我们将受理借款申请人的借款申请。我们接收您的委托，按照您提供的需求，向您提供借款申请人的基本资料（为保证借款申请人的信息安全，部分资料可能进行脱敏处理），促成您所属平台或机构与借款申请人之间的关系。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、您保证在为客户提供服务的过程中，不应收取除其所属机构明确公示以外的任何其他费用。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>、 您同意遵守时客派的交易规则，接收来时客派平台合作伙伴发出的邮件或信息。</span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、严禁在未经客户许可的情况下，让第三方获取其个人<span>/</span>
          企业信息。您应当采取必要的技术手段、建立完善的信息保密制度并严格遵守该制度以确保用户的信息安全。如违反本条约定，时客派将取消您与时客派平台合作的资格，给时客派带来损失的，将由您来承担一切损失（包括直接损失及间接损失）。
        </span>
      </p>
      <p className="MsoNormal">
        <span>6</span>
        <span>
          、如您所属机构无法批准客户的借款申请，您可以向客户推荐其他具备资质的机构，但是必须事先获得客户的书面许可。
        </span>
      </p>
      <p className="MsoNormal">
        <span>7</span>
        <span>
          、
          您应当保证在使用时客派平台进行信息发布过程中遵守诚实信用的原则，不得在发布的信息中包含有反动、暴力、淫秽、毒品、赌博、教唆及有损社会公共道德的内容；不得发布各类违法或违规信息。
        </span>
      </p>
      <p className="MsoNormal">
        <span>8</span>
        <span>
          、 您不应在时客派平台上恶意评价其他用户<span>/</span>
          或客户，或采取不正当手段提高自身的信用度或降低其他用户<span>/</span>或客户的信用度。
        </span>
      </p>
      <p className="MsoNormal">
        <span>9</span>
        <span>
          、您在时客派平台上不得发布包含有国家禁止或限制发布包含有侵犯他人知识产权或其它合法权益的机密类信息，也不得发布违背社会公共利益或公共道德的或是时客派认为不适合在平台上发布的信息。
        </span>
      </p>
      <p className="MsoNormal">
        <span>10</span>
        <span>
          、您承诺自己在使用时客派平台服务时实施的所有行为均符合有关国家法律、法规和时客派的相关规定以及各种社会公共利益或公共道德。如有违反导致任何法律后果的发生，您独立承担所有相应的法律责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>11</span>
        <span>
          、您同意，在未经时客派平台事先书面同意的情况下，不得以复制、传播等方式使用在时客派平台上展示的任何资料。
        </span>
      </p>
      <p className="MsoNormal">
        <span>12</span>
        <span>
          、您同意并保证不得利用时客派平台提供的服务从事侵害他人权益或违法之行为，若有违反者应负所有法律责任。上述行为包括但不限于：
        </span>
      </p>
      <p className="MsoNormal">
        <span>(1)</span>
        <span>
          反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(2)</span>
        <span>
          侵害他人名誉、隐私权、商业秘密、商标权、著作权、专利权、其他知识产权及其他权益。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(3)</span>
        <span>违反依法律或合约所应负之保密义务。</span>
      </p>
      <p className="MsoNormal">
        <span>(4)</span>
        <span>冒用他人名义使用时客派平台服务。</span>
      </p>
      <p className="MsoNormal">
        <span>(5)</span>
        <span>从事任何不法交易行为，如贩卖枪支、毒品、禁药、盗版软件或其他违禁物。</span>
      </p>
      <p className="MsoNormal">
        <span>(6)</span>
        <span>提供赌博资讯或以任何方式引诱他人参与赌博。</span>
      </p>
      <p className="MsoNormal">
        <span>(7)</span>
        <span>涉嫌洗钱、套现或进行传销活动的。</span>
      </p>
      <p className="MsoNormal">
        <span>(8)</span>
        <span>从事任何可能含有电脑病毒或是可能侵害时客派服务系統、资料等行为。</span>
      </p>
      <p className="MsoNormal">
        <span>(9)</span>
        <span>利用时客派服务系统进行可能对互联网或移动网正常运转造成不利影响之行为。</span>
      </p>
      <p className="MsoNormal">
        <span>(10)</span>
        <span>侵犯时客派的商业利益，包括但不限于发布非经时客派平台许可的商业广告。</span>
      </p>
      <p className="MsoNormal">
        <span>(11)</span>
        <span>
          利用时客派服务上传、展示或传播虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(12)</span>
        <span>其他时客派平台有正当理由认为不适当之行为。</span>
      </p>
      <h3>
        <span>六、时客派的权利与义务</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、时客派有权通过自身或委托其认可的第三方机构为您提供除信息发布、信息查询外的融资比较、融资体检和实现一站式融资实现等增值服务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、时客派有义务在现有技术上维护整个网上平台的正常运行，并努力提升和改进技术。对于您在注册使用时客派平台中所遇到的与信息发布或注册有关的问题及反应的情况，时客派应及时作出回复。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、
          对于您在时客派平台上的不当行为或其它任何时客派认为应当终止服务的情况，时客派有权随时作出删除相关信息、终止服务提供等处理，而无须征得您的同意。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、因网上平台的特殊性，时客派没有义务对所有用户的注册资料、行为及其他事项进行事先审查。
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、您理解并认可，时客派对您及其所属机构与用户之间产生的争议无关，对此亦不承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>6</span>
        <span>
          、您了解的时客派平台并不是银行或金融机构，按照中国法律规定，时客派不提供金融服务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>7</span>
        <span>
          、您理解并同意，时客派向符合条件的用户及客户提供服务。时客派无法也没有义务保证用户、客户在发出借款要约或投资意向后，能够实际获得借款或投资成功，用户、客户因前述原因导致的损失（包括但不限于利息、手续费等损失）由用户、客户自行承担，时客派不承担责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>8</span>
        <span>
          、时客派不对任何用户、客户及<span>/</span>
          或任何交易提供任何担保或条件，无论是明示、默示或法定的。时客派不能也不试图对用户、客户发布的信息进行控制，对该等信息，时客派不承担任何形式的证明、鉴定服务。时客派不能完全保证平台内容的真实性、充分性、可靠性、准确性、完整性和有效性，并且无需承担任何由此引起的法律责任。您依赖于您的独立判断进行交易，应对其作出的判断承担全部责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>9</span>
        <span>
          、时客派有权对您的注册数据及信息发布行为进行查阅，发现注册数据或信息发布行为中存在任何问题或怀疑，均有权向您发出询问及要求改正的通知或者直接作出删除等处理。
        </span>
      </p>
      <p className="MsoNormal">
        <span>10</span>
        <span>
          、经国家生效法律文书或行政处罚决定确认您存在违法行为，或者时客派有合理事实依据可以认定您存在违法或违反本协议及相关规则行为的，时客派有权在时客派平台及所在网站上以网络发布形式公布您的违法行为。
        </span>
      </p>
      <p className="MsoNormal">
        <span>11</span>
        <span>
          、在您使用时客派服务时，时客派有权接收并记录您的个人信息，包括但不限于<span>IP</span>
          地址、<span>GPS</span>信息、网站<span>Cookie</span>中的资料及您要求取用的网页记录等。
        </span>
      </p>
      <p className="MsoNormal">
        <span>12</span>
        <span>
          、时客派有依其单独判断删除时客派平台内各类不符合法律政策或不真实或不适当的信息内容而无须通知您的权利，并无需承担任何责任。若您未遵守以上规定的，时客派有权作出独立判断并采取暂停或关闭用户账户等措施，而无需承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>13</span>
        <span>、时客派平台转让本协议无需经过您的同意。</span>
      </p>
      <h3>
        <span>七、用户资料及隐私保护</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>、保密信息包括：</span>
      </p>
      <p className="MsoNormal">
        <span>(1)</span>
        <span>在您加入时客派平台成为平台用户时，您根据时客派要求提供的注册信息；</span>
      </p>
      <p className="MsoNormal">
        <span>(2)</span>
        <span>
          在您使用时客派服务、参加时客派平台活动，或登录时客派平台时，时客派平台自动接收并记录的您终端设备上的服务器数值，包括但不限于
          <span>IP</span>地址等数据及您要求取用的记录。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(3)</span>
        <span>
          时客派收集到的您在时客派平台使用服务等的有关数据，包括但不限于上传图片、发布使用体验、参与讨论、邀请关注好友和留言等数据。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(4)</span>
        <span>时客派通过合法途径从合作伙伴处取得的有关数据。</span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>、信息使用：</span>
      </p>
      <p className="MsoNormal">
        <span>(1)</span>
        <span>时客派不会向任何人出售或出借您的敏感信息，除非事先得到您得许可。</span>
      </p>
      <p className="MsoNormal">
        <span>(2)</span>
        <span>
          时客派亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播用户的敏感信息。任何用户如从事上述活动，一经发现，时客派有权立即终止与您的服务协议，查封或注销您的用户账户。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、为您更好使用时客派平台服务的目的，时客派可能通过使用您的信息，向您提供服务，包括但不限于向您发出产品和服务信息，或者与时客派合作伙伴共享信息以便他们向您发送有关其产品和服务的信息（后者需要您的事先同意）。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>、信息披露：</span>
      </p>
      <p className="MsoNormal">
        <span>
          时客派承诺对用户资料采取对外保密措施，不向第三方披露用户资料，不授权第三方使用用户资料，除非：
        </span>
      </p>
      <p className="MsoNormal">
        <span>(1)</span>
        <span>依据本协议条款或者用户与时客派之间其他服务协议、合同、在线条款等规定可以提供；</span>
      </p>
      <p className="MsoNormal">
        <span>(2) </span>
        <span>依据法律、法规的规定应当提供；</span>
      </p>
      <p className="MsoNormal">
        <span>(3) </span>
        <span>行政、司法等有权部门要求时客派提供；</span>
      </p>
      <p className="MsoNormal">
        <span>(4) </span>
        <span>用户同意时客派向第三方提供；</span>
      </p>
      <p className="MsoNormal">
        <span>(5) </span>
        <span>时客派派方解决举报事件、提起诉讼而提交的；</span>
      </p>
      <p className="MsoNormal">
        <span>(6) </span>
        <span>时客派派为防止严重违法行为或涉嫌犯罪行为发生而采取必要合理行动所必须提交的；</span>
      </p>
      <p className="MsoNormal">
        <span>(7) </span>
        <span>
          时客派派为向用户提供产品、服务、信息而向第三方提供的，包括时客派通过第三方的技术及服务向用户提供产品、服务、信息的情况。
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>、信息安全：</span>
      </p>
      <p className="MsoNormal">
        <span>(1) </span>
        <span>
          时客派派平台的用户账户有密码保护功能，请您妥善保管自己的用户名及密码信息；在使用时客派平台服务时，请您妥善保护自己的个人信息，仅在必要的情形下向他人提供；
        </span>
      </p>
      <p className="MsoNormal">
        <span>(2) </span>
        <span>
          如果您发现自己的信息泄密，尤其是时客派平台的用户账户及密码或交易、支付密码发生泄露，请您立即联络时客派，以便时客派采取相应措施。
        </span>
      </p>
      <h3>
        <span>八、许可使用权</span>
      </h3>
      <p className="MsoNormal">
        <span>
          您授予时客派永久的、免费的、完整的许可使用权利（并且有权对该权利进行再授权），使时客派有权使用、复制、修改、发布、翻译、分享您提供的资料或制作其派生作品，以已知或日后开发的任何形式、媒体或技术，将您提供的资料纳入其他作品里。
        </span>
      </p>
      <h3>
        <span>九、免责声明</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、时客派并不实质性介入您与用户、其他客户、金融机构之间的交易，对此，您充分理解并认可。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、您将对您发布的信息及其他在时客派平台上发生的任何行为承担责任，时客派对此不负任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、时客派是一个开放平台，您将个人<span>/</span>
          企业信息、文章或照片等个人资料上传到信贷平台上，有可能会被其他组织或个人复制、转载、擅改或做其它非法用途，您必须充分意识此类风险的存在。作为网络服务的提供者，时客派对您在任何论坛、个人主页或其它互动区域提供的任何陈述、声明或内容均不承担责任。您明确同意使用时客派服务所存在的风险或产生的一切后果将完全由您自身承担，时客派对上述风险或后果不承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、您违反本协议、违反道德或法律的，侵犯他人权利（包括但不限于知识产权）的，时客派不承担任何责任。同时，时客派对任何第三方通过时客派发送服务或包含在服务中的任何内容不承担责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、对您、用户、其他客户或任何第三方发布、存储或上传的任何内容或由该等内容导致的任何损失或损害，时客派不承担责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>6</span>
        <span>
          、对任何第三方通过时客派可能对您造成的任何错误、中伤、诽谤、诬蔑、不作为、谬误、淫秽、色情或亵渎，时客派不承担责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>7</span>
        <span>
          、对黑客行为、计算机病毒、或因您保管疏忽致使帐号、密码被他人非法使用、盗用、篡改的或丢失，或由于与本网站链接的其它网站所造成您个人资料的泄露，时客派不承担责任。如您发现任何非法使用客户帐号或安全漏洞的情况，请立即与时客派联系。
        </span>
      </p>
      <p className="MsoNormal">
        <span>8</span>
        <span>
          、时客派不保证服务一定能满足您的要求；不保证服务不会中断，也不保证服务的及时性、安全性、准确性。
        </span>
      </p>
      <p className="MsoNormal">
        <span>9</span>
        <span>
          、您无任何附加条件的接受，时客派派、时客派的关联公司和相关实体或时客派的服务商在任何情况下均不就因时客派平台、时客派的服务或本协议而产生或与之有关的利润损失或任何特别、间接或直接性的损害（无论以何种方式产生，包括疏忽）承担任何责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>10</span>
        <span>
          、您同意您就您自身行为之合法性单独承担责任。您同意，时客派和时客派的所有关联公司和相关实体对用户、客户的行为的合法性及产生的任何结果不承担责任。
        </span>
      </p>
      <p className="MsoNormal">
        <span>11</span>
        <span>
          、任何情况下，因使用时客派而引起或与使用时客派有关的而产生的由时客派负担的责任总额，无论是基于合同、保证、侵权、产品责任、严格责任或其它理论，均不得超过您因访问或使用时客派平台而向时客派支付的任何报酬（如果有的话）。
        </span>
      </p>
      <h3>
        <span>十、知识产权的保护</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、时客派平台上的图表、标识、页眉、按钮图标、文字、服务品名等标示在平台上的信息都是深圳前海华众互联网金融服务有限公司所有或经授权合法使用，受中国和国际知识产权法的保护。未经时客派许可，您不得以任何可能引起第三方混淆的方式或任何贬低或诽谤深圳前海华众互联网金融服务有限公司的方式用于非时客派的任何产品或服务上。未经深圳前海华众互联网金融服务有限公司或相关商标所有人的书面许可，时客派平台上的任何东西都不应被解释为以默许或其他方式授予许可或使用平台上出现的商标的权利。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>、时客派用户发表的文章仅代表作者本人观点，与时客派立场无关。作者文责自负。</span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、时客派有权将在时客派平台上发表的产品使用体验、产品讨论（如有）或图片自行使用或者与其他人合作使用于其他用途，包括但不限于网站、电子杂志、杂志、刊物等，使用时需为作者署名，以发表文章时注明的署名为准。文章有附带版权声明者除外。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、您在时客派平台上发表的文章及图片（包括转贴的文章及图片）版权仅归原作者所有，若作者有版权声明或原作从其它网站转载而附带有原版权声明者，其版权归属以附带声明为准。
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>、任何转载、引用发表于时客派平台的版权文章须符合以下规范：</span>
      </p>
      <p className="MsoNormal">
        <span>(1) </span>
        <span>
          用于非商业、非盈利、非广告性目的时需注明作者及文章及图片的出处为<span>&quot;</span>时客派
          <span>&quot;</span>或<span>“www.shikepai.com”</span>。
        </span>
      </p>
      <p className="MsoNormal">
        <span>(2) </span>
        <span>
          用于商业、盈利、广告性目的时需征得文章或图片原作者的同意，并注明作者姓名、授权范围及原作出处
          <span>&quot;</span>时客派<span>&quot;</span>或<span>“www.shikepai.com”</span>。{' '}
        </span>
      </p>
      <p className="MsoNormal">
        <span>(3) </span>
        <span>任何文章或图片的修改或删除均应保持作者原意并征求原作者同意，并注明授权范围。</span>
      </p>
      <h3>
        <span>十一、服务中断或故障</span>
      </h3>
      <p className="MsoNormal">
        <span>
          您同意，基于互联网的特殊性，时客派不担保服务不会中断，也不担保服务的及时性和<span>/</span>
          或安全性。系统因相关状况无法正常运作，使您无法使用任何时客派所提供的服务或使用任何时客派服务时受到任何影响时，时客派对您或第三方不负任何责任，前述状况包括但不限于：
        </span>
      </p>
      <p className="MsoNormal">
        <span>1</span>
        <span>、时客派系统停机维护期间。</span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>、电信设备出现故障不能进行数据传输的。</span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、由于黑客攻击、网络供应商技术调整或故障、网站升级、银行方面的问题等原因而造成的时客派服务中断或延迟。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成时客派系统障碍不能执行业务的。
        </span>
      </p>
      <h3>
        <span>十二、补偿及责任免除</span>
      </h3>
      <p className="MsoNormal">
        <span>
          就任何第三方提出的，由于您违反本协议或纳入本协议的条款和规则或您违反任何法律或侵犯第三方的权利而产生或引起的任一种类和性质的任何索赔、要求、诉讼、损失和损害（包括直接或间接的），无论是已知或未知的，包括合理的律师费，您同意就此对时客派和（如适用）时客派的母公司、子公司、关联公司、合作伙伴、高级职员、董事、代理人和雇员进行补偿并使其免受损害。
        </span>
      </p>
      <h3>
        <span>十三、条款的解释、法律适用及争端解决</span>
      </h3>
      <p className="MsoNormal">
        <span>1</span>
        <span>
          、本协议是由您与时客派共同签订的，本协议内容包括但不限于协议正文条款及时客派已经发布的或将来可能发布的各类规则，所有条款和规则为协议不可分割的一部分，与本协议正文具有同等法律效力。
        </span>
      </p>
      <p className="MsoNormal">
        <span>2</span>
        <span>
          、本协议不涉及您与用户、金融机构、时客派的其他客户之间，因网上交易而产生的法律关系及法律纠纷。但您在此同意将全面接受并履行与用户、时客派其他客户在时客派签订的任何电子法律文本，并承诺按照该法律文本享有和（或）放弃相应的权利、承担和（或）豁免相应的义务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>3</span>
        <span>
          、如本协议中的任何条款无论因何种原因完全或部分无效或不具有执行力，则应认为该条款可与本协议相分割，并可被尽可能接近各方意图的、能够保留本协议要求的经济目的的、有效的新条款所取代，而且，在此情况下，本协议的其他条款仍然完全有效并具有约束力。
        </span>
      </p>
      <p className="MsoNormal">
        <span>4</span>
        <span>
          、本协议及其修订的有效性、履行与本协议及其修订效力有关的所有事宜，将受中国法律管辖，任何争议仅适用中国法律。
        </span>
      </p>
      <p className="MsoNormal">
        <span>5</span>
        <span>
          、本协议签订地为中国北京市朝阳区。因本协议所引起的您与时客派的任何纠纷或争议，首先应友好协商解决，协商不成的，您在此完全同意将纠纷或争议提交时客派所在地有管辖权的人民法院诉讼解决。
        </span>
      </p>
      <p className="MsoNormal">
        <span>6</span>
        <span>
          、本协议中的标题仅为方便而设，不影响对于协议本身的解释。本协议最终解释权归时客派所有。
        </span>
      </p>
      <p className="MsoNormal">
        <span>
          您在此再次保证已经完全阅读并理解了上述平台服务协议条款并自愿正式进入时客派平台在线注册程序，使用上述所有条款的约束。您完成前述注册程序后，同时成为时客派平台合作伙伴的用户，可在时客派平台使用由该合作伙伴提供的产品与服务。
        </span>
      </p>
      <p className="MsoNormal">
        <span>&nbsp;</span>
      </p>
      <p className="MsoNormal">
        <span>深圳前海华众互联网金融服务有限公司</span>
      </p>
    </div>
  );
};

export default BrokerGVRP;
