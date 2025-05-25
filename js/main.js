document.addEventListener('DOMContentLoaded', () => {
    // --- GLOBAL DATA & HELPERS (for PIPs primarily) ---
    const productInfoPages = [

                // Single Oils
        { name: "Arborvitae", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=djjn7hdav56in8cao8akvfgq0d&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Balsam Fir", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=39r3mpkr9h5cdaiar9uojjpu3j&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Basil", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cb34reouqp7c19qlh6m31p9907&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Bergamot", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2qc5ud16414ipepipu6aj8u96f&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Bergamot Mint", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=9m78ussvgl1qrb8nfap6lhh228&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Birch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0mki1gjlpl1514dsa77k4gju5l&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Black Pepper", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=967khklav95nn8604s0k3lk97j&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Black Spruce", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=i3pca9p1q91vt2vclg6fl87v55&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Blue Lotus Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8074udmh1d49r7paq0tk4m3t3p&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Blue Tansy", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=i59n55j2k51o744a8totec1f5i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cardamom", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=een0m7epap3rhfk7inb2t6qd73&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cassia", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1963rnpdm96bd39d44dr5a3347&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cedarwood", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=t9nvi3a6bh7a3eku4qhepnkg0k&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Celery Seed", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=c6ide2u2bd2d1c0rjhs0776825&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cilantro", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ik0a86v5op3g716ir96a8mbf19&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cinnamon Bark", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tv4fki65th4spepnbqqth5jm4s&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Citronella", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=j0quq412vp4hhe9gioju1ppo3b&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Clary Sage", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=bp0o2ohbt14jv5vo3pr1jk0u3a&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Clove", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=lb08865sit0vt3m8d1fkjm0e3m&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Copaiba", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5dhtqd0l250otccm0mfsiri56p&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Copaiba Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=l0rg1ef2l11o35ast2f4t7kr11&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Coriander", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=b0anosark11npae4rm4l1h256j&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Cypress", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=j0i03r9hld3jb8ild1u1eien10&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Davana Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1o8arurps953r6tuj9h28hm22t&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Douglas Fir", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=k364v9kakp5rd1a4v7uvifqc1h&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Eucalyptus", url: "https://media.doterra.com/us/en/pips/doterra-eucalyptus-essential-oil.pdf?_ga=2.264465738.43890706.1748179522-1276305428.1744737881", category: "Single Oils" },
{ name: "Fennel ( sweet)", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=b23195fbgt2dffas3edf2up277&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Frankincense", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5at6aj9enl00jevvsgo8eq242b&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Frankincense Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7psamb2uhh2nh24g0tdd4bmt38&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Gardenia", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ski84scot50frcqa0r7u40tu46&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Geranium", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=t9hhf7q8fp7d15hiiak2v5ga4o&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Ginger", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=jl3gprokvh01j62km2ick2407k&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Grapefruit", url: "https://media.doterra.com/us/en/pips/doterra-grapefruit-essential-oil.pdf?_ga=2.63194602.43890706.1748179522-1276305428.1744737881", category: "Single Oils" },
{ name: "Green Mandarin", url: "https://media.doterra.com/eu/en/pips/green-mandarin-oil.pdf", category: "Single Oils" },
{ name: "Guaiacwood", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=53fuetn6k153tabk6shg7ld10u&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Helichrysum", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=506blir42l7pl79pmbmebakf3o&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Helichrysum Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=er8vc3sgod0ch01rfdv60kle0q&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Hinoki", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ovr6a2mol52dr7qt9mrhppl76t&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Iliahi (Hawaiian Sandalwood)", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ghgd46poct0u7edquou2kjbc4o&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Jasmine", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kc66ktqrb90r5blknicdhso75f&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Jasmine Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=t830i9kdsl74neuote9t5os156&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Juniper Berry", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=f6i246esoh45l9eae0unj7q073&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lavender", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=g72iokmsrp1gjatcvn3ap9qo51&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lavender Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3iseknk8it4v77k3fjtdbks94q&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lemon", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=k5vo20i3mh1bbbmv0rqk4rif49&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lemon Eucalyptus", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=6hpuucuinl58v92otlto5o8a27&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lemongrass", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3j7pqt3ao57t1ea0pqaeaejc76&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Lime", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=4291j4q1qp2579ribo4d9ld63m&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Madagascar Vanilla", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=195nfpe2st0ud7o97fosaqn80c&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Magnolia Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=drbshd6gad5r52ihuus1bt8v17&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Marjoram", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=n7bl8rbqr13a32pok1e1oamt5s&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Melissa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mcd89l6k114db2p6mocjakdh58&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Myrrh", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=p1ecrf6jel2vh4ka1pmv5dln6u&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Myrrh Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kp86ncf75t5990i430p4cp4r3i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Naio Wood", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=693lttmtdp1f39b7ad58lspe4q&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Neroli Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cau2pfm0hl5opf1cd1i9lv1s7h&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Niaouli", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7qi9n5jrd95cn4ic5mbvchjs52&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Oregano", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0r764j1nk96032mts43u7dah6g&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Oregano Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=m202rdna993hp9vbpq1114ko3e&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Osmanthus Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ruegukufgh0hpclugiku6c584h&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Patchouli", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=g3kriuam5d4mt8e7v8m9ta5d6k&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Peppermint", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=77ia8gmu517hb9hp1fbn3c1i5s&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Peppermint Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rbjcluhind3ap90kk4vum74b2b&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Petitgrain", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1gb44i6t9d2in335o6qklijt24&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Pink Pepper", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=35eor2dr8h0l125f247nhduj50&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Ravintsara", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rlc7eo9ti50qr12dj57litlf6o&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Roman Chamomile", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=p68bti4thd0q3fik3t2e0gfd4t&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Rose", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5gq9a26d9h6r59ai4q4p7avg6b&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Rose Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=22fg6oq02h0k12be71t9mk734m&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Rosemary", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=aj13ar0nb142ld7mfb1al2pk4i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Sandalwood", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8dgeb3h31171d6kmsntb4vq16t&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Siberian Fir", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=dp9k979sph2vh6f5lr17fls30j&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Spanish Sage", url: "https://media.doterra.com/us/en/pips/spanish-sage-oil.pdf?_ga=2.89940318.43890706.1748179522-1276305428.1744737881", category: "Single Oils" },
{ name: "Spearmint", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=vb9ohutq1121h9hln4uialnd1l&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Spikenard", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=o4hlmtohl55kf9nvdfnagr8164&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Tangerine", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rj5dfei3et44l5fl1jff9peo1i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Tea Tree (Melaleuca)", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=6frbom1sld2mfcdie5jnq8d474&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Tea Tree (Melaleuca) Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=eadpp3bhvh0qve124r9t11r63b&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Thyme", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=aat7r1dnil5erbmlj54vg1c52i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Tulsi (Holy Basil)", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5uvotsn51t6l1eh87f9utnkv7s&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Turmeric", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7460j1qhap6cp38gneaa66n27s&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Vetiver", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5vpn301v991p5a2h0f7ar53m53&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Vetiver Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0cmtnte4f542f8q7khnf02dk51&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Wild Orange", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=o5e72vfff93epdbq4ask2t7d1i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Wintergreen", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=gm00dnj2ot4vd70o3uaiktjv1i&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Yarrow|Pom", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=83h7t087bp5qhckmgc81rqc00t&suffix=pdf&print=1", category: "Single Oils" },
{ name: "Ylang Ylang", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mp1tcpn9vl7n57vgqpidd4p01p&suffix=pdf&print=1", category: "Single Oils" },



        // Proprietary Blends
        { name: "abōde - Refreshing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cvfe39sv1908v0gaml7n5ul26n&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Adaptiv  - Calming Bath Oil", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rltkmf8m6l7jvakptamep39c1a&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Adaptiv - Calming Blend Capsules", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1ajo3fe7sh7kl1hro66hqoge3s&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Adaptiv Touch - Calming Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=784lg504lh2rh8hb7h1d5hds10&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Air - Europe - Clear Blend", url: "https://media.doterra.com/eu/en/pips/doterra-air-oil.pdf", category: "Proprietary Blends" },
{ name: "Air - Europe - Touch", url: "https://media.doterra.com/eu/en/pips/doterra-air-touch-oil.pdf", category: "Proprietary Blends" },
{ name: "Align - Centring Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=a57sdsd43l70tc6bct2vm0221u&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Amazon Escape - Rainforest Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=063h3fq9vl7pnfl7ugh8g2pi4j&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Anchor - Steadying Blend", url: "https://media.doterra.com/us/en/pips/doterra-anchor.pdf?_ga=2.260196936.43890706.1748179522-1276305428.1744737881", category: "Proprietary Blends" },
{ name: "Arise - Enlightening Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7dbvnfrhq9569aia92066i9p6v&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "AromaTouch - Massage Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rqi82sk9p96cb66491lcfrdl2a&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Balance - Grounding Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=32dmqccmqt7415j4h2rnstiu2d&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Balance Touch - Europe", url: "https://media.doterra.com/eu/en/pips/doterra-balance-touch-oil.pdf", category: "Proprietary Blends" },
{ name: "Beautiful - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=vfha9jhlol4134oodv8mirq33e&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Becoming Touch - 2023 Convention Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=4mu808ns711sf2cl0dh84v6m5d&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Brave - Courage Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=lnj0bbkehl2bp9uk6earu0qk01&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Breathe - Respiratory Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=aupuqm0ast3f3e31tpug5vi90p&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Breathe Touch - Respiratory Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=v509pfrr9l6hh341rumo2cf52s&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Calmer - Restful Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=c838hriuv57977trqht50s464n&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Cheer - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tqbmd9ulbl4ap981dst75jr22u&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Cheer - Uplifting Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=h2706vq4392mtc2qenqe5dh44b&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Citrus Bliss - Invigorating Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=b9dpujh96d2a3c91chcikouu2h&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Citrus Bloom - Springtime Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tvrrvh17e91pl04ndq678ujk1s&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "ClaryCalm - Solace Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=437aao1vi15r17i79bhgb3pe79&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Console - Comforting Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8sje6psvp17ap3q5u8qmbsvb4v&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Console - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5lt7kittlt2ib7fmfou623al5q&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Costa Brio - Enlivening Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=fsok87807l451alnofkqfhm82o&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Costa Brio - Enlivening Blend with Car Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kggd2dgs650pv80sn506dbgp0t&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Costal Escape - Seaside Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=eljabjamrt6ajd0vgc5mng1c52&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "DDR Prime - Europe - Renewal Blend", url: "https://media.doterra.com/eu/en/pips/ddr-prime-oil.pdf", category: "Proprietary Blends" },
{ name: "DDR Prime - Europe - Softgels", url: "https://media.doterra.com/eu/en/pips/ddr-prime-softgels.pdf", category: "Proprietary Blends" },
{ name: "DDR Prime - Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rvi3qgm7qt6r93crekf1rl1c3n&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Deep Blue - Soothing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2n8dqnaq0t6eb0asb49ucu3o7o&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Deep Blue Roll-On - Europe", url: "https://media.doterra.com/eu/en/pips/deep-blue-oil-roll-on.pdf", category: "Proprietary Blends" },
{ name: "Deep Blue Touch - Europe", url: "https://media.doterra.com/eu/en/pips/deep-blue-touch-oil.pdf", category: "Proprietary Blends" },
{ name: "DigestZen - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1cjm4obv4t4dn1cpo5kdejh11a&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "DigestZen Oil - Digestive Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=nlsh9k4otp6nfejim7odpp8f46&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Endless Summer - Sunshine Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=absa96psj53jdel2cstkc5p058&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Forgive - Renewing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8ebcv9gv9l2avdsmajpqn5r92l&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Forgive - Touch", url: "https://media.doterra.com/us/en/pips/doterra-forgive-touch-essential-oil-blend.pdf?_ga=2.264465738.43890706.1748179522-1276305428.1744737881", category: "Proprietary Blends" },
{ name: "Harvest Spice - Gathering Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hhcb7d60g133t9qfam5ouah41s&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Hope - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7sddkbhsgh3q339cabmve8qr7u&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Hygge - Cozy Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=emdme1isbl6epd7ai5c9pgfr24&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "InTune - Focus Blend Roll-on", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2obi6arru11jp0eb5foj7i382u&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Island Mint - Summertime Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=svprv8por15tb76ri0bg14vi3t&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Mālama - Nurturing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mhmnu568fp5f9evdejeifbrb0k&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Motivate - Encouraging Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5npa95jobt52jcfe1b61dphp1r&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Motivate - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=4gfjf7m2lt14pbjs6u89habg5t&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Northern Escape - Woodland Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mt7f6i2nct49l64n3825cok76p&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Passion - Inspiring Blend", url: "https://media.doterra.com/us/en/pips/doterra-passion-essential-oil-blend.pdf?_ga=2.67413716.43890706.1748179522-1276305428.1744737881", category: "Proprietary Blends" },
{ name: "Passion - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2o7qp230ot35p4e4rj1kpql01g&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "PastTense - Tension Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3jedql2ovt24defc4n0ghnq17d&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "PastTense Touch Original Blend - Relaxation Blend - Europe", url: "https://media.doterra.com/eu/en/pips/pasttense-original-blend-oil.pdf", category: "Proprietary Blends" },
{ name: "Peace - Reassuring Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=eh5ifoj21d5i36rg5af0r7ak5q&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Peace - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=42vg2fq8i120lenft7qt8hqu43&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Purify - Refreshing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8eajs2sr5h0e9ebvjhkeamll77&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Reclaim - 2024 Convention Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=9h65c5f9bh2ah2cb3ioo0nk52c&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Rescuer - Soothing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=virjh7e9a52b59dh2ug0ecfc27&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Serenity - Restful Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ret054i5sd57b3uqelgssmp86v&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Serenity - Restful Complex Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=jhsouk1d7h169djo3k5dli0c6v&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Serenity - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=id0vqt9c8l4mv91gul8ped4049&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Shinrin-Yoku - Forest Bathing Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2r5kg5kkk56j1be7icnrt3ub4s&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Shinrin-Yoku - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ti3oaqt8o118d04qr56tqolj5d&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Steady - Grounding Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7uloi7guml649eenpebhr1q603&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Stronger - Protective Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=9juooinv856314blbari4uho05&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Sunny Citrus - Summertime Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8qousdb1m56lrf1ggcau1ip02o&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "SuperMint - Mentha Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ejs0h187310j3bcrl1lfu6s87f&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "SuperMint - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=92t45tu75p19d3mtv060kk630j&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "SuperMint Beadlets - Food Supplement with Essential Oils and Sweetener", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=p3fps9dmit3ld95pvtln9o1432&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Tamer - Digestive Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=bjq4cqj05p4474rp7t772s9s04&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "TerraShield Duo - Repellent Blends", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=onb64hsq0l095b883nkhmgle4m&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Thinker - Focus Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=nsmntd28oh2ul2l4cpkc68sv50&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Vanilla Chai - Spiced Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=jitg5haus513b1ve8pjdvfnr2v&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Vineyard Escape - Countryside Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=4772q0farp5ll65bgqkebknd18&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Whisper - Touch", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=js4bp3mrhl0jrduthioo6viq1g&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Yule Log - Inviting Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=c099ie5pgt7e12sp7hssr3b30o&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Zendocrine - Detoxification Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=aablrjfq651an4l7hfnccs7b5r&suffix=pdf&print=1", category: "Proprietary Blends" },
{ name: "Zendocrine - Europe - Softgels", url: "https://media.doterra.com/eu/en/pips/zendocrine-softgels.pdf", category: "Proprietary Blends" },
{ name: "ZenGest - Europe - Softgels", url: "https://media.doterra.com/eu/en/pips/zengest-softgels.pdf", category: "Proprietary Blends" },
{ name: "ZenGest - Europe - Supportive Blend", url: "https://media.doterra.com/eu/en/pips/zengest-oil.pdf", category: "Proprietary Blends" },
{ name: "ZenGest - Europe - Touch", url: "https://media.doterra.com/eu/en/pips/zengest-touch-oil.pdf", category: "Proprietary Blends" },

        

        // Sun Care
        { name: "Sun After Sun Body Spray - After Sun Body Spray", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=i6saoqn7ql1a72eacceag07i3q&suffix=pdf&print=1", category: "Sun Care" },
{ name: "Sun Body Mineral Sunscreen Spray - SPF 30, 170 ml", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rosj45h03509v5fqsqjoahuq5m&suffix=pdf&print=1", category: "Sun Care" },
{ name: "Sun Face + Body Mineral Sunscreen Lotion - UVA Protection SPF30, 150 ml", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=c6g9nejm3163pao3nqomftq86g&suffix=pdf&print=1", category: "Sun Care" },
{ name: "Sun Face + Body Mineral Sunscreen Stick - UVA Protection SPF 30, 50g", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=o7kihf35i16ddd1iksr7n11g47&suffix=pdf&print=1", category: "Sun Care" },
{ name: "Sun Face Mineral Sunscreen Daily Moisturiser - UVA/UVB Protection SPF 30", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2ggh2nr75l6o34omeihb5id54h&suffix=pdf&print=1", category: "Sun Care" },
{ name: "Sun Lip Balm - UVA/ UVB Protection SPF 15", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=n3cs3rg2dl025012q5m8f0h54p&suffix=pdf&print=1", category: "Sun Care" },



        // MetaPWR™
        

{ name: "MetaPWR - Metabolic Assist", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=pcgp1hlrtl2h590rfu25mh6u0b&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR - Metabolic Blend Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=q246amftcl6or751rk2r8esb23&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR - Metabolic Essential Oil Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ln49o7eccl1bj7o38khu2jut4b&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR - Metabolic System Collection", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=uieu4d73hd3gba20auoph4in3d&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR - Satiety Gum", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=57lmn5hvoh0ot09seg3gisvn13&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR Advantage with Collagen + NMN (Pomegranate-Cherry/Lemon-Orange)", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=opv7begqap23l0otmt0amb9s0e&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR Beadlets - Metabolic Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=h6b359lotl4on42gqran43n51e&suffix=pdf&print=1", category: "MetaPWR" },
{ name: "MetaPWR Mito2Max Energy and Stamina Complex", url: "https://media.doterra.com/us/en/pips/metapwr-mito2max.pdf?_ga=2.55864814.43890706.1748179522-1276305428.1744737881", category: "MetaPWR" },
{ name: "MetaPWR Recharge Electrolyte Mix (Lemon-Lime / Wild Strawberry)", url: "https://media.doterra.com/us/en/pips/metapwr-recharge.pdf?_ga=2.257130958.43890706.1748179522-1276305428.1744737881", category: "MetaPWR" },{ name: "Europe - MetaPWR Essential Oil Blend", url: "https://media.doterra.com/eu/en/pips/metapwr-oil.pdf", category: "MetaPWR" },
{ name: "Europe - MetaPWR Softgels", url: "https://media.doterra.com/eu/en/pips/metapwr-softgels.pdf", category: "MetaPWR" },
{ name: "Europe - MetaPWR Advantage", url: "https://media.doterra.com/eu/en/pips/metapwr-advantage.pdf", category: "MetaPWR" },
{ name: "Europe - MetaPWR Assist", url: "https://media.doterra.com/eu/en/pips/metapwr-assist.pdf", category: "MetaPWR" },
{ name: "Europe - MetaPWR Beadlets", url: "https://media.doterra.com/eu/en/pips/metapwr-oil-beadlets.pdf", category: "MetaPWR" },
{ name: "Europe - MetaPWR Recharge", url: "https://media.doterra.com/eu/en/pips/metapwr-recharge.pdf", category: "MetaPWR" },




        // OnGuard™
        { name: "On Guard - Beadlets", url: "https://media.doterra.com/us/en/pips/doterra-onguard-beadlet.pdf?_ga=2.264414538.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Chewable Tablets", url: "https://media.doterra.com/us/en/pips/on-guard-chewable-tablets.pdf?_ga=2.67413716.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Cleaner Concentrate", url: "https://media.doterra.com/us/en/pips/doterra-onguard-cleaner-concentrate.pdf?_ga=2.67413716.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Drops", url: "https://media.doterra.com/us/en/pips/on-guard-chewable-tablets.pdf?_ga=2.264414538.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Essential Oil Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=v8ao76u85l56lbshfc25rg105a&suffix=pdf&print=1", category: "On Guard" },
{ name: "On Guard - Europe - Beadlets", url: "https://media.doterra.com/eu/en/pips/onguard-oil-beadlet.pdf", category: "On Guard" },
{ name: "On Guard - Foaming Hand Wash", url: "https://media.doterra.com/us/en/pips/doterra-onguard-foaming-hand-wash.pdf?_ga=2.96759258.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Foaming Hand Wash Concentrate", url: "https://media.doterra.com/eu/en/pips/on-guard-foaming-hand-wash-concentrate.pdf", category: "On Guard" },
{ name: "On Guard - Hand Purifying Mist", url: "https://media.doterra.com/us/en/pips/onguard-sanitizing-mist.pdf?_ga=2.60539624.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Hand Sanitizing Gel", url: "https://media.doterra.com/us/en/pips/on-guard-hand-sanitizing-gel.pdf?_ga=2.96759258.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Hand Wipes", url: "https://media.doterra.com/us/en/pips/doterra-on-guard-sanitizing-wipes-50pk.pdf?_ga=2.89883998.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Laundry Detergent", url: "https://media.doterra.com/us/en/pips/doterra-on-guard-laundry-detergent.pdf?_ga=2.89883998.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Mouthwash", url: "https://media.doterra.com/us/en/pips/doterra-on-guard-mouthwash.pdf?_ga=2.256552270.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Protecting Throat Drops", url: "https://media.doterra.com/us/en/pips/on-guard-throat-drops.pdf?_ga=2.101289540.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Protective Blend Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=atbn0bg0u528hb8fo4ai5rgd36&suffix=pdf&print=1", category: "On Guard" },
{ name: "On Guard - Touch", url: "https://media.doterra.com/us/en/pips/doterra-onguard-touch-essential-oil-blend.pdf?_ga=2.92947928.43890706.1748179522-1276305428.1744737881", category: "On Guard" },
{ name: "On Guard - Whitening Toothpaste", url: "https://media.doterra.com/us/en/pips/on-guard-toothpaste.pdf?_ga=2.92947928.43890706.1748179522-1276305428.1744737881", category: "On Guard" },



        // Holiday
        { name: "Diffusing Garland - Holiday", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=a8usit84kp6kb9ivff2q4pk13r&suffix=pdf&print=1", category: "Holiday" },
{ name: "Holiday Baking Set - Baking Spice Cuisine Blend with Two Cookie Cutters", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=9feepado6h3kr24q9lgatoba4e&suffix=pdf&print=1", category: "Holiday" },
{ name: "Holiday Joy - Holiday Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=befd4ppv0t7o30u39rdrs34o7t&suffix=pdf&print=1", category: "Holiday" },
{ name: "Holiday Love - Holiday Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=63u52131hh2e9dv56jbuhrsq4h&suffix=pdf&print=1", category: "Holiday" },
{ name: "Holiday Peace - Holiday Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cn9or6thn14orere6mdre9md3c&suffix=pdf&print=1", category: "Holiday" },
{ name: "Holiday Trio - Joy, Peace & Love ", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=fhfmenl47p43120m9gv210uc7t&suffix=pdf&print=1", category: "Holiday" },



        // Skin Care & Body
        { name: "Amāvī  - Discovery Set", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hihog4gull79t0p7ftn56utd76&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Anti-Aging Eye Cream - Essential Skin Care", url: "https://media.doterra.com/us/en/pips/doterra-anti-aging-eye-cream.pdf?_ga=2.97217114.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Anti-Aging Moisturiser - Essential Skin Care", url: "https://media.doterra.com/us/en/pips/doterra-anti-aging-moisturizer.pdf?_ga=2.97217114.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Balance - Deodorant", url: "https://media.doterra.com/us/en/pips/doterra-natural-deodorant-balance.pdf?_ga=2.256608846.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Balance Bath Bar - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=13njojcfrh0lv48rh9kb3l710b&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Brightening Gel - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tjsje2qv5d3lh611sa037ou17k&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Citrus Bliss  - Invigorating Bath Bar", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=lmkmsgtpq927b64l2g3h196g7o&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Citrus Bliss - Deodorant", url: "https://media.doterra.com/us/en/pips/natural-deodorant-douglas-fir-greek-orange.pdf?_ga=2.264455626.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Citrus Bliss - Hand Lotion", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=l24tos6cpd0q3f2sqerd7gvn77&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Correct-X - Essential Ointment", url: "https://media.doterra.com/us/en/pips/doterra-correct-x.pdf?_ga=2.264455626.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Daily Conditioner - Daily Conditioner 500ml", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3jvbvck1cl3hf0oe329gvrsp0d&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Deodorant - Infused with Balance", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3q93jqq7mp3kjd8qe3rl5akg3d&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Deodorant - Infused with Douglas Fir and Greek Orange", url: "https://share.doterra.com/v/DigitalMarketingKit/album/NATHL?display=curatedView&viewIndex=2&gSortingForward&gOrderProp=name&referenceTo=&from=curatedView&filter=%7B%22meta_multichoice_2.keyword%22:%22PIPs%22%7D&column=document&id=r4036hmnsp0kn3vohcfjjmr34f", category: "Skin Care & Body" },
{ name: "Detoxifying Mud Mask - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8q3m1cbuvh6olbkg0dpiifl57n&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Exfoliating Body Scrub - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=up0nd4956d3p75i1hln3vt1j7a&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Facial Cleanser - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=qkpj2spnop4bl1bji1i5nbll29&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Facial Kit - HD Clear", url: "https://media.doterra.com/eu/en/pips/hd-clear-kit.pdf", category: "Skin Care & Body" },
{ name: "Facial Lotion - HD Clear", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=f31b70btkp2t3dopifephd3i6f&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Gardenia Restorative Hand Cream - Infused with Floral Gardenia Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=d01tbnb2f97q3b3jj0fmp9783i&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Ginger - Tinted Lip Gloss", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ph1nrv22m56hbcir3u1fqgnm5v&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Hair - Conditioner Strengthening Bar", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=sv88av4ogp3994c7hnavlfo85u&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Hair Care Trio - Daily Conditioner, Protecting Shampoo & Leave-In Conditioner", url: "https://media.doterra.com/eu/en/pips/hair-care-trio.pdf", category: "Skin Care & Body" },
{ name: "Hair, Beard, and Skin Oil - with Balance", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tv0j8h0mjl4fp7a73d1j7qop31&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Hand & Body Lotion - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=uk86vfvgdp14f5mngujptbgi3g&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "HD Clear - Topical Blend", url: "https://media.doterra.com/us/en/pips/doterra-hd-clear-essential-oil-blend.pdf?_ga=2.97216986.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Hydrating Body Mist - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ajmbvapgkd5pdf2ig49qfmp85e&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Hydrating Cream - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1g2fbdm0u96mr4i31c6ms16k7e&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Immortelle - Anti-Aging Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=qsn51mqme1347674pvmbsm5u5d&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Invigorating Scrub - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=j9ghjojo4d4hp5lu594rtp6g2f&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Leave-In Conditioner - Leave-In Conditioner 237ml", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kfmgdio3ld03hej5m71cvcqj4b&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Lip Balm Variety - dōTERRA Spa", url: "https://media.doterra.com/us/en/pips/doterra-spa-lip-balm.pdf?_ga=2.257714766.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Majestic Lore - Essential Oil Personal Aroma", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7tk7f6pt4d7fn8abb7albban5r&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Mālama - Moisturizing Bath Bars", url: "https://share.doterra.com/v/DigitalMarketingKit/album/NATHL?display=curatedView&viewIndex=2&gSortingForward&gOrderProp=name&referenceTo=&from=curatedView&filter=%7B%22meta_multichoice_2.keyword%22:%22PIPs%22%7D&column=document&id=ja5n4iij4t3vv2em23ddaefn0i", category: "Skin Care & Body" },
{ name: "Mālama - Restorative Hand Cream", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=74he07oqbd4pnaedt0u7vnp01c&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Midnight Forest - Bath Bars", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=18rkdampr917v8vf2nqs4obf17&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Moisturising Bath Bar - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=efldrbqg8p2739dv28p8ndk556&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Moringa Rose - Nourishing Oil", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=dpsiq4rq2d1cp8e6h1vok9tv0m&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Pore Reducing Toner - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=j1jqu0e60d4r7bngs8o23ip921&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Protecting Shampoo - Protecting Shampoo 500ml", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=38lv97bvbl369de04ogkc4sk5d&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Refreshing Body Wash - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=a6djdc9nkd4m97hfbphuoh8c13&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Replenishing Body Butter - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=fv183b1e290adbh4tfdkcp1v1b&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Rose - Hand Lotion", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=d1fe9ed26h35ncc95f4v9u7g5o&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Rose - Hydrosol Mist", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=h11g7hmpap7sf7k5knce701k5j&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Salon Essentials Root to Tip Serum - Root to Tip Serum", url: "https://media.doterra.com/us/en/pips/doterra-root-to-tip-serum.pdf?_ga=2.21073278.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Salubelle Beauty Blend - Europe", url: "https://media.doterra.com/eu/en/pips/salubelle-oil.pdf", category: "Skin Care & Body" },
{ name: "Serenity Bath Bar - dōTERRA Spa", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mevh59cr6h25t2hf3i4kr0rb2u&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Shampoo Strengthening Bar - Hair", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=t9bbdrjhmh3tbab7r8ndeaic1s&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Shea Butter Collection - Unscented Balm", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=n4h7e396ep4rba9vd52ajf6g37&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Tightening Serum - Essential Skin Care", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=62nvd7o5712197kprampi43d6u&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Veráge - Cleanser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0qi235q74l71d4t7tmhqohgp39&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Veráge - Immortelle Hydrating Serum", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=opvdoi0nl958v1gvk7ga7bfv6i&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Veráge - Moisturizer", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=krpih2m1nt0gr1spcp049j8d5n&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Veráge - Toner", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hmfl4euqut3bh5ucfhnf9m8d3a&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Yarrow|Pom - Body Renewal Serum", url: "https://media.doterra.com/us/en/pips/doterra-yarrow-pom-body-renewal-serum.pdf?_ga=2.97216986.43890706.1748179522-1276305428.1744737881", category: "Skin Care & Body" },
{ name: "Yarrow|Pom - Cellular Beauty Complex Capsules", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=1uac2vsvj90499214rsra8gs4j&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Yarrow|Pom - Eye Mask & Active Botanical Nutritive Duo", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=55hktg6tvl0g11hklo4fco4o2f&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Yarrow|Pom - Revitalizing Eye Mask", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=49ccs7l83p7thatpvauamt657k&suffix=pdf&print=1", category: "Skin Care & Body" },
{ name: "Yarrow|Pom - Travel Collection", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=k3k0tsaof570b3445k35k77u51&suffix=pdf&print=1", category: "Skin Care & Body" },



        // Supplements & Wellness
        { name: "A2Z Chewable Tablets", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=viiqg9rrh50f7fthj8p27emg26&suffix=pdf&print=1", category: "Supplements & Wellness" },
        { name: "Alpha CRS+ - Food Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ah4ojm8sbl1jderdt4epbh1k5j&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Breathe - Respiratory Drops", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rl8vsbv55h0d946ofqjprumu22&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Cinnamon  - Drops", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8n9i0fskm92l128l86d46g7j4s&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Cinnamon Drops - with Decorative Tin", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=k3ukgul53l597649h12mdplp31&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Copaiba - Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=oaipt0lp1l7qb9nfpbckami56t&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "CP+ Softgels - Europe - Food Supplement with Olive Oil", url: "https://media.doterra.com/eu/en/pips/cp-plus-softgels.pdf", category: "Supplements & Wellness" },
{ name: "DDR Prime - Cellular Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=sccvto3so93q38kode77b3gd7b&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Deep Blue Polyphenol Complex - Food Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=outv33kni92dd15231hl9gil6m&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "DigestZen - Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=jvupes0b254g90gbp08hep9r52&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "DigestZen DigestTab - Chewable Tablets", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ln90v3a75549he1b0d5lmeen44&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "EO Mega+ - Essential Oil Omega Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=jnjqs7d6fh2pdegalqp95de71i&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Fractionated Coconut Oil - Cocos nucifera", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hfbs9u63g13lj8c8vkrvrerc6o&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Frankincense Capsules - Boswellic Acid Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7f55pi5nct5ur527oc781hkk3v&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Ginger - Digestive Drops", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=caeuh7uji118t4tafhgseden68&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "GX Assist - Food Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=psab7ipsrd38p6b0m6t27am40h&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Honey (Organic) - Infused with Wild Orange Essential Oil", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0p45a3svj175fdakmj5rcdcj25&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "IQ Mega - Omega-3 Fish Oil", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=tjfsdv07dl4p90j3j4ejhusl74&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Lemon-Lime - Drops", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cg38urgm8548ld548utea39u0b&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Lifelong Vitality Pack - CRS, VMz & EO Mega+", url: "https://www.doterra.com/US/en/p/doterra-lifelong-vitality-pack", category: "Supplements & Wellness" },
{ name: "Lifelong Vitality Pack Vegan - CRS, VMz & EO Mega+ Vegan", url: "https://www.doterra.com/US/en/p/supplements-daily-vitality-doterra-lifelong-vitality-pack-vegan", category: "Supplements & Wellness" },
{ name: "Microplex VMz - Europe - Food Nutrient Complex", url: "https://media.doterra.com/eu/en/pips/microplex-vmz.pdf", category: "Supplements & Wellness" },
{ name: "Microplex VMz - Food Nutrient Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2sqqngvc5p4dj8pdv20e3mj65l&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Microplex VMz Vegan - Europe - Food Nutrient Complex", url: "https://media.doterra.com/eu/en/pips/microplex-vmz-vegan.pdf", category: "Supplements & Wellness" },
{ name: "Microplex VMz Vegan - Food Nutrient Complex", url: "https://media.doterra.com/us/en/pips/doterra-vegan-microplex-vmz.pdf?_ga=2.33705572.43890706.1748179522-1276305428.1744737881", category: "Supplements & Wellness" },
{ name: "Mito2Max - Europe - Energy and Stamina Complex", url: "https://media.doterra.com/eu/en/pips/mito2max.pdf", category: "Supplements & Wellness" },
{ name: "PB Assist Softgels - Probiotic Defense Formula", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=ohh3g4gmip4f91d5qk1v7ie347&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "PB Assist+  Europe - Food Supplement", url: "https://media.doterra.com/eu/en/pips/pb-assist-plus.pdf", category: "Supplements & Wellness" },
{ name: "PB Assist+ Europe - Food Supplement with live bacterial cultures", url: "https://media.doterra.com/eu/en/pips/pb-assist-plus-strawberry-melon.pdf", category: "Supplements & Wellness" },
{ name: "PB Assist+ Jr - Food Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=md2tbtdrtt0c9e5idqhulveu2h&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "PB Assist+ Sachets - ProBiome Gut Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=3ep7k8nbjd6t5b2k1mh982j25o&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "PB Restore Capsules - ProBiome Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=gojv5acm254053tpna1bcpdr1n&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Peppermint - Softgels", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=gkpt5674690jbbbqv4thskvq2p&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Phytoestrogen Essential Complex - Food Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=40i7iml2bl7lv5he8kdeb9u201&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Plant Protein - Plant", url: "https://www.doterra.com/US/en/p/vegan-protein", category: "Supplements & Wellness" },
{ name: "TerraGreens - Europe", url: "https://media.doterra.com/eu/en/pips/terragreens.pdf", category: "Supplements & Wellness" },
{ name: "TerraZyme - Digestive Enzyme Complex Capsules", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=v89ul041750n3ak4j38h3ok417&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "TriEase Softgels - Seasonal Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rqc87h8cpd2vrdjninitnjhs6q&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Turmeric - Dual Chamber Capsules", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kvhp8mr03h4j982qfovhs2g44c&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Vegan Microplex VMz - Food Nutrient Complex with SLS-free vegetable capsules", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=lhgfmk5e7h74vc2pp02rp1k00h&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "vEO Mega - Essential Oil Omega Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hlm80u9s6l1v3854q166djtj34&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "VGM+ Sachets - Whole-Food Nutrient Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=6ns7s6q2bl1of360a263h8a14v&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Fiber - Dietary Supplement", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=6jd0cv0b1l437bsov1flgm4g3j&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Whey Protein - Chocolate Plant", url: "https://media.doterra.com/us/en/pips/doterra-protein.pdf?_ga=2.67216852.43890706.1748179522-1276305428.1744737881", category: "Supplements & Wellness" },
{ name: "Whey Protein - Vanilla Plant", url: "https://media.doterra.com/us/en/pips/doterra-protein.pdf?_ga=2.21073278.43890706.1748179522-1276305428.1744737881", category: "Supplements & Wellness" },
{ name: "Women Bone Nutrient - Essential Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=poa480fnoh4h55oo5v69ghku37&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "xEO Mega - Essential Oil Omega Complex", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=9l0ovo32p16it2sji90vprb61q&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Zendocrine Complex - Europe - Food Supplement", url: "https://media.doterra.com/eu/en/pips/zendocrine-complex.pdf", category: "Supplements & Wellness" },
{ name: "Zendocrine Softgels - Detoxification Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=e3ro3d1ikd6dhfdo61jnukd04s&suffix=pdf&print=1", category: "Supplements & Wellness" },
{ name: "Zengest TerraZyme - Europe - Food Supplement", url: "https://media.doterra.com/eu/en/pips/zengest-terrazyme.pdf", category: "Supplements & Wellness" },




        // Targeted Essentials
        { name: "abōde - Dish Soap Dispenser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=2nf9l77i3t3sn3ogpchj99p81n&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Dishwasher Pods", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=eron62411559b50gboal5npo4o&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Dryer Balls", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=257v9seg116o3508vst48gpd7a&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Hand Lotion Dispenser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=p4ps7rorit6a79t3253eicgb1a&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Hand Wash Dispenser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=d8v2dcr3n53av96d41umr4e37a&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Laundry Pods", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7hlp8o9i4l1ajdvdaj0optml08&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Liquid Dish Soap", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=v95q6907q132bcesr7vu9p4a61&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Microfiber Cloths", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7j8v8d5vup3nbee1tkknc2ma21&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Modular Trays", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mb66f4rf2d5ub5ugu3uamptq7u&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Multi-Purpose Surface Cleaner Concentrate", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=rsjkcilk1t5chf2d8d8o21ds02&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Product Dispenser Set", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8lu88fntn137peml674rsksv55&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde - Surface Spray Dispenser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=i36tkoes6p6r9espa893flfv1o&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde Bubble Up - Dish Brush", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=hf5aaqar55587dhtin40tc9p69&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde Foaming Hand Wash - Concentrate Infused with dōTERRA Citrus Bloom", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=l2q2slu2f95ph46h7e9fnljc7p&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "abōde Hand Lotion Refill - Infused with Citrus Bloom", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8811qt6end0sj9l808phq2em2p&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Air - Europe - Drops", url: "https://media.doterra.com/eu/en/pips/doterra-air-drops.pdf", category: "Targeted Essentials" },
{ name: "Air - X", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=mqcdcoi47d1sj4jj6mjp837l4e&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Baby - Collection", url: "https://media.doterra.com/us/en/pips/baby-collection.pdf?_ga=2.33792356.43890706.1748179522-1276305428.1744737881", category: "Targeted Essentials" },
{ name: "Baby - Diaper Cream", url: "https://media.doterra.com/us/en/pips/diaper-rash-cream.pdf?_ga=2.97217114.43890706.1748179522-1276305428.1744737881", category: "Targeted Essentials" },
{ name: "Baby - Hair & Body Wash", url: "https://media.doterra.com/us/en/pips/baby-hair-body-wash.pdf?_ga=2.35218404.43890706.1748179522-1276305428.1744737881", category: "Targeted Essentials" },
{ name: "Baby - Lotion", url: "https://media.doterra.com/us/en/pips/baby-lotion.pdf?_ga=2.35218404.43890706.1748179522-1276305428.1744737881", category: "Targeted Essentials" },
{ name: "Breathe - Vapor Stick", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=35fj3u6o0h5mbb8sced0fiuu0s&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Deep Blue - Stick", url: "https://media.doterra.com/us/en/pips/deep-blue-stick.pdf?_ga=2.35286628.43890706.1748179522-1276305428.1744737881", category: "Targeted Essentials" },
{ name: "Deep Blue - Stick + Copaiba", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=11d7kd6b8p1nje3qf6mf3ud76i&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Deep Blue Rub - Soothing Muscle Rub", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=so737t0cr90lb40mg12c8vd10v&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Frankincense Stick - Naio Wood", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=fmts68ibv517t7lg7kkd7e706j&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Peppermint Beadlets - Mentha piperita", url: "https://media.doterra.com/eu/en/pips/peppermint-oil-beadlet.pdf", category: "Targeted Essentials" },
{ name: "Sensitive Skin - Carrier Oil Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=7qr6bk8mal3idfdshc8vf6vg4p&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Serenity - Bedtime Kit", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=pivensps917gjdoqo811u5rg2b&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Serenity - Linen Mist", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=5ka0m7fts14jt7rlhfiktpl251&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "Serenity Stick -  + Valerian", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=n63bkerh396aja3h71v2vfp84m&suffix=pdf&print=1", category: "Targeted Essentials" },
{ name: "SuperMint - Toothpaste", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=0prsqa1u1t2mdfq2g6vj2lop0q&suffix=pdf&print=1", category: "Targeted Essentials" },

        


// Collections

        { name: "Bright & Cozy Trio - Peppermint, Madagascar Vanilla & Wild Orange", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kocb92raa56kp2u0keutp3fb34&suffix=pdf&print=1", category: "Collections" },
{ name: "Cuisine Collection - Italian, Mexican, Thai, Tropical Blends", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=r5vaj4eof52kb5oga5thhp6u44&suffix=pdf&print=1", category: "Collections" },
{ name: "Kid's Collection ", url: "https://media.doterra.com/us/en/pips/doterra-kids-collection.pdf?_ga=2.98346330.43890706.1748179522-1276305428.1744737881", category: "Collections" },
{ name: "Veráge Skin Care - Collection", url: "https://media.doterra.com/us/en/pips/doterra-verage-collection.pdf?_ga=2.97216986.43890706.1748179522-1276305428.1744737881", category: "Collections" },



        // Diffusers
        { name: "Bubble Diffuser - Emerald", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=kgguke1jvh4uragamlf2bvcg19&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Bubble Diffuser - Ruby", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=cc3vd06vpt4nhee92jnelpil5t&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Bubble Diffuser - Salt with Mālama", url: "https://share.doterra.com/v/DigitalMarketingKit/album/NATHL?display=curatedView&viewIndex=2&gSortingForward&gOrderProp=name&referenceTo=&from=curatedView&filter=%7B%22meta_multichoice_2.keyword%22:%22PIPs%22%7D&column=document&id=g37gk7koc53ob268r505o61722", category: "Diffusers" },
{ name: "Bubble Diffuser - Stone with Hygge Cozy Blend", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=eufldoubb92cd0lni5jrc5kt4g&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Bubble Diffuser - White with Adaptiv", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=d38tqutqct22h1nnuupccqr71l&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Dawn - Aroma Humidifier", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=uc2gb7887t39l8930s3koi5d63&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Laluz - Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=t9h68flegp0u3e3jdnq9q62522&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Myst - Wall Plug Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=uh22vf9il9179aqqqhdi7d6468&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Pebble - Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=i100i6ra8l5b75ot4bitutap62&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Pilōt - Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=92upenedpl1p1eimijq6cuam6g&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Pilōt MAX - Diffuser with Malama", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=232hudm1s528t219se83lmgo2t&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Roam - Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=8a5sl438ad5qr5h990tsnd305v&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Volo - Marble/Onyx Diffuser", url: "https://share.doterra.com/pdfviewer/viewer/viewer.html?v=DigitalMarketingKit&portalType=v%2FDigitalMarketingKit&column=document&id=gmgp4vlmh50s74n44ge5hmc62u&suffix=pdf&print=1", category: "Diffusers" },
{ name: "Europe - Petal 2.0 Diffuser", url: "https://media.doterra.com/eu/en/pips/petal-diffuser-v2.pdf", category: "Diffusers" },
{ name: "Europe - Lumo Ultrasonic Diffuser", url: "https://media.doterra.com/eu/en/pips/lumo-ultrasonic-diffuser.pdf", category: "Diffusers" },


    ];

    const officialPipCategoriesOrder = [
        "All", "Single oils", "Proprietary Blends", "MetaPWR", "On Guard", "Skin Care & Body",
        "Supplements & Wellness", "Sun Care", "Targeted Essentials", "Collections", "Diffusers", "Holiday"
    ];

    function sanitizeCategoryForDataAttr(categoryName) {
        if (typeof categoryName !== 'string') return '';
        return categoryName
            .toLowerCase()
            .replace(/™/g, '')
            .replace(/ō/g, 'o')
            .replace(/\s+/g, '-')
            .replace(/[^a-z0-9-]/g, '');
    }

    // --- INITIALIZATION FOR PRODUCT INFO PAGES TAB (Call this early) ---
    function initializePipTab() {
        const pipPanel = document.getElementById('pips'); // Assuming your PIP tab panel has id="pips"
        if (!pipPanel) {
            // console.log("PIP tab panel (id='pips') not found. Skipping PIP initialization.");
            return;
        }

        const pipCategoryFiltersContainer = pipPanel.querySelector('#pipCategoryFilters'); // Use ID for specificity
        const pipLinksGrid = pipPanel.querySelector('#pipLinksGrid'); // Use ID for specificity

        if (!pipCategoryFiltersContainer || !pipLinksGrid) {
            // console.log("PIP category filter or links grid not found within #pips panel. Skipping PIP initialization.");
            return;
        }

        // 1. Render PIP Categories
        const uniquePipCategoriesInPips = new Set(productInfoPages.map(pip => pip.category));
        const categoriesToDisplay = officialPipCategoriesOrder.filter(cat => cat === "All" || uniquePipCategoriesInPips.has(cat));
        uniquePipCategoriesInPips.forEach(pipCat => {
            if (!categoriesToDisplay.includes(pipCat)) categoriesToDisplay.push(pipCat);
        });

        pipCategoryFiltersContainer.innerHTML = ''; // Clear existing
        categoriesToDisplay.forEach(category => {
            const button = document.createElement('button');
            button.classList.add('category-filter-btn'); // Your existing script looks for this class
            button.textContent = category;
            const filterValue = category === 'All' ? 'all' : sanitizeCategoryForDataAttr(category);
            button.setAttribute('data-filter', filterValue);
            if (category === 'All') button.classList.add('active');
            pipCategoryFiltersContainer.appendChild(button);
        });

        // 2. Render PIP Links
        pipLinksGrid.innerHTML = ''; // Clear existing
        productInfoPages.forEach(pip => {
            const cardDiv = document.createElement('div');
            // Add .searchable-item for generic search/filter to work
            // Add .resource-card and .quick-link-card for your CSS styling (from previous context)
            cardDiv.className = 'searchable-item resource-card quick-link-card';

            const sanitizedCategory = sanitizeCategoryForDataAttr(pip.category);
            cardDiv.setAttribute('data-category', sanitizedCategory);

            const linkElement = document.createElement('a');
            linkElement.href = pip.url;
            linkElement.classList.add('quick-link-anchor'); // For your styling
            linkElement.target = '_blank';

            // Create a .searchable-text element inside the link for the name
            // This is what your existing search function looks for.
            const nameSpan = document.createElement('span');
            nameSpan.classList.add('searchable-text');
            nameSpan.textContent = pip.name;
            linkElement.appendChild(nameSpan);

            cardDiv.appendChild(linkElement);
            pipLinksGrid.appendChild(cardDiv);
        });

        // Ensure "No results message" is initially hidden for PIPs tab
        const noResultsMessage = pipPanel.querySelector('.no-results-message');
        if (noResultsMessage) {
            noResultsMessage.style.display = 'none';
        }
    }

    // CALL PIP INITIALIZATION EARLY!
    // This ensures PIP dynamic elements are in the DOM before generic listeners are attached below.
    initializePipTab();

    // --- Tab Navigation Logic (for Resources page) ---
    const mainTabButtons = document.querySelectorAll('.tab-navigation .tab-button');
    const mainTabPanels = document.querySelectorAll('.tab-content-panels .tab-panel');

    if (mainTabButtons.length > 0 && mainTabPanels.length > 0) {
        mainTabPanels.forEach(panel => {
            if (!panel.classList.contains('active')) {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });

        mainTabButtons.forEach(button => {
            button.addEventListener('click', () => {
                mainTabButtons.forEach(btn => btn.classList.remove('active'));
                mainTabPanels.forEach(panel => {
                    panel.classList.remove('active');
                    panel.style.display = 'none';
                });

                button.classList.add('active');
                const targetPanelId = button.getAttribute('data-tab');
                const targetPanel = document.getElementById(targetPanelId);
                if (targetPanel) {
                    targetPanel.classList.add('active');
                    targetPanel.style.display = 'block';
                }

                const currentSearchInput = targetPanel ? targetPanel.querySelector('.tab-search-input') : null;
                const currentCategoryFilterBar = targetPanel ? targetPanel.querySelector('.category-filter-bar') : null;

                if (currentSearchInput) {
                    currentSearchInput.value = '';
                    currentSearchInput.dispatchEvent(new Event('input', { bubbles: true }));
                }
                
                if (currentCategoryFilterBar) {
                    const allButton = currentCategoryFilterBar.querySelector('.category-filter-btn[data-filter="all"]');
                    if (allButton) {
                        currentCategoryFilterBar.querySelectorAll('.category-filter-btn').forEach(btn => btn.classList.remove('active'));
                        allButton.classList.add('active');
                        
                        // This part of your reset logic manually shows all items.
                        // It should work fine with dynamically added PIP items if they have '.searchable-item'.
                        const itemsToFilter = targetPanel.querySelectorAll('.resource-grid .searchable-item');
                        const noResultsMessage = targetPanel.querySelector('.no-results-message');
                        let visibleItemsCount = 0;

                        itemsToFilter.forEach(item => {
                            item.style.display = ''; 
                            visibleItemsCount++;
                        });
                        if(noResultsMessage) {
                           noResultsMessage.style.display = (visibleItemsCount === 0) ? 'block' : 'none';
                        }
                    }
                }
            });
        });
    }

    // --- Search Functionality within Tabs (for Resources page) ---
    const searchInputs = document.querySelectorAll('.tab-search-input');
    if (searchInputs.length > 0) {
        searchInputs.forEach(input => {
            input.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase().trim();
                const currentPanel = e.target.closest('.tab-panel');
                if (!currentPanel) return;

                const itemsToSearch = currentPanel.querySelectorAll('.searchable-item'); // Will find PIP cards too
                const noResultsMessage = currentPanel.querySelector('.no-results-message');
                const activeCategoryFilter = currentPanel.querySelector('.category-filter-btn.active');
                const categoryFilterValue = activeCategoryFilter ? activeCategoryFilter.getAttribute('data-filter') : 'all';
                let visibleItemsCount = 0;

                itemsToSearch.forEach(item => {
                    const textElements = item.querySelectorAll('.searchable-text'); // PIP cards have this
                    let textMatchesSearch = false;
                    if (searchTerm === '') {
                        textMatchesSearch = true;
                    } else {
                        textElements.forEach(textEl => {
                            if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                                textMatchesSearch = true;
                            }
                        });
                    }

                    const itemCategory = item.getAttribute('data-category'); // PIP cards have this
                    const categoryMatchesFilter = (categoryFilterValue === 'all' || itemCategory === categoryFilterValue);

                    if (textMatchesSearch && categoryMatchesFilter) {
                        item.style.display = '';
                        visibleItemsCount++;
                    } else {
                        item.style.display = 'none';
                    }
                });

                if (noResultsMessage) {
                    noResultsMessage.style.display = (visibleItemsCount === 0 ) ? 'block' : 'none';
                }
            });
        });
    }

    // --- Category Filter Button Logic (for Resources page) ---
    const categoryFilterBars = document.querySelectorAll('.category-filter-bar');
    if (categoryFilterBars.length > 0) {
        categoryFilterBars.forEach(bar => {
            // The filterButtons are queried here. If initializePipTab ran first,
            // PIP category buttons will be included if #pipCategoryFilters is a .category-filter-bar
            const filterButtons = bar.querySelectorAll('.category-filter-btn');
            const panel = bar.closest('.tab-panel');
            const itemsToFilter = panel ? panel.querySelectorAll('.resource-grid .searchable-item') : []; // Will find PIP cards
            const noResultsMessage = panel ? panel.querySelector('.no-results-message') : null;
            const mainSearchInput = panel ? panel.querySelector('.tab-search-input') : null;

            filterButtons.forEach(button => {
                button.addEventListener('click', () => {
                    filterButtons.forEach(btn => btn.classList.remove('active'));
                    button.classList.add('active');

                    const filterValue = button.getAttribute('data-filter');
                    const searchTerm = mainSearchInput ? mainSearchInput.value.toLowerCase().trim() : '';
                    let visibleItemsCount = 0;

                    itemsToFilter.forEach(item => {
                        const itemCategory = item.getAttribute('data-category'); // PIP cards have this
                        let textMatchesSearch = true;
                        if (searchTerm !== '') {
                            textMatchesSearch = false;
                            const textElements = item.querySelectorAll('.searchable-text'); // PIP cards have this
                            textElements.forEach(textEl => {
                                if (textEl.textContent.toLowerCase().includes(searchTerm)) {
                                    textMatchesSearch = true;
                                }
                            });
                        }
                        
                        if (textMatchesSearch && (filterValue === 'all' || itemCategory === filterValue)) {
                            item.style.display = '';
                            visibleItemsCount++;
                        } else {
                            item.style.display = 'none';
                        }
                    });
                    
                    if (noResultsMessage) {
                         noResultsMessage.style.display = (visibleItemsCount === 0 ) ? 'block' : 'none';
                    }
                });
            });
        });
    }

    // --- Featured Prompts Carousel (for Get Inspired Page V2) ---
    // ... (Your existing carousel code - unchanged) ...
    const carousel = document.querySelector('.featured-prompts-carousel-section .carousel-slides');
    if (carousel) {
        const slides = Array.from(carousel.querySelectorAll('.carousel-slide'));
        const prevButton = document.querySelector('.featured-prompts-carousel-section .carousel-button.prev');
        const nextButton = document.querySelector('.featured-prompts-carousel-section .carousel-button.next');
        const dotsContainer = document.querySelector('.featured-prompts-carousel-section .carousel-dots');
        let currentIndex = 0;
        let slideInterval;

        function updateDots() {
            if (!dotsContainer) return;
            dotsContainer.innerHTML = '';
            slides.forEach((_, index) => {
                const dot = document.createElement('button');
                dot.classList.add('carousel-dot');
                if (index === currentIndex) {
                    dot.classList.add('active');
                }
                dot.setAttribute('aria-label', `Go to slide ${index + 1}`);
                dot.addEventListener('click', () => {
                    goToSlide(index);
                    resetInterval();
                });
                dotsContainer.appendChild(dot);
            });
        }

        function goToSlide(index) {
            if (slides.length === 0) return;
            slides[currentIndex].classList.remove('active');
            slides[currentIndex].style.opacity = '0';
            
            currentIndex = (index + slides.length) % slides.length;
            
            slides[currentIndex].classList.add('active');
            slides[currentIndex].style.opacity = '1';
            updateDots();
        }

        function nextSlide() { goToSlide(currentIndex + 1); }
        function prevSlide() { goToSlide(currentIndex - 1); }
        function startInterval() { clearInterval(slideInterval); slideInterval = setInterval(nextSlide, 5000); }
        function resetInterval() { clearInterval(slideInterval); startInterval(); }

        if (slides.length > 0) {
            slides.forEach((slide, index) => {
                if (index === 0) { slide.classList.add('active'); slide.style.opacity = '1'; currentIndex = 0; }
                else { slide.classList.remove('active'); slide.style.opacity = '0'; }
            });
            updateDots();
            startInterval();
            if (prevButton) prevButton.addEventListener('click', () => { prevSlide(); resetInterval(); });
            if (nextButton) nextButton.addEventListener('click', () => { nextSlide(); resetInterval(); });
        }
    }

    // --- Flip Card Logic (for Get Inspired Page V2) ---
    // ... (Your existing flip card code - unchanged) ...
    const flipCardContainers = document.querySelectorAll('.flip-card-container');
    if (flipCardContainers.length > 0) {
        flipCardContainers.forEach(container => {
            const toggleFlip = () => { container.classList.toggle('flipped'); };
            container.addEventListener('click', toggleFlip);
            container.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); toggleFlip(); }
            });
        });
    }
});