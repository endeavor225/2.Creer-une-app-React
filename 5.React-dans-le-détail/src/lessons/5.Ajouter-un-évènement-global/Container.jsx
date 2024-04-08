import { useState  } from "react"
import HugeContent from "./HugeContent"

export default function Container() {

    const [showContent, setShowContent] = useState(false)

    return (
        <div>
            <h1>Ajouter un évènement global</h1>
            
            <button onClick={() => setShowContent(!showContent)}> {showContent ? "Caher" : "Montrer"} le contenu</button>
            {showContent && <HugeContent />}

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat quaerat magnam, nobis amet molestiae rem recusandae tenetur culpa temporibus voluptatibus accusamus maxime quam neque quis rerum laboriosam officia quasi dicta repellat, et eligendi cumque. Animi necessitatibus obcaecati doloribus itaque deleniti, debitis suscipit dolorum eligendi nulla placeat repudiandae minus alias. Quod est in fugiat assumenda sunt magni porro. Placeat repudiandae consequatur laborum in, molestias minus quisquam ipsa. Mollitia vero nihil laboriosam iusto vitae ducimus autem voluptatum excepturi, ex alias saepe accusantium, adipisci quisquam sed tenetur voluptatem qui, corrupti quidem placeat? Magni officia quod cumque quibusdam fuga alias reiciendis ea, laboriosam molestiae nulla quisquam aut fugiat fugit incidunt sequi quo. Dolorem aut perferendis quae eaque, laborum voluptates nesciunt. Molestiae at quaerat temporibus nostrum, totam aspernatur nihil ipsam voluptates nemo quisquam laudantium reiciendis numquam quos perspiciatis, ad ab vero explicabo nisi repudiandae ea impedit, obcaecati ipsa. Rem aut, exercitationem tenetur asperiores expedita tempora temporibus doloribus ex, ducimus at fugiat reprehenderit harum? Exercitationem, nostrum pariatur, facilis sunt quod deserunt animi laborum laboriosam dolores explicabo ut, officia placeat saepe nobis cumque laudantium fuga officiis ad quisquam omnis? Sit enim at voluptates quasi quae illo, deserunt necessitatibus ad commodi aperiam sequi provident, laudantium alias harum asperiores? Incidunt voluptatum assumenda quis nobis molestiae magnam eius cupiditate ducimus amet, est animi, architecto voluptates asperiores quae perferendis enim? Eum sit libero consequuntur quae praesentium alias impedit amet ipsum eligendi, soluta incidunt quisquam aliquam dicta! Necessitatibus dolorem nesciunt assumenda ipsa temporibus. Minima rerum neque explicabo, in amet, molestias esse ad cumque alias obcaecati quaerat optio repellendus provident consequuntur est itaque vitae, dicta accusamus eum suscipit perferendis quibusdam! Nostrum quasi beatae unde quisquam repudiandae distinctio sint deserunt quibusdam, ullam quo nesciunt pariatur, quod repellat dolore ea provident, est cupiditate facere? Nostrum ducimus magnam accusamus quibusdam quidem doloremque pariatur eaque, ut, natus sequi doloribus placeat nulla distinctio quae non, delectus culpa possimus ullam cum perferendis veritatis? Reiciendis natus eum ipsam voluptas, eaque cumque quae molestiae quasi corrupti sapiente commodi similique quas repellat, nobis blanditiis eligendi maiores aut harum? Enim quis eum, distinctio ipsam neque obcaecati vero maxime omnis asperiores animi dolor doloremque eius similique esse optio ad quas repellat exercitationem laudantium in ea. Maxime sed eligendi quo, tempora libero quia pariatur quisquam aut in. Dolor, quod. Officia repudiandae molestiae exercitationem soluta suscipit sapiente, a natus libero nam tempora temporibus, porro odio quibusdam consectetur. Voluptatibus ex inventore eligendi error nostrum id ducimus aliquam in at quia esse consectetur culpa nulla rerum, odio reprehenderit eaque adipisci iusto quibusdam accusamus quaerat? Neque ad inventore, reprehenderit, nisi iure voluptatibus adipisci nobis minus quis animi aut quae perferendis numquam, laudantium tempore labore vel! Illum ut quos repellendus nulla, blanditiis labore. Nihil ex perferendis provident eos blanditiis quaerat facilis facere quidem fuga, dolore ratione maiores! Sint quas non autem, delectus aliquam quibusdam quis quod incidunt repellendus distinctio voluptatum iure eos repellat. Culpa minus voluptatibus iste officiis commodi animi quibusdam illo non cumque rem ullam modi soluta impedit dolorum itaque tempore odit asperiores ipsa eveniet id, at nobis. Ducimus, ullam labore exercitationem debitis ut eveniet rem excepturi fugit odio esse! Quas hic necessitatibus beatae enim maxime eum dignissimos sint voluptatem molestias temporibus optio, deleniti laborum distinctio molestiae, recusandae nam mollitia. Minima beatae natus eligendi veniam iste ut perferendis quia facere consectetur, quaerat tempore aut optio facilis, magni exercitationem! Neque, molestias eius voluptas expedita consectetur quaerat voluptatibus quisquam libero, ducimus cumque suscipit atque officiis vero eum impedit eligendi, quos qui recusandae? Iusto harum amet illum! Quia temporibus inventore unde pariatur delectus ab incidunt, iusto voluptates odit praesentium? Minima doloremque ducimus nihil ut! Ab doloremque numquam assumenda recusandae quo. Hic, laboriosam adipisci? Impedit nemo, unde necessitatibus nulla ipsa, dolores magni quis reiciendis sequi eum eligendi neque, nobis voluptas accusantium dolor quidem distinctio ea corporis asperiores ad suscipit exercitationem totam! Recusandae magni deleniti placeat temporibus error tempora pariatur reprehenderit minus numquam dolorum possimus sunt optio, quisquam iure aliquid nesciunt libero enim, rerum corporis impedit velit. Quod minus dignissimos et inventore at sint id molestiae cupiditate delectus eaque atque dicta rem quasi nesciunt iure voluptatum impedit soluta, quo molestias fuga. Cumque repellendus architecto numquam, eum temporibus amet excepturi neque, reprehenderit dignissimos deserunt facilis. Veniam animi nisi quis quas veritatis suscipit iure quasi, maxime, libero, saepe porro fuga labore. Similique, assumenda. Delectus ipsum eligendi, pariatur odio neque accusantium commodi possimus ipsa ipsam amet? Dolore aperiam commodi quis totam vitae libero consectetur neque sit inventore. Rem ipsa, asperiores magnam iusto omnis odio repellendus cupiditate vero sed numquam molestiae iste reprehenderit inventore minima temporibus dignissimos, suscipit natus nulla, provident deserunt veniam cumque similique veritatis! Labore incidunt numquam, voluptatibus odio corrupti recusandae, harum minus asperiores quo a aut doloribus? Deleniti velit commodi non nostrum quos dolore! Quibusdam libero, reprehenderit consequuntur rerum error eum, eos itaque unde quam, inventore tempora minus molestias quia tenetur sequi? Eaque amet tempora exercitationem esse perferendis reiciendis, sint vitae nam et nobis placeat, quasi voluptate dolores accusamus quisquam optio soluta officiis beatae ex est velit natus incidunt! Totam consectetur magnam suscipit soluta? Vero facilis quis nulla cupiditate magnam officia tempore? Aliquam laboriosam eligendi ea, quam, assumenda et iure, ipsam asperiores tempore eum iusto? Fugit reprehenderit incidunt impedit mollitia, officiis harum nemo eveniet ratione dolorem nulla iste voluptatem vitae vero. Ipsum optio natus dolores quisquam totam, aperiam aspernatur provident veniam blanditiis deleniti nemo eum eius reprehenderit quibusdam beatae ipsa similique corrupti. Labore unde nostrum aut, consequatur in aliquam deleniti nesciunt aliquid voluptates veniam impedit, sequi odio laudantium ipsa saepe temporibus pariatur, laborum nemo? Necessitatibus autem error cupiditate minus id similique hic delectus velit aut nobis, consequatur, quo quidem odit vitae incidunt doloribus reprehenderit facere voluptate vero et, dolorum ut. Non beatae exercitationem laboriosam numquam corrupti, natus impedit at possimus consectetur, quia eaque. Impedit non, architecto aut adipisci iure, minus inventore cupiditate laboriosam debitis distinctio fugit dignissimos. Vitae explicabo, aspernatur vero, quos quo dolor veritatis cumque dolores optio commodi tempore doloribus voluptates, delectus fugiat ad facere iure praesentium minus autem non ratione aliquam quia? Magnam vero necessitatibus corrupti expedita a? Quisquam animi sequi nam, inventore in nihil alias eius saepe? Quisquam delectus, corrupti enim voluptate, iste, ad quaerat temporibus at nam quidem consequatur odit laudantium itaque est saepe suscipit totam repudiandae unde earum sint assumenda. Labore ex officia assumenda eum eaque nihil? Nulla quia odio accusantium fugit modi quis, laudantium laborum voluptatum hic enim optio qui quidem repudiandae natus quasi expedita deleniti nihil. Perspiciatis, explicabo repellat maiores natus sed rem ullam dolor quae fugit. Earum dolorum, officia delectus eum totam, recusandae aut expedita commodi assumenda explicabo molestias quasi adipisci vitae distinctio ea eaque tempore. Eaque, enim blanditiis. Aliquam debitis deserunt temporibus molestias sed repellat rerum natus ab, ipsam, non exercitationem dolores asperiores impedit vitae officiis. In at illum quia sed perferendis adipisci fugiat odio earum tempora provident, amet quas ullam, soluta obcaecati nulla quaerat expedita explicabo vero. Vel enim omnis perferendis dolor, nostrum quos culpa repellat dolore eum tenetur totam quibusdam voluptatem vero nesciunt. Iste impedit sint totam ea eaque unde ratione quam iure in tenetur, distinctio omnis nam, optio enim tempora placeat aliquid veritatis repellendus quasi, dolores corrupti magnam rem facere. Suscipit corrupti enim dolorum quam fugiat aliquid ab dolorem quasi rem ad! Ullam fugit aut cum animi dolore error eligendi, molestiae fugiat ut dolorem hic sequi repellendus illo illum. Quibusdam possimus excepturi libero, nesciunt autem delectus inventore provident earum harum rem hic maxime quidem! At corporis fugit alias totam veritatis magnam temporibus veniam obcaecati maxime ipsum, quis laborum vel, aliquid, molestiae inventore omnis deleniti beatae provident officiis porro? Architecto saepe fuga, magnam quo enim in dolores delectus repellat cumque dicta officia et sunt quas quae. Nesciunt accusantium quas autem quos vero tempore tempora minima ipsa tenetur soluta illo ducimus optio perferendis, minus nobis officia cum quisquam sint. Aliquid architecto quo consectetur, laboriosam tempore fugit maiores error similique magnam nihil repudiandae quos doloremque omnis a, praesentium earum. Itaque dignissimos deserunt ex voluptates suscipit eligendi sunt ipsa est, aut corrupti minus ab explicabo inventore tempora vitae? Odit officia hic sint quidem consequatur rerum laudantium laboriosam quisquam, in dolore tenetur amet sunt ratione labore, fugit qui quos quibusdam eaque corrupti minima inventore cupiditate ut quis repudiandae? Illum, ut. Corporis, ab non. Nostrum, natus eos libero, voluptatibus impedit, iste quasi nam repellendus nemo nulla magnam cumque tempore officia laboriosam quaerat assumenda reiciendis? Modi ipsa quos earum quidem sequi eligendi explicabo sed rem quod, eaque fugit odit vel animi nisi possimus quis consequatur cumque minus, nam voluptas vitae alias harum similique! Eius obcaecati eaque molestias reiciendis ducimus voluptas laborum eveniet, in quia quae nulla nisi quaerat quibusdam nam placeat itaque architecto quidem. Sapiente rerum error architecto natus fuga nemo dignissimos exercitationem similique facere omnis dolorem voluptatum amet velit facilis quam enim officia laudantium, nam tempora cupiditate nisi possimus! Suscipit eius repellendus rerum enim officiis autem fugit sed iure voluptas commodi, consequatur numquam sapiente error culpa, quaerat porro, placeat ipsum esse quas aut! Accusamus quia laudantium reprehenderit accusantium architecto tempore dolores voluptatem, odit fugit hic consequuntur quidem quisquam repudiandae voluptates perspiciatis mollitia necessitatibus minima ea nesciunt quo delectus exercitationem molestias fugiat sapiente? Quia dolorem eaque nemo deleniti, accusamus magnam tenetur sit sed ut ipsa voluptatum quisquam qui dolores accusantium? Earum, ex vero ratione eius molestiae possimus eum. Repudiandae, aliquid. Quis quasi laboriosam id itaque omnis totam, amet exercitationem eveniet rem? Perspiciatis temporibus quasi vitae iste eos iure aliquam dolore esse, fugiat accusamus blanditiis illum impedit saepe, ipsam quod. Suscipit nesciunt eaque, vero similique dolore, praesentium voluptas animi ut sed deserunt molestias ex aut officiis vitae culpa. Inventore eum, unde atque eos accusantium laudantium. Obcaecati quibusdam totam dicta commodi quia aperiam omnis labore dolorum consequatur deleniti numquam, deserunt fugit doloribus doloremque placeat aliquam id inventore dolore harum ut beatae repellat magnam est nihil. Quisquam incidunt velit dolor a est sint molestiae nobis impedit asperiores, doloribus cupiditate dicta, nemo atque deserunt dignissimos omnis. Fuga enim non, corporis, nemo officiis delectus hic magnam earum aut sed ratione temporibus sequi pariatur cum. Quia aliquam quasi aliquid asperiores commodi aut veniam doloribus in dicta dolorum quam, deleniti repudiandae totam aperiam natus atque doloremque, ea quibusdam odit dolores adipisci? Ullam reprehenderit earum laborum hic voluptas ad quibusdam molestiae placeat, maxime, laudantium consequatur provident. Expedita perferendis placeat eaque eos nobis magnam pariatur consequuntur at necessitatibus, fugit totam accusantium rerum minus possimus unde aliquid, atque itaque voluptate ab. Asperiores voluptatibus beatae architecto accusamus non. Blanditiis unde voluptas perferendis, adipisci quos, voluptates earum quod molestias repellat sed optio incidunt! Atque voluptas commodi velit unde, aperiam in temporibus magnam optio aliquid fuga, assumenda exercitationem molestiae provident quam iste dignissimos quas perspiciatis voluptatum mollitia quasi voluptatem ipsa. In cum repellat sapiente nulla, illo tenetur debitis optio sint deserunt vero dignissimos maxime ducimus quibusdam iure natus quisquam asperiores consectetur. Placeat provident, pariatur odit, laudantium est reprehenderit delectus explicabo aliquid, similique iste asperiores vel voluptatum nulla velit ad hic ullam at? Explicabo quisquam tempore reprehenderit sequi optio iste exercitationem? Minus dolores velit in, exercitationem quo quod consequuntur expedita, numquam ratione consequatur et eos vel eveniet natus explicabo! Eum ex, quam harum voluptatibus dicta hic dignissimos consectetur necessitatibus quidem optio esse velit tempora quod numquam cum dolorem saepe architecto quas, tempore inventore cupiditate nobis perspiciatis, ad expedita. Soluta maiores deserunt quaerat? Fugit doloremque, inventore aspernatur veritatis repudiandae nostrum, atque illum, saepe illo ab iure? Accusamus fuga laudantium obcaecati doloremque vitae corporis nobis repellat quibusdam modi consequuntur sit aliquid minima qui inventore voluptates quidem voluptatum laborum, adipisci impedit ea magnam nihil eum nisi placeat? Non ullam veniam debitis facere fugiat laboriosam maxime magnam tempore asperiores unde ipsa autem odit dicta modi adipisci, aliquam delectus perspiciatis numquam! Totam rem laudantium, atque fuga aperiam natus. Atque alias, neque recusandae dolor qui, mollitia ex tempore, excepturi quas quis adipisci quaerat deleniti accusamus. Soluta tempora harum vel consequuntur nesciunt ex, quasi accusantium. Alias accusantium quo magni similique cum et ratione atque? Rerum, eaque deserunt, veniam nihil corporis molestias doloremque excepturi dignissimos alias quae velit recusandae blanditiis iusto debitis eum expedita tempora? Reiciendis unde inventore nemo vero dolorem ipsum. Distinctio adipisci illo enim, quaerat maiores perferendis atque non reiciendis.</p>
        </div>
    )
}
