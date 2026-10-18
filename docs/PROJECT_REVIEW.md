# Portfolio project review — 18 October 2026

## Review scope and selection

Screened the 54 repositories visible through the public `ericmuh` GitHub inventory (30 non-forks), plus 28 local Git checkouts within the Projects workspace. Public visibility is not the same as authorship or significance: repository size, stars, and contribution counts were not used as portfolio claims. Reviewed substantive candidates through application routes/screens, domain models, package manifests, README files, and implementation/progress notes. Did not run these applications against production services or inspect credentials, customer records, databases, or private documents.

Related frontend, backend, and mobile repositories are grouped into one product. Current code takes precedence over stale starter READMEs and ambitious roadmap prose. The portfolio describes implemented scope without claiming sole authorship, production deployment, commercial outcomes, or that planned integrations already work.

## Included projects and evidence

| Portfolio entry | Repositories / workspace | Evidence used |
| --- | --- | --- |
| Operations Manager | `operations_manager` | Next.js risk/memory/entity routes, agent and memory packages, development progress. Retains explicit in-development status. |
| Kaazi | `KaaziApp/kaazi-worker`, `kaazi-employer`, `api` | Separate mobile screens for worker/employer journeys; Django job lifecycle, worker profile/documents/training, rating and earnings models. |
| Scoris Digital Library | `library_system`, `library_system_backend` | Student/librarian/reader pages, catalog context, current bundled PHP/PostgreSQL synchronization. Earlier standalone PHP/MySQL API is grouped, not misrepresented as the current backend. |
| Fleet & Driver Operations | `driverapp-ug-airlines/frontend`, `backend` | Protected driver, shift-leader and admin routes; driver logs/history, vehicles, reports, analytics, and shift models. Public entry uses a neutral product name. |
| TradeOps | `trading_bot/web`, `mobile`, `backend` | Web accounts/bots/trades/strategies/notifications routes, companion Expo app, FastAPI domain models and endpoint modules. Development project; no performance or investment claims. |
| Nonprofit Operations Platform | `old/Hold-the-child/Hold-the-Child` | React program/project/HR screens and Django project/workplan/milestone/supply/travel/donor/vendor/publication models. No organizational data is reproduced. |
| Marketplace Commerce API | `Tunga Academy/API` | Django account/listing/order/payment/chat/review modules, transaction/wallet models and gateway webhook records. No real payment execution asserted. |
| Smart Crop Calendar | `smart-crop-calander`, `smart-crop-calender-api`, `smart_crop_calendar` | Public web crop/month/season views, Django crop/soil/weather models, Kotlin farm/profile screens. README identifies early-stage hackathon prototype; sensor collection remains a plan, not a deployed claim. |
| Terrain Advocates | `terrain_advocates` and duplicate checkouts | React Router practice-area/team/about/contact routes, reusable components, SEO metadata. One entry despite multiple copies. |
| People Sync Solutions | `peoplesync` | Substantive HTML/CSS/JavaScript business website, HR service sections, responsive presentation, enquiries and reveal interactions. No application backend is implied. |

The portfolio itself remains linked as a compact engineering artifact rather than occupying another large featured card. Repository source links are published only where public access was verified. Other entries offer a project-discussion link instead of a guessed or inaccessible repository URL.

## Exclusions and grouping decisions

- **Duplicate checkouts:** `AI-Sarah/terrain-advocates`, `terrain/terrain-advocates`, `test-folder-config/terrain-advocates`, and `test-folder-config/hangarTrackUG` point to the same remote; they are not distinct portfolio products.
- **Course content and exercises:** Java/Kotlin basics, React learning, Coursera/foundations HTML/CSS, Tunga lesson repositories, algorithms, games, sample Express/Flask/Django projects, and themes/scripts do not strengthen this selected-work collection.
- **Boilerplates and upstream code:** generic starter repositories, `Hobbies/my-app`, the near-empty routines app, the Swift Landmarks tutorial, Frappe HRMS, upstream ecommerce samples, and fork-only examples are not presented as original product case studies.
- **Thin or mostly planned products:** the farmers repository has no substantial application implementation surfaced by review; GoMama's broad roadmap exceeds the small mobile implementation reviewed. Neither is expanded into a full product claim.
- **Legacy or narrow alternatives:** the older CodeIgniter library/poll projects and small decision-log/blog/todo apps are omitted in favor of the richer current library and operational systems. The current voting tool is a useful focused application but is omitted from this larger-systems selection.
- **Other authorship / insufficient evidence:** HEDS points to another user's repository and is primarily a website; no specific contribution was verified. Empty or non-source folders such as Teacherapp, UGExim, JAHF and emailer are not used to invent case studies.
- **Private assets:** no customer screenshots, personal records, financial data, credentials, internal documents, or private source are copied into the public repository.

## Maintenance

Project cards are data-driven in `app/lib/projects.ts`, rendered by `ProjectCollection.tsx`. Update scope and links as source evidence changes. The native expandable scope sections work without extra client-side code. `Operations Manager` remains the lead architecture feature; applications and web experiences use separate collections.
