export const Menu = () => {
  return (
    <div className="bg-white overflow-auto">
      <div className="px-20">
        <ul className="flex items-center justify-evenly gap-6 md:gap-0 px-8 md:px-0">
          <li className={styles.menu}>Stock Video</li>
          <li className={styles.menu}>Video Templates</li>
          <li className={styles.menu}>Music</li>
          <li className={styles.menu}>Sound Effects</li>
          <li className={styles.menu}>Graphics</li>
          <li className={styles.menu}>Presentation Templates</li>
          <li className={styles.menu}>Photos</li>
          <li className={styles.menu}>Fonts</li>
          <li className={styles.menu}>Add-ons</li>
          <li className={styles.menu}>More</li>
        </ul>
      </div>
    </div>
  );
};

const styles = {
  menu: "py-3.5 border-b-2 whitespace-nowrap border-white text-gray-700 m cursor-pointer font-HarmonyM hover:border-primary",
};
