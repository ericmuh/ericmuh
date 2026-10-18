# Design direction & content provenance

Charcoal surfaces, warm ivory type, muted sage accents, fine grids, and original layered wireframes create a technical identity without neon or popularity widgets. Lucide supplies consistent local SVG interface icons. Original SVG assets live under `public/images/` and can be edited as text.

Research informed the hierarchy and documentation, not a copied layout:

- [Brittany Chiang](https://brittanychiang.com/): readable professional context and useful project descriptions.
- [Lee Robinson](https://leerob.com/): writing as a first-class part of an engineer's website.
- [Best README Template](https://github.com/othneildrew/Best-README-Template): linked navigation and practical setup documentation.
- [Lucide React](https://lucide.dev/guide/react): individually imported SVG icons.
- [Next.js static exports](https://nextjs.org/docs/app/guides/static-exports): build-time content processing and static routes.
- [markdown-it](https://github.com/markdown-it/markdown-it): Markdown rendering with raw HTML disabled.

The public profile centers Eric's identity, engineering approach, and openness to new roles. His current Refactory role is supporting context. Historical employers, employment dates, qualifications, and CV-style chronology are deliberately omitted. No client project details or achievements are invented. The project collection is curated from repository evidence; see PROJECT_REVIEW.md for scope and selection.

Eric supplied a portrait and requested a futuristic creative treatment. The built-in image-generation tool created an identity-preserving illustration and a simplified matching favicon. Only the stylized assets are published; the original photograph remains outside the repository.

Portrait prompt: preserve Eric's recognizable face, skin tone, hair, facial hair, sunglasses and warm smile; create a square head-and-shoulders editorial illustration with etched contours, sage rim light, restrained architectural/circuit details, a charcoal background and graphite tech jacket. Avoid text, logos, helmets and excessive neon.

Favicon prompt: simplify the same portrait into broad geometric face shapes with recognizable hair, sunglasses and facial hair, copper skin, sage edge accents and a charcoal background; face fills the square and remains readable at 32 pixels.

The hero centers the illustrated portrait inside code-native orbit rings and connection lines. Labels connect interface, systems and people; motion is slow and respects reduced-motion preferences. The lower profile uses `public/images/eric-at-work.webp`, created with the built-in image-generation tool from the supplied `eric2.jpg`. The similar `eric3.jpg` was omitted to keep the page focused.

Editorial photo prompt: preserve Eric's recognizable face, glasses, expression, clothing, gesture, hands and laptop; retain photographic realism, reduce purple/cyan casts, use warm natural skin tones, subdued shadows and restrained film grain, and simplify the indoor background. No added circuit graphics, costumes or text.

Portrait anatomy correction: the built-in image-generation tool shortened the visible neck and raised the collar and shoulder line for natural head-to-body proportions, preserving likeness, glasses, expression, jacket, background and sage lighting. The corrected asset replaces `public/images/eric-future.webp`.

Open-to-roles photo replacement: `public/images/eric-profile-reflected.webp` uses the newly selected side-profile photo. Built-in image-generation edit prompt: horizontally mirror so Eric faces right toward the adjacent text, crop to 4:5, preserve likeness, glasses, expression, natural proportions, white polo and original indoor scene; reduce purple cast gently and apply restrained natural color grading without illustration, new objects or clothing changes.

Framing correction: the open-to-roles image now uses a deterministic crop of the original supplied photograph, trimming only the empty left wall (28% of source width), keeping the entire source height and torso, and mirroring horizontally. No AI reconstruction or extra scene content is used. The layout preserves the resulting image ratio rather than forcing a 4:5 crop. Asset: `public/images/eric-profile-wide.webp`.

Header logo cutout: built-in image-generation background extraction preserves the illustrated face, sunglasses, smile and sage outline, removing only the charcoal background to true transparency. Published asset: `public/images/eric-logo-cutout.webp`. The borderless silhouette is displayed at 62px on desktop and 50px on mobile, paired with the existing em. wordmark.

Operations Manager is featured from the local `operations_manager` repository after reviewing its README, architecture notes, implemented dashboard and development progress. The visual is an original architecture illustration, explicitly labeled as a preview rather than a product screenshot. No remote is configured; the public project uses a contact link. No private operational data or credentials are published, and development status is explicit.
