﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Kursovaya3
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Настрой киоска.
    /// </summary>
    // *** Start programmer edit section *** (НастройКиоска CustomAttributes)

    // *** End programmer edit section *** (НастройКиоска CustomAttributes)
    [AutoAltered()]
    [Caption("Настрой киоска")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("НастройКиоскаE", new string[] {
            "НаличиеБумаги as \'Наличие бумаги\'",
            "ЗаправКартр as \'Заправ картр\'",
            "ДатаНастройки as \'Дата настройки\'",
            "ВремяНастройки as \'Время настройки\'"})]
    [View("НастройКиоскаL", new string[] {
            "НаличиеБумаги as \'Наличие бумаги\'",
            "ЗаправКартр as \'Заправ картр\'",
            "ДатаНастройки as \'Дата настройки\'",
            "ВремяНастройки as \'Время настройки\'"})]
    public class НастройКиоска : ICSSoft.STORMNET.DataObject
    {
        
        private bool fНаличиеБумаги;
        
        private bool fЗаправКартр;
        
        private System.DateTime fДатаНастройки;
        
        private string fВремяНастройки;
        
        private IIS.Kursovaya3.Оператор fОператор;
        
        // *** Start programmer edit section *** (НастройКиоска CustomMembers)

        // *** End programmer edit section *** (НастройКиоска CustomMembers)

        
        /// <summary>
        /// ВремяНастройки.
        /// </summary>
        // *** Start programmer edit section *** (НастройКиоска.ВремяНастройки CustomAttributes)

        // *** End programmer edit section *** (НастройКиоска.ВремяНастройки CustomAttributes)
        [StrLen(255)]
        public virtual string ВремяНастройки
        {
            get
            {
                // *** Start programmer edit section *** (НастройКиоска.ВремяНастройки Get start)

                // *** End programmer edit section *** (НастройКиоска.ВремяНастройки Get start)
                string result = this.fВремяНастройки;
                // *** Start programmer edit section *** (НастройКиоска.ВремяНастройки Get end)

                // *** End programmer edit section *** (НастройКиоска.ВремяНастройки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройКиоска.ВремяНастройки Set start)

                // *** End programmer edit section *** (НастройКиоска.ВремяНастройки Set start)
                this.fВремяНастройки = value;
                // *** Start programmer edit section *** (НастройКиоска.ВремяНастройки Set end)

                // *** End programmer edit section *** (НастройКиоска.ВремяНастройки Set end)
            }
        }
        
        /// <summary>
        /// ДатаНастройки.
        /// </summary>
        // *** Start programmer edit section *** (НастройКиоска.ДатаНастройки CustomAttributes)

        // *** End programmer edit section *** (НастройКиоска.ДатаНастройки CustomAttributes)
        public virtual System.DateTime ДатаНастройки
        {
            get
            {
                // *** Start programmer edit section *** (НастройКиоска.ДатаНастройки Get start)

                // *** End programmer edit section *** (НастройКиоска.ДатаНастройки Get start)
                System.DateTime result = this.fДатаНастройки;
                // *** Start programmer edit section *** (НастройКиоска.ДатаНастройки Get end)

                // *** End programmer edit section *** (НастройКиоска.ДатаНастройки Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройКиоска.ДатаНастройки Set start)

                // *** End programmer edit section *** (НастройКиоска.ДатаНастройки Set start)
                this.fДатаНастройки = value;
                // *** Start programmer edit section *** (НастройКиоска.ДатаНастройки Set end)

                // *** End programmer edit section *** (НастройКиоска.ДатаНастройки Set end)
            }
        }
        
        /// <summary>
        /// ЗаправКартр.
        /// </summary>
        // *** Start programmer edit section *** (НастройКиоска.ЗаправКартр CustomAttributes)

        // *** End programmer edit section *** (НастройКиоска.ЗаправКартр CustomAttributes)
        public virtual bool ЗаправКартр
        {
            get
            {
                // *** Start programmer edit section *** (НастройКиоска.ЗаправКартр Get start)

                // *** End programmer edit section *** (НастройКиоска.ЗаправКартр Get start)
                bool result = this.fЗаправКартр;
                // *** Start programmer edit section *** (НастройКиоска.ЗаправКартр Get end)

                // *** End programmer edit section *** (НастройКиоска.ЗаправКартр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройКиоска.ЗаправКартр Set start)

                // *** End programmer edit section *** (НастройКиоска.ЗаправКартр Set start)
                this.fЗаправКартр = value;
                // *** Start programmer edit section *** (НастройКиоска.ЗаправКартр Set end)

                // *** End programmer edit section *** (НастройКиоска.ЗаправКартр Set end)
            }
        }
        
        /// <summary>
        /// НаличиеБумаги.
        /// </summary>
        // *** Start programmer edit section *** (НастройКиоска.НаличиеБумаги CustomAttributes)

        // *** End programmer edit section *** (НастройКиоска.НаличиеБумаги CustomAttributes)
        public virtual bool НаличиеБумаги
        {
            get
            {
                // *** Start programmer edit section *** (НастройКиоска.НаличиеБумаги Get start)

                // *** End programmer edit section *** (НастройКиоска.НаличиеБумаги Get start)
                bool result = this.fНаличиеБумаги;
                // *** Start programmer edit section *** (НастройКиоска.НаличиеБумаги Get end)

                // *** End programmer edit section *** (НастройКиоска.НаличиеБумаги Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройКиоска.НаличиеБумаги Set start)

                // *** End programmer edit section *** (НастройКиоска.НаличиеБумаги Set start)
                this.fНаличиеБумаги = value;
                // *** Start programmer edit section *** (НастройКиоска.НаличиеБумаги Set end)

                // *** End programmer edit section *** (НастройКиоска.НаличиеБумаги Set end)
            }
        }
        
        /// <summary>
        /// Настрой киоска.
        /// </summary>
        // *** Start programmer edit section *** (НастройКиоска.Оператор CustomAttributes)

        // *** End programmer edit section *** (НастройКиоска.Оператор CustomAttributes)
        [PropertyStorage(new string[] {
                "Оператор"})]
        [NotNull()]
        public virtual IIS.Kursovaya3.Оператор Оператор
        {
            get
            {
                // *** Start programmer edit section *** (НастройКиоска.Оператор Get start)

                // *** End programmer edit section *** (НастройКиоска.Оператор Get start)
                IIS.Kursovaya3.Оператор result = this.fОператор;
                // *** Start programmer edit section *** (НастройКиоска.Оператор Get end)

                // *** End programmer edit section *** (НастройКиоска.Оператор Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (НастройКиоска.Оператор Set start)

                // *** End programmer edit section *** (НастройКиоска.Оператор Set start)
                this.fОператор = value;
                // *** Start programmer edit section *** (НастройКиоска.Оператор Set end)

                // *** End programmer edit section *** (НастройКиоска.Оператор Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "НастройКиоскаE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройКиоскаE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройКиоскаE", typeof(IIS.Kursovaya3.НастройКиоска));
                }
            }
            
            /// <summary>
            /// "НастройКиоскаL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View НастройКиоскаL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("НастройКиоскаL", typeof(IIS.Kursovaya3.НастройКиоска));
                }
            }
        }
    }
}
