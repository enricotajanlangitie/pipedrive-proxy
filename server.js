<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/><meta name="viewport" content="width=device-width,initial-scale=1"/>
<title>InPost Ops KPI 2026</title>
<style>
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;background:#F1F5F9;color:#0F172A}
.top{background:#0F172A;padding:14px 24px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.top h1{color:white;font-size:17px;font-weight:900}
.ytd{background:#1E3A8A;color:#93C5FD;font-size:10px;font-weight:900;padding:5px 14px;border-radius:20px;letter-spacing:.1em}
.cbar{background:#1E293B;padding:10px 24px;display:flex;align-items:center;gap:10px;flex-wrap:wrap}
.ci{flex:1;min-width:220px;max-width:400px;padding:9px 14px;background:#0F172A;border:2px solid #334155;border-radius:10px;color:white;font-size:14px;outline:none}
.ci:focus{border-color:#3B82F6}
.cb{background:#2563EB;color:white;border:none;padding:9px 20px;border-radius:10px;font-size:14px;font-weight:800;cursor:pointer}
.cb:hover{background:#1D4ED8}
.cdot{width:10px;height:10px;border-radius:50%;background:#475569;flex-shrink:0}
.cdot.on{background:#10B981}
.cst{font-size:12px;color:#94A3B8}
.lbar{background:#1E293B;padding:10px 24px;display:none;align-items:center;gap:12px;flex-wrap:wrap}
.lbar.show{display:flex}
.ltrack{flex:1;min-width:200px;height:8px;background:#334155;border-radius:99px;overflow:hidden}
.lfill{height:100%;background:#3B82F6;border-radius:99px;transition:width .4s}
.ltx{font-size:12px;color:#64748B}
.main{padding:20px 24px}
.err{background:#FEF2F2;border:2px solid #FCA5A5;border-radius:12px;padding:12px 16px;color:#991B1B;font-weight:700;font-size:13px;margin-bottom:16px;display:none}

/* FUNNEL */
.fhero{background:white;border-radius:18px;padding:22px 24px;margin-bottom:18px;box-shadow:0 1px 4px rgba(0,0,0,.06)}
.fhero-title{font-size:14px;font-weight:900;margin-bottom:4px}
.fhero-sub{font-size:12px;color:#94A3B8;margin-bottom:20px}
.fnodes{display:flex;align-items:stretch;gap:0;overflow-x:auto;padding-bottom:4px}
.fnode{flex:1;min-width:120px;display:flex;flex-direction:column;align-items:center;position:relative;padding:0 4px}
.fnode:not(:last-child)::after{content:'→';position:absolute;right:-10px;top:38px;font-size:22px;color:#CBD5E1;font-weight:900;z-index:1}
.fbox{width:100%;border-radius:14px;padding:18px 8px;text-align:center;margin-bottom:8px}
.fnum{font-size:36px;font-weight:900;line-height:1}
.flbl{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;margin-top:6px}
.fbar-w{width:90%;height:6px;background:#E2E8F0;border-radius:99px;overflow:hidden;margin-bottom:4px}
.fbar{height:100%;border-radius:99px;transition:width .9s ease}
.fconv{font-size:10px;color:#94A3B8;font-weight:600;text-align:center}
.f1{background:#EFF6FF}.f1 .fnum{color:#1E3A8A}.f1 .flbl{color:#2563EB}
.f2{background:#F5F3FF}.f2 .fnum{color:#4C1D95}.f2 .flbl{color:#7C3AED}
.f3{background:#FEF3C7}.f3 .fnum{color:#78350F}.f3 .flbl{color:#D97706}
.f4{background:#ECFDF5}.f4 .fnum{color:#064E3B}.f4 .flbl{color:#059669}
.f5{background:#F0FDF4}.f5 .fnum{color:#14532D}.f5 .flbl{color:#15803D}
.f6{background:#FEF2F2}.f6 .fnum{color:#7F1D1D}.f6 .flbl{color:#DC2626}

/* TABS */
.tabrow{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.tab{padding:10px 20px;border-radius:12px;font-size:13px;font-weight:800;cursor:pointer;background:white;color:#64748B;border:2px solid #E2E8F0}
.tab.on.sv{background:#7C3AED;color:white;border-color:#7C3AED}
.tab.on.eg{background:#D97706;color:white;border-color:#D97706}
.tab.on.in{background:#059669;color:white;border-color:#059669}
.sec{display:none}.sec.on{display:block}

/* LAYOUT */
.g2{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-bottom:14px}
.g4{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-bottom:14px}
.card{background:white;border-radius:16px;padding:18px;box-shadow:0 1px 3px rgba(0,0,0,.05)}
.card-h{font-size:13px;font-weight:900;margin-bottom:14px}

/* STAT BOXES */
.sb{border-radius:14px;padding:16px 10px;text-align:center}
.sn{font-size:36px;font-weight:900;line-height:1}
.sl{font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.04em;margin-top:5px}
.c-b{background:#EFF6FF}.c-b .sn{color:#1E3A8A}.c-b .sl{color:#2563EB}
.c-g{background:#ECFDF5}.c-g .sn{color:#064E3B}.c-g .sl{color:#059669}
.c-r{background:#FEF2F2}.c-r .sn{color:#7F1D1D}.c-r .sl{color:#DC2626}
.c-a{background:#FFFBEB}.c-a .sn{color:#78350F}.c-a .sl{color:#D97706}
.c-v{background:#F5F3FF}.c-v .sn{color:#4C1D95}.c-v .sl{color:#7C3AED}
.c-s{background:#F8FAFC}.c-s .sn{color:#1E293B}.c-s .sl{color:#475569}

/* BARS */
.brow{display:flex;align-items:center;gap:8px;margin-bottom:9px}
.brow:last-child{margin-bottom:0}
.bn{font-size:12px;font-weight:700;color:#374151;width:140px;flex-shrink:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.bt{flex:1;background:#F1F5F9;border-radius:99px;height:12px;overflow:hidden}
.bf{height:100%;border-radius:99px}
.bv{font-size:13px;font-weight:900;min-width:32px;text-align:right}

/* ALERTS */
.al{border-radius:10px;padding:11px 14px;display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:8px}
.al:last-child{margin-bottom:0}
.al.red{background:#FEF2F2;border-left:4px solid #EF4444}
.al.ylw{background:#FFFBEB;border-left:4px solid #F59E0B}
.al.grn{background:#F0FDF4;border-left:4px solid #10B981}
.al.blu{background:#EFF6FF;border-left:4px solid #3B82F6}
.at{font-size:12px;font-weight:700}
.av{font-size:18px;font-weight:900}
.red .at{color:#7F1D1D}.red .av{color:#EF4444}
.ylw .at{color:#78350F}.ylw .av{color:#D97706}
.grn .at{color:#064E3B}.grn .av{color:#059669}
.blu .at{color:#1E3A8A}.blu .av{color:#2563EB}
.slbl{font-size:10px;font-weight:900;text-transform:uppercase;letter-spacing:.12em;color:#94A3B8;margin-bottom:10px}
@media(max-width:800px){.g2,.g4{grid-template-columns:1fr 1fr}}
@media(max-width:500px){.g2,.g4{grid-template-columns:1fr}.fnodes{flex-direction:column}.fnode:not(:last-child)::after{display:none}}
</style>
</head>
<body>
<div class="top">
  <h1>📦 InPost Ops — KPI Dashboard</h1>
  <span class="ytd">YEAR TO DATE 2026</span>
</div>
<div class="cbar">
  <input type="password" class="ci" id="tok" placeholder="Paste Pipedrive API token and press Enter"/>
  <button class="cb" onclick="load()">Connect to Pipedrive</button>
  <div id="cdot" class="cdot"></div>
  <span id="cst" class="cst">Not connected</span>
</div>
<div id="lbar" class="lbar">
  <div class="ltrack"><div class="lfill" id="lf" style="width:0"></div></div>
  <span id="ltx" class="ltx">Loading…</span>
</div>

<div class="main" id="main" style="display:none">
  <div id="err" class="err"></div>

  <p class="slbl">Full ops funnel — from handover to live machine</p>
  <div class="fhero">
    <div class="fhero-title">🚀 End-to-End Journey — 2026</div>
    <div class="fhero-sub">How many locations make it from survey through to a live machine?</div>
    <div class="fnodes" id="fnodes"></div>
  </div>

  <div class="tabrow">
    <div class="tab on sv" data-t="sv" onclick="showTab('sv')">📋 Survey</div>
    <div class="tab eg"     data-t="eg" onclick="showTab('eg')">⚙️ E&amp;G</div>
    <div class="tab in"     data-t="in" onclick="showTab('in')">🔧 Installations</div>
  </div>

  <!-- SURVEY -->
  <div class="sec on" id="sec-sv">
    <div class="g4" id="sv-boxes"></div>
    <div class="g2">
      <div class="card"><div class="card-h">🔽 Survey Funnel</div><div id="sv-funnel"></div></div>
      <div class="card"><div class="card-h">📅 Monthly — Completed vs Requested</div><div style="position:relative;height:230px"><canvas id="sv-chart"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="card"><div class="card-h">👥 By Survey Provider</div><div id="sv-prov"></div></div>
      <div class="card"><div class="card-h">🚦 Alerts</div><div id="sv-alerts"></div></div>
    </div>
  </div>

  <!-- E&G -->
  <div class="sec" id="sec-eg">
    <div class="g4" id="eg-boxes"></div>
    <div class="g2">
      <div class="card"><div class="card-h">🔽 E&amp;G Funnel</div><div id="eg-funnel"></div></div>
      <div class="card"><div class="card-h">📅 Monthly — Completed vs Requested</div><div style="position:relative;height:230px"><canvas id="eg-chart"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="card"><div class="card-h">🔧 By E&amp;G Provider</div><div id="eg-prov"></div></div>
      <div class="card"><div class="card-h">🚦 Alerts</div><div id="eg-alerts"></div></div>
    </div>
  </div>

  <!-- INSTALLATIONS -->
  <div class="sec" id="sec-in">
    <div class="g4" id="in-boxes"></div>
    <div class="g2">
      <div class="card"><div class="card-h">🔽 Installation Funnel</div><div id="in-funnel"></div></div>
      <div class="card"><div class="card-h">📅 Monthly Deployments</div><div style="position:relative;height:230px"><canvas id="in-chart"></canvas></div></div>
    </div>
    <div class="g2">
      <div class="card"><div class="card-h">🏢 By Partner Type</div><div id="in-type"></div></div>
      <div class="card"><div class="card-h">🚦 Alerts</div><div id="in-alerts"></div></div>
    </div>
  </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.js"></script>
<script>
const PROXY  = "https://pipedrive-proxy-0nuw.onrender.com";
const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let tok='', charts={};

const F = {
  svDone: '9b3b3995f1f726feaee7fdabbe6c7695ef7d7f09',
  svReq:  '67225c24d04109f7fa56373160b7efeb1ba7b857',
  svSch:  '5751376cbd3ce91828479ecd16f6ab3913b16f9e',
  svProv: '4eeb6232a77052b8f0ad39c199ecf8f2ad0eaa50',
  egReq:  'ad7bee71b88f2813747efc61746be52aff2bac8b',
  egSch:  'f4b5f5248662fce649f697db0cd21dce984b93b4',
  egDone: '625c899d638cf47d9435ed048ab7383264b67771',
  egProv: '040eb4600ed2df829da452a308a2fdf27b76ddaa',
  inSch:  'aacf967fc363fbc73db37cc912b31a2fe343931a',
  inDone: '32ff0cb858015b0b228d36d01092de298f41d117',
  inDep:  '8d746b4699d7c04a646436b0f1ae4d038b048ebd',
  inLive: '071737bd6a90d3afc7b0692a1fcbf81c47a6edc2',
  inFail: '2d1c9283eb6d2cdda5aec4ba91d62e9bdf1c4ceb',
  inRmv:  'fa25efa2dd60a8f4abe4af567d9d3cf5fbf6b978',
  inProv: 'e6c9301c6c4c7751d212727024a1cfa507d13992',
  land:   '0cc4dfd4e72d45a5f0be9b48743a936cfe6c6a2b',
};

const EXT_SV = ['Innova Tech','RICOH','Zelenza','Dominek','ATM','Lab68'];
const y26    = v => !!(v && String(v).startsWith('2026'));
const mOf    = (v,m) => !!(v && String(v).startsWith(`2026-${String(m+1).padStart(2,'0')}`));
const cnt26  = (arr,f) => arr.filter(d => y26(d[f])).length;
const mArr   = (arr,f) => Array.from({length:12},(_,m) => arr.filter(d => mOf(d[f],m)).length);
const pct    = (a,b) => a+b>0 ? Math.round(a/(a+b)*100) : 0;

async function apiPage(path, start=0, limit=500){
  const r = await fetch(`${PROXY}/pipedrive${path}?limit=${limit}&start=${start}`,
    {headers:{'x-pipedrive-token':tok}});
  if(!r.ok) throw new Error('HTTP '+r.status);
  return r.json();
}

// ✅ Uses correct /pipelines/{id}/deals endpoint
async function fetchPipeline(id, maxPages=20){
  let all=[], start=0;
  for(let i=0;i<maxPages;i++){
    const d = await apiPage(`/pipelines/${id}/deals`, start);
    const batch = d.data || [];
    all = all.concat(batch);
    const more = d.additional_data?.pagination?.more_items_in_collection;
    if(!more || batch.length < 500) break;
    start += 500;
  }
  return all;
}

function prog(p,t){
  document.getElementById('lf').style.width = p+'%';
  document.getElementById('ltx').textContent = t;
}

async function load(){
  tok = document.getElementById('tok').value.trim();
  if(!tok) return;
  document.getElementById('err').style.display='none';
  document.getElementById('main').style.display='none';
  document.getElementById('cdot').className='cdot';
  document.getElementById('cst').textContent='Connecting…';
  document.getElementById('lbar').classList.add('show');

  try{
    // Fetch pipelines — smaller ones fully, Live paginated
    prog(5,'Loading Survey pipeline…');   const sv  = await fetchPipeline(2, 20);
    prog(20,'Loading E&G pipeline…');      const eg  = await fetchPipeline(3, 20);
    prog(35,'Loading Installation…');      const in4 = await fetchPipeline(4, 20);
    prog(45,'Loading PUDO Installation…'); const in7 = await fetchPipeline(7, 20);
    prog(55,'Loading APM Live network…');  const lv  = await fetchPipeline(9, 30);
    prog(90,'Building dashboard…');

    const ins = [...in4, ...in7];
    // For counting completions that have moved downstream,
    // collect ALL deals across every pipeline
    const allDeals = [...sv, ...eg, ...ins, ...lv];

    render(sv, eg, ins, lv, allDeals);
    prog(100,'Done ✅');
    setTimeout(()=>document.getElementById('lbar').classList.remove('show'),700);

    const total = allDeals.length;
    document.getElementById('cdot').className='cdot on';
    document.getElementById('cst').textContent=`✅ Live · ${total.toLocaleString()} deals loaded`;
    document.getElementById('main').style.display='block';
  }catch(e){
    document.getElementById('lbar').classList.remove('show');
    document.getElementById('err').textContent='⚠️ '+e.message;
    document.getElementById('err').style.display='block';
    document.getElementById('cst').textContent='Failed';
  }
}

function render(sv, eg, ins, lv, all){
  // ── Key metrics counted across ALL pipelines (date fields travel with deals) ──
  const svDone26 = cnt26(all, F.svDone);  // Survey Completed anywhere
  const svReq26  = cnt26(all, F.svReq);
  const svSch26  = cnt26(all, F.svSch);
  const egReq26  = cnt26(all, F.egReq);
  const egSch26  = cnt26(all, F.egSch);
  const egDone26 = cnt26(all, F.egDone);
  const inSch26  = cnt26(all, F.inSch);
  const inDone26 = cnt26(all, F.inDone);
  const inDep26  = cnt26(all, F.inDep);
  const inLive26 = cnt26(all, F.inLive);
  const inFail26 = cnt26(all, F.inFail);
  const inRmv26  = cnt26(all, F.inRmv);

  // Counts within specific pipeline (still active)
  const svOpen  = sv.filter(d=>d.status==='open').length;
  const svLost  = sv.filter(d=>d.status==='lost'&&y26(d.lost_time)).length + eg.filter(d=>d.status==='lost'&&y26(d.lost_time)&&d[F.svDone]).length;
  const egOpen  = eg.filter(d=>d.status==='open').length;
  const egLost  = eg.filter(d=>d.status==='lost'&&y26(d.lost_time)).length;
  const inOpen  = ins.filter(d=>d.status==='open').length;
  const lvTotal = lv.length;

  const svLostPct   = pct(svLost, svDone26);
  const egFailPct   = pct(inFail26, inDep26);
  const inIssuePct  = pct(inFail26, inDep26);

  // Provider counts (from all pipelines)
  const svProvMap={}, egProvMap={};
  all.filter(d=>y26(d[F.svDone])&&d[F.svProv]).forEach(d=>{const p=d[F.svProv];svProvMap[p]=(svProvMap[p]||0)+1;});
  all.filter(d=>y26(d[F.egDone])&&d[F.egProv]).forEach(d=>{const p=String(d[F.egProv]);egProvMap[p]=(egProvMap[p]||0)+1;});
  const svExt = Object.entries(svProvMap).filter(([n])=>EXT_SV.includes(n)).reduce((s,[,v])=>s+v,0);
  const svInt = svDone26 - svExt;

  // Partner type for installs
  const byType={Chain:0,Franchise:0,Independent:0};
  all.filter(d=>y26(d[F.inDep])).forEach(d=>{
    const t=d[F.land];
    if(t?.includes('Chain')) byType.Chain++;
    else if(t==='Franchise') byType.Franchise++;
    else if(t==='Independent') byType.Independent++;
  });

  // ── FULL FUNNEL ────────────────────────────────────────────
  const steps=[
    {n:'📋 Survey<br>Completed',  v:svDone26, cls:'f2'},
    {n:'⚙️ E&G<br>Requested',    v:egReq26,  cls:'f3'},
    {n:'⚙️ E&G<br>Completed',    v:egDone26, cls:'f3'},
    {n:'📦 Install<br>Scheduled', v:inSch26,  cls:'f4'},
    {n:'✅ Deployed',             v:inDep26,  cls:'f4'},
    {n:'🟢 Live',                 v:inLive26, cls:'f5'},
  ];
  const mx = Math.max(...steps.map(s=>s.v),1);
  document.getElementById('fnodes').innerHTML = steps.map((s,i)=>{
    const prev = i>0?steps[i-1].v:null;
    const cv   = prev&&prev>0?`${Math.round(s.v/prev*100)}% conversion`:'';
    return `<div class="fnode">
      <div class="fbox ${s.cls}">
        <div class="fnum">${s.v.toLocaleString()}</div>
        <div class="flbl">${s.n}</div>
      </div>
      <div class="fbar-w"><div class="fbar" style="width:${Math.round(s.v/mx*100)}%;background:currentColor;opacity:.35"></div></div>
      <div class="fconv">${cv}</div>
    </div>`;
  }).join('');

  // ── SURVEY ─────────────────────────────────────────────────
  document.getElementById('sv-boxes').innerHTML = boxes([
    {v:svReq26,  l:'📩 Survey Requested', c:'c-b'},
    {v:svSch26,  l:'📅 Survey Scheduled', c:'c-a'},
    {v:svDone26, l:'✅ Completed YTD',    c:'c-g'},
    {v:svLost,   l:'❌ Survey Lost',      c:'c-r'},
    {v:svExt,    l:'🏢 External Provider',c:'c-v'},
    {v:svInt,    l:'👷 InPost Team',      c:'c-s'},
    {v:svReq26>0?Math.round(svSch26/svReq26*100)+'%':'—', l:'📊 Req→Sch Rate', c:svReq26>0&&Math.round(svSch26/svReq26*100)<60?'c-r':'c-g'},
    {v:`${svLostPct}%`, l:'🚨 Loss Rate', c:svLostPct>30?'c-r':svLostPct>15?'c-a':'c-g'},
  ]);
  document.getElementById('sv-funnel').innerHTML = funnel([
    {n:'📩 Survey Requested',            v:svReq26},
    {n:'📅 Survey Scheduled',            v:svSch26},
    {n:'✅ Survey Completed',            v:svDone26},
    {n:'❌ Survey Lost (KO/no proceed)', v:svLost},
  ],'#7C3AED');
  document.getElementById('sv-prov').innerHTML = `
    <div style="display:flex;gap:10px;margin-bottom:14px">
      <div class="sb c-v" style="flex:1"><div class="sn" style="font-size:26px">${svExt}</div><div class="sl">🏢 External</div></div>
      <div class="sb c-s" style="flex:1"><div class="sn" style="font-size:26px">${svInt}</div><div class="sl">👷 InPost</div></div>
    </div>
    ${bars(Object.entries(svProvMap).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([n,v])=>({n,v})),'#7C3AED')}`;
  document.getElementById('sv-alerts').innerHTML = alerts([
    {t:svLostPct>30?'red':svLostPct>15?'ylw':'grn', txt:'Survey loss rate (KO/can\'t proceed)', v:`${svLostPct}%`},
    {t:'grn', txt:'Surveys completed YTD (across all pipelines)', v:svDone26},
    {t:'blu', txt:'Currently open in Survey pipeline', v:svOpen},
    {t:svDone26>0?'grn':'ylw', txt:'Moved downstream to E&G', v:egReq26},
  ]);
  mkChart('sv-chart',[
    {label:'Completed',data:mArr(all,F.svDone),backgroundColor:'#7C3AED99',borderColor:'#7C3AED',borderWidth:2,borderRadius:5},
    {label:'Requested',data:mArr(all,F.svReq), backgroundColor:'#C4B5FD44',borderColor:'#A78BFA', borderWidth:2,borderRadius:5},
  ]);

  // ── E&G ────────────────────────────────────────────────────
  document.getElementById('eg-boxes').innerHTML = boxes([
    {v:egReq26,  l:'📩 E&G Requested',   c:'c-b'},
    {v:egSch26,  l:'📅 E&G Scheduled',   c:'c-a'},
    {v:egDone26, l:'✅ Completed YTD',   c:'c-g'},
    {v:egLost,   l:'❌ E&G Lost',        c:'c-r'},
    {v:inFail26, l:'💥 E&G Failed',      c:'c-r'},
    {v:egOpen,   l:'🔵 Active in E&G',  c:'c-s'},
    {v:egReq26>0?Math.round(egSch26/egReq26*100)+'%':'—', l:'📊 Req→Sch Rate', c:'c-a'},
    {v:egDone26>0?`${pct(inFail26,egDone26)}%`:'—', l:'🚨 Failure Rate', c:pct(inFail26,egDone26)>15?'c-r':'c-g'},
  ]);
  document.getElementById('eg-funnel').innerHTML = funnel([
    {n:'📋 Survey Completed (input)',v:svDone26},
    {n:'📩 E&G Requested',          v:egReq26},
    {n:'📅 E&G Scheduled',          v:egSch26},
    {n:'✅ E&G Completed',          v:egDone26},
  ],'#D97706');
  document.getElementById('eg-prov').innerHTML = bars(Object.entries(egProvMap).sort((a,b)=>b[1]-a[1]).slice(0,8).map(([n,v])=>({n,v})),'#D97706');
  document.getElementById('eg-alerts').innerHTML = alerts([
    {t:'grn', txt:'E&G completions YTD (across all pipelines)', v:egDone26},
    {t:egLost>10?'ylw':'blu', txt:'E&G lost — installation not feasible', v:egLost},
    {t:'blu', txt:'Currently active in E&G pipeline', v:egOpen},
    {t:'blu', txt:'Conversion: Survey Completed → E&G Requested', v:`${pct(egReq26,svDone26-egReq26)}%`},
  ]);
  mkChart('eg-chart',[
    {label:'Completed',data:mArr(all,F.egDone),backgroundColor:'#D9770699',borderColor:'#D97706',borderWidth:2,borderRadius:5},
    {label:'Requested',data:mArr(all,F.egReq), backgroundColor:'#FDE68A55',borderColor:'#F59E0B', borderWidth:2,borderRadius:5},
  ]);

  // ── INSTALLATIONS ──────────────────────────────────────────
  document.getElementById('in-boxes').innerHTML = boxes([
    {v:inSch26,  l:'📅 Install Scheduled', c:'c-b'},
    {v:inDone26, l:'🔩 Install Completed', c:'c-g'},
    {v:inDep26,  l:'📦 Deployed YTD',      c:'c-g'},
    {v:inLive26, l:'🟢 Went Live YTD',     c:'c-g'},
    {v:inFail26, l:'💥 Failed',            c:'c-r'},
    {v:inRmv26,  l:'🔴 Removed YTD',      c:'c-r'},
    {v:inOpen,   l:'🔵 Active in Install', c:'c-s'},
    {v:`${inIssuePct}%`, l:'🚨 Issue Rate', c:inIssuePct>10?'c-r':inIssuePct>5?'c-a':'c-g'},
  ]);
  document.getElementById('in-funnel').innerHTML = funnel([
    {n:'⚙️ E&G Completed (input)',  v:egDone26},
    {n:'📅 Installation Scheduled', v:inSch26},
    {n:'🔩 Installation Completed', v:inDone26},
    {n:'📦 Machine Deployed',       v:inDep26},
    {n:'🟢 Machine Live',           v:inLive26},
  ],'#059669');
  document.getElementById('in-type').innerHTML = bars([
    {n:'⛓️ Chain',       v:byType.Chain},
    {n:'🏪 Franchise',   v:byType.Franchise},
    {n:'🧍 Independent', v:byType.Independent},
  ],'#059669');
  document.getElementById('in-alerts').innerHTML = alerts([
    {t:'grn', txt:'Machines deployed YTD', v:inDep26},
    {t:'grn', txt:'Machines went live YTD', v:inLive26},
    {t:inIssuePct>5?'ylw':'grn', txt:'Installation issue rate', v:`${inIssuePct}%`},
    {t:inRmv26>0?'ylw':'grn', txt:'Machines removed YTD', v:inRmv26},
  ]);
  mkChart('in-chart',[
    {label:'Deployed',data:mArr(all,F.inDep), backgroundColor:'#05996999',borderColor:'#059669',borderWidth:2,borderRadius:5},
    {label:'Live',    data:mArr(all,F.inLive),backgroundColor:'#D1FAE555',borderColor:'#34D399',borderWidth:2,borderRadius:5},
  ]);
}

// ── Helpers ────────────────────────────────────────────────────────────
function boxes(items){
  return items.map(i=>`<div class="sb ${i.c}"><div class="sn">${typeof i.v==='number'?i.v.toLocaleString():i.v}</div><div class="sl">${i.l}</div></div>`).join('');
}
function funnel(steps,color){
  const mx=Math.max(...steps.map(s=>s.v),1);
  return steps.map((s,i)=>{
    const prev=i>0?steps[i-1].v:null;
    const cv=prev&&prev>0?`↳ ${Math.round(s.v/prev*100)}% from previous step`:'';
    return `<div style="margin-bottom:12px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:3px">
        <span style="font-size:12px;font-weight:700;color:#374151">${s.n}</span>
        <span style="font-size:16px;font-weight:900;color:${color}">${s.v.toLocaleString()}</span>
      </div>
      <div style="background:#F1F5F9;border-radius:99px;height:14px;overflow:hidden;margin-bottom:2px">
        <div style="width:${Math.round(s.v/mx*100)}%;height:100%;border-radius:99px;background:${color};transition:width .9s"></div>
      </div>
      <div style="font-size:10px;color:#94A3B8;text-align:right">${cv}</div>
    </div>`;
  }).join('');
}
function bars(items,color){
  if(!items.length||!items[0].v) return `<p style="color:#94A3B8;font-size:13px">No data yet</p>`;
  const mx=Math.max(...items.map(i=>i.v),1);
  return items.map(i=>`<div class="brow">
    <span class="bn" title="${i.n}">${i.n}</span>
    <div class="bt"><div class="bf" style="width:${Math.round(i.v/mx*100)}%;background:${color}88"></div></div>
    <span class="bv" style="color:${color}">${i.v}</span>
  </div>`).join('');
}
function alerts(items){
  return items.map(i=>`<div class="al ${i.t}"><span class="at">${i.txt}</span><span class="av">${typeof i.v==='number'?i.v.toLocaleString():i.v}</span></div>`).join('');
}
function mkChart(id,datasets){
  if(charts[id]) charts[id].destroy();
  charts[id]=new Chart(document.getElementById(id),{
    type:'bar',data:{labels:MONTHS,datasets},
    options:{responsive:true,maintainAspectRatio:false,
      plugins:{legend:{position:'top',labels:{font:{size:11},padding:10,boxWidth:10}}},
      scales:{x:{grid:{display:false},ticks:{font:{size:10}}},
              y:{beginAtZero:true,ticks:{font:{size:10}},grid:{color:'#F8FAFC'}}}}
  });
}
function showTab(id){
  document.querySelectorAll('.sec').forEach(s=>s.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  document.getElementById('sec-'+id).classList.add('on');
  document.querySelector(`.tab[data-t="${id}"]`).classList.add('on');
}
document.getElementById('tok').addEventListener('keydown',e=>{if(e.key==='Enter')load();});
</script>
</body>
</html>
